import type { Metadata } from "next";
import "../styles/globals.css";


export const metadata: Metadata = {
  title: "Japan Internet 5G",
  description: "Internet Services: Pocket wifi - data SIM cards.",
  icons: {
    icon: "/images/JapanInternet5GLogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
