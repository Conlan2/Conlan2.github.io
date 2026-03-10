import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ThemeProvider } from '@mui/material/styles'
import "./globals.css";
import roboto from "@/src/mui/fonts/roboto";
import primaryTheme from "@/src/mui/themes/primary";
import NavigationBar from "@/src/components/NavigationBar";
import Box from "@mui/material/Box";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Conlan Myers' Website",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={roboto.variable} style={{scrollBehavior:'smooth'}}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <ThemeProvider theme={primaryTheme}>
            <AppRouterCacheProvider>
              <NavigationBar/>
              <Box sx={{width:"100%", display:"flex", flexGrow:1}}>
                {children}
              </Box>
            </AppRouterCacheProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
