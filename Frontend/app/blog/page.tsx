'use client';
import Image from "next/image";
import {Box, Button, Stack} from "@mui/material"

import Footer from "@/src/components/main/Footer";
import { alpha } from "@mui/material/styles";
import primaryTheme from "@/src/mui/themes/primary";


export default function blog() {
    return (<Stack flexGrow={1} sx={{width:"100%", display:"flex", height:"100%"}}>
      <div id="PersonalSection"></div>
      TEST
      <Footer></Footer>
    </Stack>)
}