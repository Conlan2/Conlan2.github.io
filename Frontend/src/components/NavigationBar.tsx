import { AppBar, Divider, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


export default function NavigationBar() {
    return (

        <AppBar sx={{flexGrow: 1, position: 'sticky'}} elevation={3}>
            <Toolbar>
                <Typography variant='h6' sx={{ fontWeight: 'bold' }}>Conlan Myers's Portfolio</Typography>
                <Box sx={{flexGrow: 1}}></Box>
                <Box display="flex" justifyContent="space-between">
                    <Button>
                        Home
                    </Button>
                    <Button>
                        About
                    </Button>
                    <Button>
                        Skills
                    </Button>
                    <Button>
                        Projects
                    </Button>
                    <Button>
                        Contacts
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
        
    )
}