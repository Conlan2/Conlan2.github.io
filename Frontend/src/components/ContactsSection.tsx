import { Box, Button, Input, TextField, Typography } from "@mui/material";
import Image from 'next/image';
import Form from 'next/form'

interface contactInfoProps {
    type: String
    detail: String
}
function ContactInfo({type, detail}: contactInfoProps){
    return (
        <Box sx={{
            width: "40%",
            mt: 1,
            p: 1,
            display: "flex",
            backgroundColor: "background.paper",
            borderRadius: 4
        }}>
            <Box
                sx={{
                    flex: 0.3,
                    mr: 2,
                    borderRadius: 2,
                 
                    aspectRatio: '1/1',
                    overflow: 'hidden',
                    maxWidth: '50px',
                    maxHeight: '9900px',
                    position: "relative"
                }}
            >
                <Image
                    src="/vercel.svg"
                    alt="Description"  
                    fill           
                    style={{ objectFit: 'cover' }} 
                />
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
            align:"center",
            width:"90%",
            height: "100%"
            }}>
                <Box sx={{ //Left Box
                    flex:1, 
                    display:"flex", 
                    justifyContent:"flex-end",
                    m:1,
                    p:2
                }}>
                    <Box
                        sx = {{
                            maxWidth: '600px',
                        }}>
                        <Typography variant="h3">
                            Contact Info
                        </Typography>
                        <Typography variant="subtitle1">
                            Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp Temp 
                        </Typography>

                        <ContactInfo type="Test" detail="Test"></ContactInfo>
                        <ContactInfo type="Test" detail="Test"></ContactInfo>
                        <ContactInfo type="Test" detail="Test"></ContactInfo>



                    </Box>
                    </Box>

                <Box sx={{ // Right Box
                    flex:1, 
                    display:"flex", 
                    flexDirection:"column",
                    width: "50%",
                    m:1,
                    p:2}}>
                
                    <Form action="/contact">
                        <Typography variant="h6">Name</Typography>
                        <TextField  sx={{
                            width: "70%",
                            backgroundColor: "background.paper",
                            borderRadius: 8
                        }}></TextField >
                        <Typography variant="h6">Email</Typography>
                        <TextField sx={{
                            width: "70%",
                            backgroundColor: "background.paper",

                        }}></TextField >
                        <Typography variant="h6">Message</Typography>
                        <TextField sx={{
                            width: "70%",
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
