import { alpha, Box, SxProps, Typography } from "@mui/material";
import Image from 'next/image';
import primaryTheme from "../../mui/themes/primary";
import { ReactNode } from "react";

interface blogEntryProps {
    title: String
    text: string
    sx?: SxProps
    children?: ReactNode; 
    
}

export function BlogEntryAllText({title, text, sx, children}: blogEntryProps) {
    return (
        <Box sx={{ 
            p: 2, 
            flexGrow: 1, 
            display:"flex", 
            flexDirection:"column", 
            justifyContent:"center", 
            alignItems:"center",
            width:"100%",
            height: "100%",
            ...sx
            }}>
                <Typography sx={{
                    fontSize:32,
                    width: "40%",
                    textAlign: 'center',
                    mb: 4
                }}>{title}
                </Typography>
                <Typography sx={{
                    fontSize:16,
                    width: "50%",
                }}>{text}
                </Typography>
                {children}
                
            </Box>
    )

}
