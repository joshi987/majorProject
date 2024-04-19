import { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Studentlogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   // You can perform validation here
  //   // Make AJAX request to authenticate user
  //   try{
  //  const response= await axios.post('http://localhost:8080/student_register', {email,password});
  //  console.log(response);
  //  const token=response.data.token;
  //  console.log(token);
  //  alert('Login succesful');
  //  setEmail('');
  //  setPassword('');
  //  navigate('/');
  //  localStorage.setItem('token', token);
  //  return response.data;

  //   }
  //   catch(error){
  //     console.log('Login Error', error);

  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://localhost:8080/student_register', { email, password });
  
      // Check if response is successful and contains a token
      if (response.status === 200 && response.data.token) {
        const token = response.data.token;
        localStorage.setItem('token', token);
        
        // Redirect user upon successful login
        navigate('/');
        alert('Login successful');
      } else {
        // Handle invalid response or missing token
        console.error('Invalid response or missing token');
        alert('Login failed');
      }
    } catch (error) {
      console.error('Login Error', error);
      // Provide feedback to the user about the error
      alert('Login failed');
    } finally {
      // Reset form fields
      setEmail('');
      setPassword('');
    }
  };
  

  return (
    <div className="flex justify-center items-center h-screen">
      <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-lg">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded-lg py-2 px-4 w-full"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="border border-gray-300 rounded-lg py-2 px-4 w-full"
            placeholder="Enter your password"
            required
          />
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded">Login</button>
      </form>
    </div>
  );
}

export default Studentlogin;
