import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import usdc_1 from '../assets/images/Dashboard/usdc_1.svg';
import usdc_2 from '../assets/images/Dashboard/usdc_2.svg';

const columns = [
    { id: 'name', label: '#' , minWidth: 150},
    { id: 'code', label: 'Token Name', minWidth: 150},
    { id: 'code1', label: 'TVL 🡫' },
    { id: 'population', label: 'Volume 7D'},
    { id: 'size', label: 'Volume 24H',minWidth: 160},
];

function createData(name, code, code1, population, size) {
    const density = population / size;
    return { name, code, code1, population, size, density };
}

const rows = [
    createData(1,
        <div className='usde_row'>
            <img src={usdc_1} alt="usdc_1" />
            <div className='usde_text'>
                <h5>USDC</h5>
                <span>USDC Coin</span>
            </div>
        </div>
        , "$41.36m", "$69.06m", "$7.88m"),
    createData(2,
        <div className='usde_row'>
            <img src={usdc_2} alt="usdc" />
            <div className='usde_text'>
                <h5>sAVAX</h5>
                <span>Staked AVAX</span>
            </div>
        </div>
        , "$19.31m", "$8.15m" ,"$4.38m"),
    createData(3,
        <div className='usde_row'>
            <img src={usdc_1} alt="usdc_1" />
            <div className='usde_text'>
                <h5>USDC.e</h5>
                <span>USD Coin</span>
            </div>
        </div>
        , "$15.96m", "$51.73m" , "$5.63m"),
];

export default function AppTable() {
    const [page] = React.useState(0);
    const [rowsPerPage] = React.useState(10);

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 440 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows
                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            .map((row) => {
                                return (
                                    <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                        {columns.map((column) => {
                                            const value = row[column.id];
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {column.format && typeof value === 'number'
                                                        ? column.format(value)
                                                        : value}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                );
                            })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}


