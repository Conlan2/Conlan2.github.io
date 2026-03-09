import { alpha, AppBar, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import primaryTheme from "../mui/themes/primary";
import Link from 'next/link'


export default function NavigationBar() {

    return (

        <AppBar sx={{flexGrow: 1, 
                position: 'sticky',
            }} >
   
            <Toolbar >
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Conlan Myers's Portfolio</Typography>
                <Box sx={{flexGrow: 1}}></Box>
                <Box display="flex" justifyContent="space-between">
                    <Button>
                        <Link href='#PersonalSection'>
                        Home
                        </Link>
                    </Button>
                    <Button>
                        <Link href='#AboutMeSection'>
                        About
                        </Link>
                        
                    </Button>
                    <Button>
                        <Link href='#SkillsAndExpertise'>
                        Skills
                        </Link>
                    </Button>
                    <Button>
                        <Link href='#FeaturedProjectsSection'>
                        Projects
                        </Link>
                        
                    </Button>
                    <Button>
                        <Link href='#ContactsSection'>
                        Contacts
                        </Link>

                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
        
    )
}