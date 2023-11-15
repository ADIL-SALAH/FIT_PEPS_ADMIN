"use client"
import { Grid } from '@mui/material';
import React from 'react'
import TableUi from '../../../Components/UI/TableUi/TableUi';

function page() {
    const TABLE_HEAD = ["NAME", "CODE", "ID", "DESCRIPTION", "CATEGORY ID"];

    const TABLE_CELL = ["name", "code", "id", "description", "category_id"];


    return (

        <Grid container bgcolor="">

            <TableUi

                heading="Chart Of Accounts"

                TABLE_CELL={TABLE_CELL}

                TABLE_HEAD={TABLE_HEAD}

                API_NAME="products"

                fileName="account/chartofaccounts"

            />

        </Grid>
    )
}

export default page