import { Button, Stack, Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Image from 'next/image';


export default function PersonalSection() {
    return (
        <Box sx={{ 
        display:"flex", 
        justifyContent:"space-around", 
        alignContent:"flex-start",
        width:"90%",
        }}>
            <Box sx={{ //Left Box
                flex:1, 
                display:"flex", 
                justifyContent:"flex-end",
                alignItems: "center",
                m:1,
                p:2
            }}>
                <Box sx={{
                    flex: 1,
                    borderRadius: 8,
                    aspectRatio: '9/14',
                    overflow: 'hidden',
                    maxWidth: '600px',
                    maxHeight: '9900px',
                    position: "relative"
                }}>
                    <Image
                        src="/vercel.svg"
                        alt="Description"  
                        fill           
                        style={{ objectFit: 'cover' }} 
                    />
                </Box>
            </Box>

            <Box sx={{ // Right Box
                flex:1, 
                display:"flex", 
             
                flexDirection:"column",
                justifyContent:"center",
                m:1,
                p:2}}>
                <Typography variant="h2">
                    Conlan Myers
                </Typography>
                <Typography variant="h2" sx={{color:"secondary.main"}}>
                    Software Engineer
                </Typography>
                <Typography sx={{maxWidth: "70%"}}>
                    Temp Info Temp InfoTemp InfoTemp InfoTemp InfoTemp InfoTemp InfoTemp InfoTemp InfoTemp InfoTemp Temp Info Temp InfoTemp InfoTemp InfoTemp InfoTemp InfoTemp InfoTemp InfoTemp InfoTemp InfoTemp InfoTempTemp Info Temp InfoTemp InfoTemp InfoTemp InfoTemp InfoTemp InfoTemp InfoTemp InfoTemp InfoTemp InfoTempTemp Info Temp InfoTemp InfoTemp InfoTemp InfoTemp InfoTemp InfoTemp InfoTemp InfoTemp InfoTemp InfoTemp InfoTemp Info
                </Typography>
                <Stack direction="row">
                    <Button>Get In Touch</Button>
                    <Button>View Projects</Button>
                </Stack>
            </Box>
        </Box>
    )
}