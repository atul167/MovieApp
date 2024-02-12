import React from 'react'
import { Link } from "react-router-dom"
function Login() {
    return (
        <>
            <div className='grid grid-cols-2 h-screen'>
                <div className='bg-blue-400 flex flex-col items-center justify-center'>
                    <div>
                        <h1 className='text-6xl text-orange-700'>Movies4You</h1>
                        <span className='text-3xl text-white'>Baap of all movie websites!</span>
                    </div>
            </div>
            <div className='flex flex-col items-center justify-center'>
          <h1 className="text-5xl">Login</h1> 
            <form>
                <div>
                <label className='text-2xl' htmlFor="email" >Email:</label>
                <input type="text" id="username" name="username" />
                </div>
                <div>
                <label className='text-2xl' htmlFor="password">Password:</label>
                <input type="password" id="password" name="password" />
                </div>
                <button className="loginbutton" htmlType="submit" block >Login</button>
            <Link className="redo" to="/signup">No account?</Link>
            </form>
                </div> 
            </div>
        </>
    )
}
export default Login;