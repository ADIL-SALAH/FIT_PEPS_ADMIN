"use client"
import React from 'react'
import TableUi from '../../Components/UI/TableUi/TableUi';
import { Grid } from '@mui/material';
import { usePathname } from 'next/navigation';

function page() {
    const TABLE_HEAD = ["Video Name", "Language", "Description"];

    const TABLE_CELL = ["title", "language.name", "description"];
    // const pathName = usePathname()
    // if (pathName === '/videos') {

    // }

    return (
        <Grid container bgcolor="">

            <TableUi

                heading="AVAILABLE STOCKS"

                TABLE_CELL={TABLE_CELL}

                TABLE_HEAD={TABLE_HEAD}

                API_NAME="video"

                isSearch={true}

            />

        </Grid>
    )
}

export default page
