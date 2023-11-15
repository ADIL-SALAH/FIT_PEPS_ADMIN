"use client"
import { Grid, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper, Typography } from '@mui/material'
import React from 'react';

function SalesTable(props: any) {

    const { items } = props;

    console.log(items);


    const tableHead = ["one", "two", "three"]

    return (
        <Grid container bgcolor="" lg={11.5} >

            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">

                    <TableHead>

                        <TableRow>

                            {
                                tableHead.map((data, index) =>

                                    <TableCell key={index} align="center">

                                        <Typography variant='h6' fontWeight="550" >{data}</Typography>

                                    </TableCell>
                                )
                            }

                        </TableRow>

                    </TableHead>

                    <TableBody>

                        {
                            items.map((data: any, index: any) =>

                                <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>

                                    <TableCell component="th">{data.one}</TableCell>
                                    <TableCell align="center">{data.two}</TableCell>
                                    <TableCell align="center">{data.three}</TableCell>

                                </TableRow>
                            )
                        }


                    </TableBody>
                </Table>
            </TableContainer>

        </Grid>

    )

}

export default SalesTable