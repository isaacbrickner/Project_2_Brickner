import { TableRow, TableCell } from "@mui/material";

export async function MyTableHeader(props: { data: string[] }){
    return(
      <TableRow>
        {props.data.map((key: string, i: number) => (
              <TableCell key={i}>{key}</TableCell>
          ))}
          </TableRow>
    )
  }