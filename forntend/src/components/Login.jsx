import React, {useRef}from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {
    const usernameRef =useRef(null)
    const navigate =useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem("userid",usernameRef.current.value)
        usernameRef.current.value=""
        navigate("/task")
        // console.log(usernameRef.current.value);
    }

    return (
        <div className='login_container'>
            <form className='login__form' onSubmit={handleSubmit}>
                <label htmlFor='username'>
                    <input type="text" name='usename' id="username" required ref={usernameRef} />
                </label>
                <button>
                    SIGN IN
                </button>
            </form>
        </div>
    )
}

export default Login