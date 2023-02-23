import React from 'react'

export default function Input({setValue, value, name}) {

  const placeholder = {
    password: "Contraseña",
    email: "Email"
  }
   
  return (

    <input className="my-6 h-16 appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm" name={name} type={name} placeholder={`Ingrese ${placeholder[name]}`} onChange={e => setValue({ ...value, password: e.target.value })} />

  )
}
