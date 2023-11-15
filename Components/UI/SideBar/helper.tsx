import Inventory2Icon from '@mui/icons-material/Inventory2';
import TrendingDownIcon from '@mui/icons-material/TrendingDown';
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import SettingsIcon from '@mui/icons-material/Settings';
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';

import QueryStatsIcon from '@mui/icons-material/QueryStats';
import Shop2Icon from '@mui/icons-material/Shop2';
import LanguageIcon from '@mui/icons-material/Language';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import PaidIcon from '@mui/icons-material/Paid';
import SwitchAccountIcon from '@mui/icons-material/SwitchAccount';
import CategoryIcon from '@mui/icons-material/Category';
import SpeakerNotesIcon from '@mui/icons-material/SpeakerNotes';
import { useQueryFetch } from '../../../hooks/useFetch';





export const subRoutes: any = [

    // {
    //     name: 'Dashboard',
    //     icon: SpaceDashboardIcon,
    //     children: [
    //         {
    //             text: 'Dashboard',
    //             path: '/'
    //         },

    //     ]
    // },
    {
        name: 'Clients',
        icon: SwitchAccountIcon,
        children: [
            {
                text: 'All Users',
                path: '/users'
            },


        ]
    },
    {
        name: 'Categories',
        icon: CategoryIcon,
        children: [
            {
                text: 'plan',
                path: '/workoutplan'
            },
            {
                text: 'New',
                path: '/workoutplan/create'
            },

        ]
    },
    // {
    //     name: 'Languages',
    //     icon: LanguageIcon,
    //     children: [
    //         {
    //             text: 'List',
    //             path: '/lan'
    //         },
    //         {
    //             text: 'New',
    //             path: '/lan/create'
    //         },

    //     ]
    // },
    {
        name: 'Videos',
        icon: VideoLibraryIcon,
        children: [
            {
                text: "Videos",
                path: '/videos'
            },
            {
                text: "New",
                path: '/videos/create'
            },

        ]
    },
    {
        name: 'testimonials',
        icon: SpeakerNotesIcon,
        children: [
            {
                text: "New",
                path: '/testimonials/create'
            },
            {
                text: "List",
                path: '/testimonials'
            },

        ]
    },

    {
        name: 'Payments',
        icon: PaidIcon,
        children: [
            {
                text: 'All Payments',
                path: '/payments'
            },
            // {
            //     text: 'Chart Of Accounts',
            //     path: '/account/chartofaccounts'
            // },
        ]
    },



    //testimonials
    {
        name: 'Settings',
        icon: SettingsIcon,
        children: [
            // {
            //     text: "Reset Password",
            //     path: '/resetpassword'
            // },
            {
                text: "Logout",
                path: '/logout'
            },
        ]
    },

]