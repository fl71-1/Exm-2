import { IoTrendingUp } from "react-icons/io5";

export default function Home() {
  return (
    <div className="bg-[#e1ddc5] h-screen w-full">
      <div className="flex justify-center items-center h-full">
        <div className="bg-white w-11/12 md:w-1/2 h-3/4 p-6 shadow-lg flex flex-col items-center">
          <h1 className="text-4xl font-semibold text-[#255887] mb-6 text-center">
            Welcome to Open Library
          </h1>
          <div className="bg-[#fbfcf6] w-full h-full p-4 flex flex-col md:flex-row items-center justify-around gap-8">
            <div className="flex flex-col gap-4 text-center md:text-left">
                
                <h2 className="text-2xl font-bold">Read Free Library Books Online</h2>
              <p className="text-[#bab7b8]"> 
                Millions of books available through Controlled Digital Lending.
              </p>

              
                     <div className="flex justify-center md:justify-start items-center mt-4 text-2xl">
                <p className="hover:text-[#255887]">
                  Trending Books <IoTrendingUp className="inline-block ml-2" />
                </p>
              </div>  
                </div>
            <div className="w-1/2 md:w-1/3">
                  <img
                className="opacity-20"
                src="https://png.pngtree.com/png-vector/20210130/ourmid/pngtree-desktop-computer-clipart-black-and-white-png-image_2862459.jpg" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
