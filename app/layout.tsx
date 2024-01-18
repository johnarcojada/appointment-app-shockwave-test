import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "styles/globals.css";

const urbanist = Urbanist({
  weight: ["300", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Appointment App",
  description: "Appointment Application FE Test",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body className={urbanist.className}>{children}</body>
    </html>
  );
}
