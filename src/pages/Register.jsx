import axios from "axios"
import ButtonLogos from "../components/pagesmult/BtnLog"
import Inputs from "../components/pagesmult/Inputs"
import Option from "../components/pagesmult/Option"
import BtnRegister from "../components/register/BtnFormReg"
import LinkR from "../components/register/EnlaceLog"
import { useNavigate } from "react-router-dom"



function Register ()  {
  const navigate = useNavigate()
const handleRegister = async (e) => {
  e.preventDefault()
  const data = {
    email: e.target[0].value,
    password: e.target[1].value,
  }

  try {
    const res = await axios.post('http://localhost:3000/api/register', data)
    alert(res.data.message)
    navigate('/')
  } catch (error) {
    console.log(error);
    alert(error.response.data.message)
  }
 
}

  return (
    
    <div className="flex items-center justify-center min-h-screen ">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-3xl border border-gray-300">
        <img className=" w-36" src="/devchallenges.svg" alt="Logo" />
        <h2 className="mt-6 text-2xl font-medium text-gray-900">
          Join thousands of learners from around the world
        </h2>
        <p className="mt-2 text-lg text-gray-600">
          Master web development by making real-life projects. There are multiple paths for you to choose.
        </p>
        <form onSubmit={handleRegister} className="mt-8 space-y-6">
          <Inputs />
          <BtnRegister />
        </form>
        <Option />
        <ButtonLogos />
        <LinkR />
      </div>
    </div>
  )
}

export default Register