import React from 'react'
import { registerVersion } from 'firebase/app';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import { loginLocal, auth, dataUser } from '../firebase/firebase-utils';
import Input from '../input.js';


function Login({ useer, value, setUseer, setValue }) {

    return (

        <div className='w-screen mt-36'>
            <form className="w-full"
                onSubmit={async e => {
                    e.preventDefault()
                    const { email, password } = value;

                    loginLocal(email, password)
                    const { user } = await signInWithEmailAndPassword(auth, email, password);
                    const { name, photoURL } = await dataUser(user)
                    console.log(name, photoURL)
                    setUseer({ ...useer, name: name, photoURL: photoURL })
                    e.target.reset()

                }}
            >
                <p className="text-indigo-800">Inicie Sesion</p>
                <input type="hidden" name="remember" value="true" />
                <div className="rounded-md shadow-sm -space-y-px w-96">
                    <div className=''>
                        <label htmlFor="email-address" className="sr-only">Email address</label>
                        <Input value={value} setValue={setValue} name={"email"} />
                    </div>
                    <div>
                        <label htmlFor="password" className="sr-only">Password</label>
                        <Input value={value} setValue={setValue} name={"password"} />
                    </div>
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" />
                        <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900"> Recordarme </label>
                    </div>

                    <div className="text-sm">
                        <Link to="/forGotPass" className="font-medium text-indigo-600 hover:text-indigo-500"> Olvide mi contraseña </Link>
                    </div>
                </div>
                <div className='w-72'>
                    <button type="submit" className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 mt-12">
                        Sign in
                    </button>
                </div>
                <Link to="/register" className="font-medium text-red-400 hover:text-indigo-500 mt-3">No tienes cuenta? crea una</Link>

                <p className='text-lg text-indigo-800 my-10 '>Ingresar con Google</p>
                
                <button type="button" className='mb-3.5 font-medium bg-sky-200 w-28 h-10 bg-red-300 sm:bg-indigo-300 md:bg-green-300 mb-10 flex flex-row justify-around items-center rounded-md'>
                    <img src="https://res.cloudinary.com/dcatzxqqf/image/upload/v1656648432/coding/NucbaZappi/Assets/google-icon_jgdcr1.png" alt="Google logo" />
                    Google
                </button>
                
            </form>
        </div>
    )
}

export default Login;