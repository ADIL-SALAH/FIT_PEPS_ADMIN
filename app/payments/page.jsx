"use client"
import { Grid } from '@mui/material';
import React from 'react'
import TableUi from '../../Components/UI/TableUi/TableUi';

export default function page() {

    const TABLE_HEAD = ["Client", "Amount", "Status", "Payment Date", "Stripe Id", "Payment Method"];

    const TABLE_CELL = ["clientId", "amount", "status", "paymentDate", "stripeCustomerId", "paymentMethod"];

    return (
        <Grid container bgcolor="" sx={{ height: '100vh', overflow: 'scroll' }}>

            <TableUi

                heading="PAYMENT DETAILS"

                TABLE_CELL={TABLE_CELL}

                TABLE_HEAD={TABLE_HEAD}

                API_NAME="payment"

                isSearch={true}

            />

        </Grid>
    )
}
