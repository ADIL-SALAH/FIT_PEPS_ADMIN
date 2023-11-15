"use client"
import React from 'react'
import TableUi from '../../Components/UI/TableUi/TableUi';
import { Grid } from '@mui/material';

function page() {
    const TABLE_HEAD = ["Video Name", "Code", "Description"];

    const TABLE_CELL = ["firstName", "whatsApp", "state"];

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
