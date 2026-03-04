import { Box, Typography } from "@mui/material";
import Image from 'next/image';

interface ProjectCardProps {
    title: String,
    skills: String,
    imageSrc: string,
  }

export default function ProjectCard({title, skills, imageSrc}: ProjectCardProps) {
    return (
        <Box sx={{
            mr: 2,
            mb: 4,
            borderRadius: 8,
            minWidth: "400px",
            maxWidth: "600px",
            width: "30%",
            backgroundColor: "background.default",
       
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