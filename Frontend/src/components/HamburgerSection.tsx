import { Box, SxProps, Theme, Typography } from "@mui/material";
import { ReactNode } from "react";


interface HamburgerSectionProps {
    title: String
    sx?: SxProps<Theme>;
    children: ReactNode; 
  }

export default function HamburgerSection({title, sx, children}: HamburgerSectionProps) {
    return (
        <Box sx={{
            p: 2, 
            flexGrow: 1, 
            display:"flex", 
            flexDirection:"column", 
            alignItems:"center", 
            ...sx}}>
            <Typography variant="h2" flexGrow={1}>{title}</Typography>
            {children}
        </Box>
    )
}