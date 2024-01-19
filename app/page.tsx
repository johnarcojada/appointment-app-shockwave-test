import Image from "next/image";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Appointments from "./pages/Appointments";

export default function Home() {
  return (
    <main className='flex'>
      <Sidebar />
      <div className='flex flex-col flex-grow bg-white overflow-auto'>
        <Navbar />
        <div className='main-area flex-grow'>
          <Appointments />
        </div>
      </div>
    </main>
  );
}
