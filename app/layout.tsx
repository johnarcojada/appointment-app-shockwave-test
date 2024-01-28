import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "styles/globals.css";
import StoreProvider from "./StoreProvider";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

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
      <body className={urbanist.className}>
        <StoreProvider>
          <main className='flex'>
            <Sidebar />
            <div className='flex flex-col flex-grow bg-white overflow-auto'>
              <Navbar />
              <div className='main-area flex-grow max-h-100vh-116 overflow-auto custom-scrollbar'>
                {children}
              </div>
            </div>
          </main>
        </StoreProvider>
      </body>
    </html>
  );
}
