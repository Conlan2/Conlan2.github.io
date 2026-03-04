import { Box, Typography } from "@mui/material";
import Image from 'next/image';

export default function AboutMeSection() {
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
                    alignItems: "center",
                    backgroundColor: "background.default",
                    m:1,
                    p:2
                }}>
                    <Box
                        sx = {{
                            maxWidth: '600px',
                        }}>
                        <Typography >
                            Bla BlaBlaBlaBlaBl
                            aBlaBlaBlaBlaBlaBla  Bla BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla  Bla BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla  Bla BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla  Bla BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla  Bla BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla  Bla BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla 
                            <br/><br/>

                            Bla BlaBlaBlaBlaBl
                            aBlaBlaBlaBlaBlaBla  Bla BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla  Bla BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla  Bla BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla  Bla BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla  Bla BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla  Bla BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla 
                            <br/><br/>
                            Bla BlaBlaBlaBlaBl
                            aBlaBlaBlaBlaBlaBla  Bla BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla  Bla BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla  Bla BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla  Bla BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla  Bla BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla  Bla BlaBlaBlaBlaBlaBlaBlaBlaBlaBlaBla 
                        </Typography>
                    </Box>
                    </Box>

                <Box sx={{ // Right Box
                    flex:1, 
                    display:"flex", 
                    flexDirection:"column",
                    justifyContent:"center",
                    m:1,
                    p:2}}>
                
                    <Box sx={{
                                        flex: 1,
                                        borderRadius: 8,
                                        aspectRatio: '16/9',
                                        overflow: 'hidden',
                                        width: "80%",
                                        maxHeight: '1000px',
                                        position: "relative",
                                        backgroundColor: "background.default",

                                    }}>
                                        <Image
                                            src="/vercel.svg"
                                            alt="Description"  
                                            fill           
                                            style={{ objectFit: 'cover' }} 
                                        />
                                    </Box>
                                    </Box>
            </Box>
    )

}
