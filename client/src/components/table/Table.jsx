import "./table.scss"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const Tablee = () => {

  const rows = [
    { id: 12345, product: 'product1', amount: 150, other: "naijb", img: "https://assets.thehansindia.com/h-upload/2022/07/18/1303611-pro.webp" },
    { id: 13456, product: 'Absolute Vodka', amount: 25, other: "rabeb ", img:"https://assets.thehansindia.com/h-upload/2022/07/18/1303611-pro.webp" },
    { id: 22565, product: 'product3', amount: 675, other: "ouafa", img: "https://assets.thehansindia.com/h-upload/2022/07/18/1303611-pro.webp" },
    { id: 32456, product: 'product4', amount: 256, other: "mlou5iya", img: "https://assets.thehansindia.com/h-upload/2022/07/18/1303611-pro.webp" },
    { id: 45682, product: 'product5', amount: 426, other: "kakawiya", img: "https://assets.thehansindia.com/h-upload/2022/07/18/1303611-pro.webp" },
]
  return (
    <TableContainer component={Paper} className="table">
    <Table sx={{ minWidth: 650 }} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell className="tableCell">id</TableCell>
          <TableCell className="tableCell">product</TableCell>
          <TableCell className="tableCell">amount</TableCell>
          <TableCell className="tableCell">other</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <TableRow
            key={row.id}
          >
            <TableCell className="tableCell">  {row.id} </TableCell>
            <TableCell className="tableCell">
              <div className="cellWrapper">
                <img src={row.img} alt="" className="image" />
                {row.product}
              </div>
            </TableCell>
            <TableCell className="tableCell">{row.amount}</TableCell>
            <TableCell className="tableCell">{row.other}</TableCell>
            
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  )
}

export default Tablee