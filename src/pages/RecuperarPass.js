import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { resetPassword } from '../firebase/firebase-utils'

export default function RecuperarPass() {

    const [value,setValue] = useState()
    const navigate = useNavigate()
    return (
        <>
            <div className="flex justify-center items-center mx-auto">
                <div className="px-6 my-12">

                    <div className="w-full xl:w-3/4 lg:w-11/12 flex flex-col">

                            <div className="px-8 mb-4 text-center">
                                <h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>

                            </div>
                            <form className="px-8 pt-6 pb-8 mb-4 bg-white rounded"
                            onSubmit={async e => {
                                
                                e.preventDefault()
                                
                                
                                try {
                                 
                                    resetPassword(value)
                                    navigate("/login")
                                } catch (error) {
                                 
                                  console.log({ error })
                                }
                    
                                e.target.reset()
                              }}
                              >
                                <div className="mb-4">
                                    <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                                        Email
                                    </label>
                                    <input
                                        className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        id="email"
                                        type="email"
                                        onChange={e=>setValue(e.target.value)}
                                        placeholder="Enter Email Address..."
                                    />
                                </div>
                                <div className="mb-6 text-center">
                                    <button
                                        className="w-full px-4 py-2 font-bold text-white bg-indigo-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
                                        type="submit"
                                    >
                                        Reset Password
                                    </button>
                                </div>

                            </form>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
