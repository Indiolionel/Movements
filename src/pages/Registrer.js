import { registerVersion } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { signInGoogle, loginLocal, userRegistration, auth, dataUser } from '../firebase/firebase-utils';




function Registrer({ useer, value, setUseer, setValue }) {



  return (
    <>
      <p>Login Activado:<span id="user"> {useer.name}</span> </p>

      <div className='h-screen flex flex-col justify-evenly'>


        <form className='w-full mb-2'

          onSubmit={async e => {

            e.preventDefault()
            console.log("Value",value)
            const { email, password, name } = value;
            try {
              await userRegistration(email, password, name)

            } catch (error) {
              if (error.code == "auth/email-already-in-use") {
                alert("Ya estas registrado con este correo")
              }
              if (error.code == "auth/weak-password") {
                alert("La contraseña tiene que tener 6 o mas caracteres")
              }
              if (error.code == "auth/invalid-email") {
                alert("Email invalido")
              }
              console.log({ error })
            }

            e.target.reset()
          }}
        >
          <p>Crea tu cuenta</p>
          <input name="email" type="email" placeholder='Ingrese email' onChange={e => setValue({ ...value, email: e.target.value })}></input>
          <input name="password" type="password" placeholder='Ingrese contraseña' onChange={e => setValue({ ...value, password: e.target.value })}></input>
          <input name="name" type="text" placeholder='Ingrese nombre' onChange={e => setValue({ ...value, name: e.target.value })}></input>
          <button type="submit" className='button-new-move'>
            Registrate
          </button>
        </form>


        
      </div>
    </>



  )


}

export default Registrer;