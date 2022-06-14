import * as React from 'react'

const idRegex = /([a-z]|[A-Z]|[0-9]|-)+/

// used to compare data in column
// should return first < second equivalent
export interface SortComparator {
  (first: any, second: any): boolean
}

// used to format cell values, if they need different
// representation than default
export interface DisplayFormatter {
  (value: any): any
}

// table column metadata, with column header content
// id is required and should be a simple unique string.
// regex used to perform id validation is at the top of this file.
// can be generated programmically if your headers have unique names
// by replacing spaces with dashes and converting text to lowercase,
// for example: Cost of product -> cost-of-product
// optional: row comparator for sort function
export interface TableColumn {
  header: any,
  id: string,
  inverseSortingByDefault?: boolean
  valueComparator?: SortComparator
  valueDisplayFormatter?: DisplayFormatter
}

// Each row must have unique ID. Same rules as for column ID.
// The amount of values must be the same as (or less than) amount of columns.
export interface TableRow {
  values: Array<any>,
  id: string
}

// table data and metadata
// columns - list of columns metadata, each value is one column
// rows - array of rows to be displayed in table.
export interface TableData {
  columns: Array<TableColumn>
  rows: Array<TableRow>
}

export interface SortableTableProps {
  caption?: any
  tableData: TableData
}
interface RowSorter {
  (first: TableRow, second: TableRow): number
}

interface SortingState {
  columnKey: string,
  inverse: boolean
}

type SetSortingStateFunction = React.Dispatch<React.SetStateAction<SortingState | null>>

class TableIDError extends Error {
  constructor (msg: string) {
    super(msg)
    Object.setPrototypeOf(this, TableIDError.prototype)
  }
}

class TableSortingError extends Error {
  constructor (msg: string) {
    super(msg)
    Object.setPrototypeOf(this, TableSortingError.prototype)
  }
}

function findColumnByID (columns: Array<TableColumn>, id: string): TableColumn | undefined {
  return columns.find((column) => { return column.id === id })
}

function findColumnIndexByID (columns: Array<TableColumn>, id: string): number {
  return columns.findIndex((column) => { return column.id === id })
}

function SortableTableHead ({ columns, setSortingState: setSortState, sortState }: {
  columns: Array<TableColumn>,
  setSortingState: SetSortingStateFunction,
  sortState: SortingState | null})
  : React.ReactElement {
  const isColumnInverseOrderedByDefault = (columnKey: string) => {
    const column = findColumnByID(columns, columnKey)
    return column?.inverseSortingByDefault ?? false
  }

  const updateSortingState = (columnKey: string) => {
    const inverse = sortState?.columnKey === columnKey ? !sortState.inverse : isColumnInverseOrderedByDefault(columnKey)
    setSortState({ columnKey, inverse })
  }

  return (
    <thead>
      <tr>
        { columns.map(({ header, id }) => {
          return <th key={id}>
            <button type="button" onClick={() => {
              updateSortingState(id)
            }}>{header}</button>
          </th>
        })}
      </tr>
    </thead>
  )
}

function SortableTableBody ({ data }: {data: TableData}): React.ReactElement {
  return (
      <tbody>
        {
          data.rows.map(({ values, id }) => {
            return <tr key={id}>
              {values.map((value, columnIndex) => {
                return (<td key={id + '-' + columnIndex.toString()}>{
                  data.columns[columnIndex].valueDisplayFormatter != null ? data.columns[columnIndex].valueDisplayFormatter?.(value) : value
                  }</td>)
              })}
            </tr>
          })
        }
      </tbody>
  )
}

function getRowComparatorForColumn (columns: Array<TableColumn>, sortingState: SortingState): RowSorter {
  const columnIndex = findColumnIndexByID(columns, sortingState.columnKey)
  if (columnIndex === -1) {
    throw new TableSortingError(`Unknown column ID ${sortingState.columnKey}`)
  }

  const columnComparator = columns[columnIndex].valueComparator
  const comparator = columnComparator ?? ((a: TableRow, b: TableRow) => { return a.values[columnIndex] < b.values[columnIndex] })

  return (first: TableRow, second: TableRow) => {
    if (comparator(first, second)) {
      return (sortingState.inverse ? -1 : 1)
    }
    if (comparator(second, first)) {
      return (sortingState.inverse ? 1 : -1)
    }
    return 0
  }
}

export default function SortableTable (props: SortableTableProps): React.ReactElement {
  const [sortingState, setSortingState] = React.useState<SortingState | null>(null)

  props.tableData.columns.forEach(({ id }, index) => {
    if (!idRegex.test(id)) {
      throw new TableIDError(`ID of column #${index} (${id}) is incorrect!`)
    }
  })

  props.tableData.rows.forEach(({ id }, index) => {
    if (!idRegex.test(id)) {
      throw new TableIDError(`ID of row #${index} (${id}) is incorrect!`)
    }
  })

  const sortedData = { ...props.tableData }

  if (sortingState != null) {
    sortedData.rows.sort(getRowComparatorForColumn(props.tableData.columns, sortingState))
  }

  return (<table>
    { props.caption != null ? <caption>{props.caption}</caption> : null }
    <SortableTableHead columns={props.tableData.columns} setSortingState={setSortingState} sortState={sortingState}/>
    <SortableTableBody data={sortedData} />
  </table>)
}
