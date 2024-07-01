import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./providers/theme-providers";

const font = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FinFlux",
  description: "All in one Agency Solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider appearance={{baseTheme: dark}}>
    <html lang="en" suppressHydrationWarning>
     
      <body className={font.className}>
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
