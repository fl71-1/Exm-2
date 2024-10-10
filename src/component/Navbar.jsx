import { Link } from "react-router-dom"
export default function Navbar() {
  return (
    <div className="h-full  p-10 bg-[#ffffff]/10">
      <div className="w-full flex justify-around  text-2xl bg-[#e1ddc5] ">
        <div className="">

<Link to="/Home">

      <h1 className="hover:bg-[#2777b8] hover:text-white p-2 rounded-xl"> LiBRARy </h1>
</Link>
        </div>
        <div className="flex ">
          <ul className="flex gap-6">
            <Link to="/MyBook">
            <li className="hover:bg-[#2777b8] hover:text-white p-2 rounded-xl">My Books</li>
            
            </Link>
            <li className="hover:bg-[#2777b8] hover:text-white p-2 rounded-xl">New releases</li>
          </ul>
          </div>
          <div className="flex gap-4 ">
            <Link to="/Login">
            <button className="hover:bg-[#2777b8] hover:text-white p-2 rounded-xl">Log in</button>
            </Link>
            <Link to="/Signup">
            <button className="hover:bg-[#2777b8] hover:text-white p-2 rounded-xl">Signup</button>
            </Link>
          </div>
        </div>
      
      </div>
  )
}
