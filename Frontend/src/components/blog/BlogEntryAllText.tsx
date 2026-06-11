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
            p: 2, 
            flexGrow: 1, 
            mb: 4,
            display:"flex", 
            flexDirection:"column", 
            justifyContent:"center", 
            alignItems:"center",
            width:"100%",
            height: "100%",
            bgcolor:"background.paper",

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
