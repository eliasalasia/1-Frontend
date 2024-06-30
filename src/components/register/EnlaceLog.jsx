import React from 'react'
import { Link } from 'react-router-dom'

const EnlaceLog = () => {
  return (
    <>
      <p className="mt-8 text-center text-sm text-gray-600">
        Already a member?  <Link to="/login" className="font-medium text-blue-600 hover:text-blue-500">Login</Link>
      </p>
    </>
  )
}

export default EnlaceLog