import { AppBar, Stack, Toolbar, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import primaryTheme from '../mui/themes/primary';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default function Footer() {
    return (

        <AppBar sx={{flexGrow: 1, 
                position: 'sticky',
                borderColor: "transparent",
                height: "200px"
}} >
            <Toolbar sx={{
                pt: 2
            }}>
                <Stack sx={{
                    display:"flex",
                    flexDirection: "column",
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    {/* <Box sx={{
                        display:"flex",
                        width: "100%",
                        justifyContent: "center",
                        alignItems: "center",
                    }}>
                        <GitHubIcon sx={{
                            width:"40px",
                            height:"40px"
                        }}/>
                        <LinkedInIcon sx={{
                            width:"40px",
                            height:"40px"
                        }}/>
                    </Box> */}
                    <Typography>© Conlan Myers. All rights reserved.</Typography>

                </Stack>
            </Toolbar>
        </AppBar>
        
    )
}