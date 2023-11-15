"use client"
import { Grid } from '@mui/material';
import React from 'react'
import TableUi from '../../Components/UI/TableUi/TableUi';

export default function page() {

  const TABLE_HEAD = ["Language", "Description"];

  const TABLE_CELL = ["name", "description"];

  return (
    <Grid container bgcolor="">

      <TableUi

        heading="AVAILABLE STOCKS"

        TABLE_CELL={TABLE_CELL}

        TABLE_HEAD={TABLE_HEAD}

        API_NAME="languages"

        isSearch={true}

      />

    </Grid>
  )
}
