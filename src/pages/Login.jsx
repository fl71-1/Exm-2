import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

// import { SlBookOpen } from "react-icons/sl";

export default function Login() {
  const [login, setLogin] = useState({
    name: "",
    password: ""
  });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  function handle(event) {
    event.preventDefault();
    const apiEndpoint = "https://6707526ba0e04071d229cfb5.mockapi.io/user"; 

    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(login),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate("/Home");
        } else {
          setError("Invalid name or password");
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        setError(" Please try again l.");
      });
  }

  return (
    <div className='bg-[#e1ddc5] w-full h-screen flex justify-center items-start relative'>
      
<img className='w-1/3 h-1/4  absolute' src='https://blog.openlibrary.org/files/2023/04/cropped-cropped-openlibrary-header.png'></img>
      

      <div className='flex mx-auto justify-center items-center h-full w-[60%]   '>
        <div className='flex flex-col text-center justify-center h-1/2 w-1/2 items-center bg-[#f9f9f9] shadow-xl p-4'>
          <h1 className='text-2xl'>Log In</h1>
          <p>Log in and browse the digital library...</p>
        </div>
        <div className='flex flex-col w-1/2 h-1/2 bg-[#ffffff] gap-6 p-10'>
          <label>Name</label>
          <input
            value={login.name}
            onChange={(e) => setLogin({ ...login, name: e.target.value })}
            type='text'
            className='w-full p-2 border-2 rounded-full'
          />

          <label>Password</label>
          <input
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
            type="password"
            className='w-full p-2 border-2 rounded-full'
          />

          {error && <p className='text-red-500'>{error}</p>}
          <button onClick={handle} className='bg-[#2777b8] p-2 text-white'>
            Log in
          </button>

          <Link to="/Signup">
            <h1 className='hover:text-[#2777b8]'>Sign up now?</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
