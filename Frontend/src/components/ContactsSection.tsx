import { alpha, Box, Button, Icon, Input, TextField, Typography } from "@mui/material";
import Image from 'next/image';
import Form from 'next/form'
import EmailIcon from '@mui/icons-material/Email';
import { ReactNode } from "react";
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import primaryTheme from "../mui/themes/primary";
interface contactInfoProps {
    type: String
    detail: String
    children: ReactNode 
}
function ContactInfo({type, detail, children}: contactInfoProps){
    return (
        <Box sx={{
            width: "300px",
            mt: 1,
            p: 1,
            display: "flex",
           
        }}>
            <Box
                sx={{
                    flex: 0.3,
                    mr: 2,
                    borderRadius: 4,
                    p: 1,
                    backgroundColor: "background.paper",

                    aspectRatio: '1/1',
                    overflow: 'hidden',
                    maxWidth: '80px',
                    maxHeight: '9900px',
                    position: "relative",
                    boxShadow: `0px 3px 10px 3px ${alpha(primaryTheme.palette.secondary.main, 0.5)}`,
                    transition: "box-shadow 0.1s ease-in-out",
                    ":hover": {
                        boxShadow: `0px 3px 20px 5px ${alpha(primaryTheme.palette.secondary.main, 1)}`
                    }
                        
                }}
            >
                <Box sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    display: "flex",
                    width: "100%",
                    height: "100%"
                }}>
                {children}
                </Box>
                
            </Box>
            <Box sx={{
                flex: 1,
                
            }}>
                <Typography variant="h6">{type}</Typography>
                <Typography>{detail}</Typography>
            </Box>
        </Box>
    )
}


export default function ContactsSection() {
    return (
        <Box sx={{ 
            display:"flex", 
            justifyContent:"space-around", 
            alignItems: "center",
            align:"center",
            width:"70%",
            height: "100%"
            }}>
                <Box sx={{ //Left Box
                    flex:1, 
                    display:"flex", 
                    justifyContent:"flex-end",
                    minWidth: "500px",
                    m:1,
                    p:2
                }}>
                    <Box
                        sx = {{
                            maxWidth: '800px',
                        }}>
                        <Typography variant="h3">
                            Contact Info
                        </Typography>
                        <Typography variant="subtitle1">
                            If you are an employer looking for a innovative, inqusitive, and diligent employee, please reach out with the details below.
                        </Typography>

                        <ContactInfo type="Email" detail="conlan2222@gmail.com">
                            <EmailIcon sx={{width:"90%", height:"90%"}}>
                            </EmailIcon>
                        </ContactInfo>
                        <ContactInfo type="Phone" detail="587-591-1257">
                            <SmartphoneIcon sx={{width:"90%", height:"90%"}}>      
                            </SmartphoneIcon>
                        </ContactInfo>
                        <ContactInfo type="Location" detail="Edmonton, AB, Canada">
                            <LocationOnIcon sx={{width:"90%", height:"90%"}}></LocationOnIcon>
                        </ContactInfo>



                    </Box>
                    </Box>

                <Box sx={{ // Right Box
                    flex:1, 
                    display:"flex", 
                    flexDirection:"column",


                    m:1,
                    p:2,
                    pl: 12}}>
                
                    <Form action="/contact">
                        <Typography variant="subtitle2">Name</Typography>
                        <TextField  sx={{
                            width: "100%",
                            backgroundColor: "background.paper",
                            mb: 2,
                   
                        }}></TextField >
                        <Typography variant="subtitle2">Email</Typography>
                        <TextField sx={{
                            width: "100%",
                            backgroundColor: "background.paper",
                            mb: 2

                        }}></TextField >
                        <Typography variant="subtitle2">Message</Typography>
                        <TextField sx={{
                            width: "100%",
                            backgroundColor: "background.paper",
                            
                        }}
                        multiline 
                        rows={6}></TextField >
                        <Box>
                        <Button sx={{
                            mt: 2,
                            pt: 1,
                            pb: 1,
                            pl: 4,
                            pr: 4,
                            backgroundColor: "background.paper"
                        }}>Submit</Button> 
                        </Box>
                        
                    </Form>
                </Box>
            </Box>
    )

}
