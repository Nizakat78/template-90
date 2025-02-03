
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { CartProvider } from "./Context/Cartcontext";
import { AuthProvider } from "./Context/AuthContext";
import {
  ClerkProvider,
} from '@clerk/nextjs'


// Custom font loading
const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Food Tuck Restaurant",
  description: "Food Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* ClerkProvider with the publishable key */}
            <AuthProvider>
          <CartProvider>
          
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
          </AuthProvider>

      </body>
    </html>
    </ClerkProvider>
  );
}
