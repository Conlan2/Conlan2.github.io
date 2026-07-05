import { alpha, Box, SxProps, Theme, Typography } from "@mui/material";
import Image from 'next/image';
import { ReactNode } from "react";


interface blogEntryProps {
    title: String
    text: string
    sx?: SxProps<Theme>
    children?: ReactNode; 
    
}

export function BlogEntryAllText({title, text, sx, children}: blogEntryProps) {
    return (
        <Box sx={{ 
            mt: 4,
            p: 2, 
            flexGrow: 1, 
            pb: 4,
            display:"flex", 
            flexDirection:"column", 
            justifyContent:"center", 
            alignItems:"center",
            width:"100%",
            height: "100%",
    
            ...sx
            }}>
                <Typography sx={{
                    fontSize:48,
                    width: "40%",
                    textAlign: 'center',
                    mb: 4
                }}>{title}
                </Typography>
                <Typography sx={{
                    fontSize:19,
                    width: "50%",
                }}>{text}
                </Typography>
                {children}
                
            </Box>
    )

}
