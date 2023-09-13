import React from 'react'
import { useNavigate } from 'react-router-dom';
const Login = ({SetAuthenticate}) => {
  const navigate = useNavigate();
  const loginUser = (event) => {
    event.preventDefault();
    console.log('login user');
    SetAuthenticate(true);
    navigate('/');
  }
  return (
    <div className='inner'>
      <form className='loginForm' onSubmit={(event)=>loginUser(event)}>
        <label for='email'>이메일을 입력해주세요</label>
        <input type='email' placeholder='이메일 입력해주세요'/>
        <br/>
        <label for='password'>비밀번호를 입력해주세요</label>
        <input type='password' placeholder='비밀번호 입력해주세요'/>
        <br/>
        <button type='submit'>로그인</button>
      </form>
    </div>
  )
}

export default Login