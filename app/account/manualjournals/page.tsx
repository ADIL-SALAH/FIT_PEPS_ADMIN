"use client"
import { Grid } from '@mui/material';
import React from 'react'
import TableUi from '../../../Components/UI/TableUi/TableUi';

function page() {
    const TABLE_HEAD = ["Jv No", "Code", "Date"];

    const TABLE_CELL = ["jvNo", "refNo", "date"];


    return (

        <Grid container bgcolor="">

            <TableUi

                heading="Manual Journals"

                TABLE_CELL={TABLE_CELL}

                TABLE_HEAD={TABLE_HEAD}

                API_NAME="journal-entries"

            //fileName="purchases/purchaseorders"

            />

        </Grid>
    )
}

export default page