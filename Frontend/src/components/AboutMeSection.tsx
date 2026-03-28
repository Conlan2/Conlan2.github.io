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
                    m:1,
                    p:2
                }}>
                    <Box
                        sx = {{
                            maxWidth: '600px',
                        }}>
                        <Typography variant="subtitle1">
                            I am have always been interested in everything computers since a very young age. I even have a dimple on my cheek I got from when I fell off my dad's office chair when I was five. 
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
