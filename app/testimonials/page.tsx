"use client"
import React from 'react'
import TableUi from '../../Components/UI/TableUi/TableUi';
import { Grid } from '@mui/material';

export default function page() {
    const TABLE_HEAD = ["Client", "Message"];

    const TABLE_CELL = ["client.firstName", "message"];

    return (
        <Grid container bgcolor="">

            <TableUi

                heading="AVAILABLE STOCKS"

                TABLE_CELL={TABLE_CELL}

                TABLE_HEAD={TABLE_HEAD}

                API_NAME="testimonials"

                isSearch={true}

            />

        </Grid>
    )
}
