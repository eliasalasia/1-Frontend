import React from 'react'

const BtnLog = () => {
  return (
    <>
      <div className="flex justify-center space-x-4 mt-6">
        <button aria-label="Log in with Google" className="p-3  rounded-full hover:bg-gray-200">
          <img src="/Google.svg" alt="Google Icon" />
        </button>
        <button aria-label="Log in with Facebook" className="p-3  rounded-full hover:bg-gray-200">
          <img src="/Facebook.svg" alt="Facebook Icon" />
        </button>
        <button aria-label="Log in with Twitter" className="p-3 rounded-full hover:bg-gray-200">
          <img src="/Twitter.svg" alt="Twitter Icon" />
        </button>
        <button aria-label="Log in with GitHub" className="p-3  rounded-full hover:bg-gray-200">
          <img src="/Gihub.svg" alt="GitHub Icon" />
        </button>
      </div>
    </>
  )
}

export default BtnLog

