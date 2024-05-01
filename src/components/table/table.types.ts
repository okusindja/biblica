export interface TableProps {
  tableHeads: string[];
  data: { [key: string]: string | number }[];
  columnWidths: number[];
}
