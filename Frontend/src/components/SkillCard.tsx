import { alpha, Box, Typography } from "@mui/material";
import Image from 'next/image';
import primaryTheme from "../mui/themes/primary";

interface SkillCardProps {
    title: String,
    skillText: String,
    iconSrc: string,
  }

export default function SkillCard({title, skillText, iconSrc}: SkillCardProps) {
    return (
        <Box sx={{
            p: 3, 
            mr: 2,
            ml: 2,
            mb: 4,
            borderRadius: 8,
            minWidth: "400px",
            maxWidth: "600px",
            width: "30%",
            backgroundColor: "background.paper",
            flex: 1,
            boxShadow: `0px 3px 10px 3px ${alpha(primaryTheme.palette.secondary.main, 0.5)}`,
            transition: "box-shadow 0.1s ease-in-out",
            ":hover": {
                boxShadow: `0px 3px 20px 5px ${alpha(primaryTheme.palette.secondary.main, 1)}`
            }
            }}>
            <Box
                sx={{
                    borderRadius: 2,
                    mb: 1,
                    aspectRatio: '1/1',
                    overflow: 'hidden',
                    maxWidth: '50px',
                    maxHeight: '9900px',
                    position: "relative"
                }}
            >
                <Image
                    src={iconSrc}
                    alt="Description"  
                    fill           
                    style={{ objectFit: 'cover' }} 
                />
            </Box>

            <Typography variant="h4" flexGrow={1}>{title}</Typography>
            <Typography variant="subtitle1" sx={{mt: 3}}>{skillText}</Typography>
       </Box>
    )
}