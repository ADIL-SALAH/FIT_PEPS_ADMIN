import { TableRow, TableCell, TableBody, Skeleton } from '@mui/material'

import React from 'react'

export default function SkeletonLoading(props: any) {

    const { TABLE_HEAD } = props;

    console.log("TABLE_HEAD", TABLE_HEAD);


    return (

        <TableBody>

            <TableRow>

                {
                    TABLE_HEAD.map((data: any, index: any) =>

                        <TableCell key={index} component="th" scope="row" >
                            <Skeleton animation="wave" variant="text" />
                        </TableCell>

                    )
                }

                < TableCell >
                    <Skeleton animation="wave" variant="text" />
                </TableCell>

                < TableCell >
                    <Skeleton animation="wave" variant="text" />
                </TableCell>

            </TableRow >

        </TableBody >


    )
}
