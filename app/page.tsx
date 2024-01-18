import Image from "next/image";
import Sidebar from "./components/Sidebar";

export default function Home() {
  return (
    <main className='flex'>
      <Sidebar />
      <div className='flex-grow bg-white overflow-auto'></div>
    </main>
  );
}
