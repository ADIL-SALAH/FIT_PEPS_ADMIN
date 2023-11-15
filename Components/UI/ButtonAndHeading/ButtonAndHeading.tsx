import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

function ButtonAndHeading() {
    return (
        <Grid container bgcolor="" lg={11} sx={{ my: 3, alignItems: 'center' }}>

            <Typography variant="h4" fontWeight="bolder">TOTAL STOCKS</Typography>

            <Box bgcolor="red" sx={{ ml: 3, py: 1.5, px: 3, borderRadius: 7, cursor: 'pointer' }}>

                <Typography sx={{ fontWeight: 600, color: '#ffff' }}>ADD NEW ITEM</Typography>

            </Box>

        </Grid>
    )
}

export default ButtonAndHeading