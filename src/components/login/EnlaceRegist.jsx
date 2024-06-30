import React from 'react'
import { Link } from 'react-router-dom'

const EnlaceRegist = () => {
  return (
    <>
      <p className="mt-8 text-center text-sm text-gray-600">
        Don`t have an account yet?  <Link to="/register" className="font-medium text-blue-600 hover:text-blue-500">Register</Link>
      </p>
    </>
  )
}

export default EnlaceRegist