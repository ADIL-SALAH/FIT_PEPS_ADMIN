"use client"
import { Pagination, Stack } from '@mui/material'
import React from 'react'


function TabPagination() {

    return (
        <Stack>
            <Pagination count={10} color="primary" />
        </Stack>

    )
}

export default TabPagination