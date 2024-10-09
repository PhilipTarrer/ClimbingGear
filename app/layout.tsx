import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/footer';
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>My Website | Best Climbing Gear Reviews and Guides</title>
        <meta name="description" content="Your ultimate guide to the best climbing gear, including shoes, harnesses, and belay devices. Get expert recommendations and reviews."/>
        <meta name="author" content="Philip"/>
      </head>
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
