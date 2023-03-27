import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function HomePage() {
  return (
    <div className="h-full flex items-center flex-col justify-center">
      <div className="container flex flex-1">
        <header className="border-r border-gray-300 hidden sm:block sm:w-48 md:w-64">
          <h1 className="py-5">
            <a href="#" className="p-2 inline-block rounded-full ease-in-out duration-200 hover:bg-slate-200">
              <Image src="logo.svg" alt="minguino logo" width={30} height={30} />
            </a>
          </h1>
          <nav>
            <ul className="flex flex-col gap-2">
              <li>
                <a
                  className="active inline-flex w-auto items-center p-2 rounded-full ease-in-out duration-200 hover:bg-slate-200"
                  href="#"
                >
                  <Image src="logo.svg" alt="minguino logo" width={30} height={30} />
                  <span className="px-3">Home</span>
                </a>
              </li>
              <li>
                <a
                  className="inline-flex w-auto items-center p-2 rounded-full ease-in-out duration-200 hover:bg-slate-200"
                  href="#"
                >
                  <Image src="logo.svg" alt="minguino logo" width={30} height={30} />
                  <span className="px-3">Notifications</span>
                </a>
              </li>
              <li>
                <a
                  className="inline-flex w-auto items-center p-2 rounded-full ease-in-out duration-200 hover:bg-slate-200"
                  href="#"
                >
                  <Image src="logo.svg" alt="minguino logo" width={30} height={30} />
                  <span className="px-3">Profile</span>
                </a>
              </li>
            </ul>
          </nav>
        </header>
        <main className="flex-1 relative">
          <h2 className="flex p-4 items-center backdrop-blur-md text-xl font-bold">Inicio</h2>
          <input className="w-full h-10 border border-gray-300" type="text" name="" id="" />
        </main>
        <aside className="p-6 border-l border-gray-300 hidden lg:block sm:w-48 md:w-64">hey</aside>
      </div>
    </div>
  );
}
