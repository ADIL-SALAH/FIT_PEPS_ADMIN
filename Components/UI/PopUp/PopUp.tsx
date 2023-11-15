import { Box, Button, Grid, TextField } from '@mui/material'
import React from 'react'

export default function PopUp() {

    return (
        <Grid container sx={{
            position: 'fixed',
            top: "50%",
            left: "50%",
            transform: 'translate(-50%,-50%)',
            zIndex: 100, bgcolor: "",
            backgroundColor: 'rgba(100, 100, 100, 0.9)'
        }}>

            <Grid container justifyContent="center" alignItems="center" height="100vh"
                sx={{ bgcolor: "", p: 4, flexDirection: 'column' }}>


                <TextField id="standard-basic" label="Standard" variant="standard" />

                <TextField id="standard-basic" label="Standard" variant="standard" />

                <Button>log in</Button>


            </Grid>

        </Grid>
    )
}
