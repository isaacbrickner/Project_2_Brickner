// "use client"
import Image from "next/image";
import { Container, Table, styled, TableCell, TableRow, TableBody} from "@mui/material"
import { promises as fs } from "fs";
import Typography from '@mui/material/Typography';
import { MyTableBody } from "./components/tableBody"
import { MyTableHeader } from "./components/tableHeader"



export default async function Home() {
  
const fileData = await fs.readFile(process.cwd() + "/assets/gen_1_pokedex.json", "utf8")
const pokeData =  JSON.parse(fileData)
const headers = ["Abilities", "Number", "Name", "Type", "Image"]
  return (
    <main> 
      <Typography variant="h3" align="center" gutterBottom>
        Generation 1 Pokedex
      </Typography>
      <Container> 
      <Table>
        <MyTableHeader data={headers}/>
        <MyTableBody data={pokeData}/>
      </Table>
      </Container>
    </main>
  );
}



