import type { Metadata } from "next";

import Main from '@/Layout/Main/Main';
import CustomClothing from '@/Layout/CustomClothing/CustomClothing';
import Popular from '@/Layout/Popular/Popular';

import "./globals.css";
import AddInform from '@/Layout/AddInform/AddInform';


export const metadata: Metadata = {
  title: "Ceriga",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Main/>
		<CustomClothing/>
		<Popular/>
		<AddInform/>
      </body>
    </html>
  );
}
