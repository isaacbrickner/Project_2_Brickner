import { TableBody, TableRow, TableCell } from "@mui/material";
import { pokemon } from "../types"

export async function MyTableBody(props: { data: pokemon[] })
{
  return(
    <TableBody>
            { props.data.map((data: pokemon, i: number) => (
              <TableRow>
                <TableCell>{data.abilities}</TableCell>
                <TableCell>{data.number}</TableCell>
                <TableCell>{data.name}</TableCell>
                <TableCell>{data.type}</TableCell>
                <TableCell><img src={data.ThumbnailImage} width="50px" height="50px"></img></TableCell>
                </TableRow>
            ))} 
            </TableBody>
  )
}