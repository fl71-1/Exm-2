import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import { SlBookOpen } from "react-icons/sl";

export default function Signup() {
  const [signup, setSignup] = useState({
    name: "",
    password: ""
  });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const navigate = useNavigate();

  function handle(event) {
    event.preventDefault();
    const apiEndpoint = "https://6707526ba0e04071d229cfb5.mockapi.io/user"; 

    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signup),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSuccess(" successfully!");
          setTimeout(() => {
            navigate("/Home");
          },[]); 
        } else {
          setError(" Please try again.");
        }
      })
     
  }

  return (
    <div className='bg-[#e1ddc5] w-full h-screen flex justify-center items-start'>
      {/* < SlBookOpen /> */}

      <div className='flex mx-auto justify-center items-center h-full w-[60%]   '>
      <div className='flex flex-col text-center justify-center h-1/2 w-1/2 items-center bg-[#f9f9f9] shadow-xl p-4'>
      <h1 className='text-2xl '>Sign Up</h1>
          <p>Create your free account to access digital books and more!</p>
        </div>
        <div className='flex flex-col w-1/2 h-1/2 bg-[#ffffff] gap-6 p-10'>
          <label>Name</label>
          <input
            value={signup.name}
            onChange={(e) => setSignup({ ...signup, name: e.target.value })}
            type='text'
            className='w-full p-2 border-2 rounded-full'
          />

          <label>Password</label>
          <input
            value={signup.password}
            onChange={(e) => setSignup({ ...signup, password: e.target.value })}
            type="password"
            className='w-full p-2 border-2 rounded-full'
          />

          {error && <p className='text-red-500'>{error}</p>}
          {success && <p className='text-green-500'>{success}</p>}

          <button onClick={handle} className='bg-[#2777b8] p-2 text-white'>
            Create Account
          </button>

          <Link to="/Login">
            <h1 className='hover:text-[#2777b8]'>have you account? Log in</h1>
          </Link>
        </div>
      </div>
    </div>
  );
}
