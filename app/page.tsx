import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <main className='flex'>
      <Sidebar />
      <div className='flex-grow bg-white overflow-auto'>
        <Navbar />
      </div>
    </main>
  );
}
