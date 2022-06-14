import * as React from 'react'

const idRegex = /([a-z]|[A-Z]|[0-9]|-)+/

// used to compare data in column
// if `first` > `second`, return 1
// if `first` < `second`, return -1
// if `first` === `second`, return 0
export interface SortComparator {
  (first: any, second: any): number
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
  valueComparator?: SortComparator
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

class TableIDError extends Error {
  constructor (msg: string) {
    super(msg)

    Object.setPrototypeOf(this, TableIDError.prototype)
  }
}

function SortableTableHead ({ meta }: {meta: Array<TableColumn>}): React.ReactElement {
  return (
    <thead>
      <tr>
        { meta.map(({ header, id }) => {
          return <th key={id}>
            {header}
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
                return (<td key={id + '-' + columnIndex.toString()}>{value}</td>)
              })}
            </tr>
          })
        }
      </tbody>
  )
}

export default function SortableTable (props: SortableTableProps): React.ReactElement {
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

  return (<table>
    { props.caption != null ? <caption>{props.caption}</caption> : null }
    <SortableTableHead meta={props.tableData.columns} />
    <SortableTableBody data={props.tableData} />
  </table>)
}
