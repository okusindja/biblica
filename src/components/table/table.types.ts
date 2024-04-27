export interface TableProps {
  tableHeads: string[];
  data: { [key: string]: string }[];
  columnWidths: number[];
}
