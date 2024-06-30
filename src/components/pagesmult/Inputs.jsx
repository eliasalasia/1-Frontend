import React from 'react'

const Inputs = () => {
  return (
    <>
       <div className="rounded-md shadow-sm -space-y-px">
          <div>
            <label htmlFor="email-address" className="sr-only">Email address</label>
            <input id="email-address" name="email" type="email" autoComplete="email" required
              className="font-sans relative rounded-md block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none mb-3 focus:ring-black focus:border-black focus:z-10 sm:text-sm"
              placeholder=" Email" />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Password</label>
            <input id="password" name="password" type="password" autoComplete="current-password" required
              className="font-sans relative block rounded-md w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-black focus:border-black focus:z-10 sm:text-sm"
              placeholder="Password" />
          </div>
        </div>
    </>
  )
}

export default Inputs