import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from './components/navbar/navbar';
import Footer from './components/footer/Footer';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}</body>
        <Footer />
    </html>
  );
}
