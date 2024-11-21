import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from '@vercel/analytics/next';
import { App, ConfigProvider } from "antd";
import SolanaProvider from "./solana-provider";
import { appTheme } from "@/theme";

import "./globals.css";

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
  title: "Sol Token Auth Example",
  description: "Sol Token Auth Example",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConfigProvider theme={appTheme} componentSize="large">
          <App>
            <SolanaProvider>{children}</SolanaProvider>
          </App>
        </ConfigProvider>
        <Analytics />
      </body>
    </html>
  );
}
