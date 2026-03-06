import { alpha, Box, Typography } from "@mui/material";
import Image from 'next/image';
import primaryTheme from "../mui/themes/primary";

interface ProjectCardProps {
    title: String,
    skills: String,
    imageSrc: string,
  }

export default function ProjectCard({title, skills, imageSrc}: ProjectCardProps) {
    return (
        <Box sx={{
            flex: 1,
            ml: 2,
            mr: 2,
            mb: 4,
            mt: 4,
            borderRadius: 8,
            minWidth: "400px",
            maxWidth: "600px",
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
            <Typography variant="subtitle1" sx={{mt: 3}}>{skills}</Typography>
            </Box>
            
       </Box>
    )
}