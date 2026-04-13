import { alpha, Box, Typography } from "@mui/material";
import Image from 'next/image';
import primaryTheme from "../mui/themes/primary";

interface ProjectCardProps {
    title: String,
    desc: String,
    skills: Array<String>,
    imageSrc: string,
  }

export default function ProjectCard({title, desc, skills, imageSrc}: ProjectCardProps) {
    return (
        <Box sx={{
            flex: "1 0 100%;",
            ml: 2,
            mr: 2,
            mb: 4,
            mt: 4,
            borderRadius: 8,
            minWidth: "300px",
            maxWidth: "400px",
            backgroundColor: "background.default",
            boxShadow: `0px 3px 10px 3px ${alpha(primaryTheme.palette.secondary.main, 0.7)}`,
            transition: "box-shadow 0.1s ease-in-out",
            ":hover": {
                boxShadow: `0px 3px 20px 5px ${alpha(primaryTheme.palette.secondary.main, 1)}`
            }
            }}>
                
                <Box
                    sx={{
                        borderTopLeftRadius: 8,
                        borderTopRightRadius: 8,

                        width: "100%",
                        height: "55%",
                        aspectRatio: '1/1.1',
                        overflow: 'hidden',
                        position: "relative"
                    }}
                >
                    <Image
                        src={imageSrc}
                        alt="Description"  
                        fill           
                        style={{ objectFit: 'cover' }} 
                    />
                   
            </Box>
            <Box sx={{
                ml: 2,
                mt: 1

            }}>
                <Typography variant="h4" flexGrow={1}>{title}</Typography>
                <Typography variant="subtitle1" sx={{mt: 1, color:"dark"}}>{desc}</Typography>
                <Box sx={{mt: 2, display:"flex", width:"100%", flexWrap:"wrap", justifyContent:"space-around"}}>
                    {skills.map((skill, index) => (
                        <Box key={index} sx={{
                            backgroundColor: 'secondary.dark',
                            borderRadius: 8,
                            p: 0.5,
                            pl: 2,
                            pr: 2,
                            mr: 2,
                            mb: 2,
                            boxShadow: `0px 0px 3px 3px ${alpha(primaryTheme.palette.secondary.main, 1)}`
                            }}>
                            <Typography variant="subtitle1">{skill}</Typography>
                        </Box>
                    ))}
                </Box>
            </Box>
            
       </Box>
    )
}