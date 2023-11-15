import { Grid, Avatar, Typography, IconButton } from '@mui/material';
import { useRouter } from 'next/navigation';
import NotificationsIcon from '@mui/icons-material/Notifications';

export default function Header() {

    const router = useRouter()

    return (

        <Grid container justifyContent="center" alignItems="center" bgcolor="" p={2}>


            <Grid container md={6}>

                <Typography variant="h4" fontWeight="bold">Fitpeps</Typography>

            </Grid>


            <Grid bgcolor="" container md={6} justifyContent="end" alignItems="center">

                <IconButton sx={{ m: 1 }}>

                    <NotificationsIcon sx={{ color: "black" }} />

                </IconButton>


                <Avatar alt="Remy Sharp"
                    src="https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/rm328-366-tong-08_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=6a37204762fdd64612ec2ca289977b5e"
                    sx={{ width: 45, height: 45 }} />

            </Grid>


        </Grid >
    )
}


