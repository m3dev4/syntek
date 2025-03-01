import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { ClerkProvider } from '@clerk/nextjs'
import "./globals.css";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/provider/themeProvider";


const IBMPlex = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '---font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Syntek",
  description: "Transformez vos photos avec l'intelligence artificielle",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="fr" suppressHydrationWarning>
        <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        </head>
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>      
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >    
            {children}
            </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
