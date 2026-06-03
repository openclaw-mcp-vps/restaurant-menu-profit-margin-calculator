import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Restaurant Menu Profit Margin Calculator",
  description: "Calculate real profit margins for restaurant menu items. Track ingredient costs, portion sizes, labor time, and overhead allocation per dish."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="5e334658-a4d8-4815-a18b-eba25ee8c9c6"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">{children}</body>
    </html>
  );
}
