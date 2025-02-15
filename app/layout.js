import { Outfit as OutfitFont, Ovo as OvoFont } from "next/font/google";
import "./globals.css";
import Head from "next/head"; 

const outfit = OutfitFont({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"]
});

const ovo = OvoFont({
  subsets: ["latin"],
  weight: ["400"]
});

export const metadata = {
  title: "QA Manual - Portfolio",
  description: "",
  
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
       
      <body
        className={`${outfit.className} ${ovo.className} antialiased leading-8 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}

