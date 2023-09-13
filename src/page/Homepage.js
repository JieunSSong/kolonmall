import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
function Homepage() {
//useNavigate는 페이지를 이동할 때 사용된다.
// Link를 써도 페이지 이동을 시킬 수 있지만 
// 단순하게 이동만 시켜야 하는 경우 Link를 사용하면 좋고
// useNavigate를 사용하면 특정 이벤트가 실행됐을 때 동작하도록 하거나 
// 추가적인 로직이 필요한 경우 useNavigate를 사용한다.
  const navigate = useNavigate();
  const goDetailpage = () => {
    navigate('/Homepage');
  }
  const goProduct = () => {
    navigate('/ProductDetailpage')
  }
  return (
    <div>
      <div className = 'inner'>
        <Link to = '/ProductAllPage'>링크</Link>
        <br></br>
        <button onClick = { goDetailpage }>버튼클릭</button>
        <button onClick = { goProduct }>상품상세</button>
      </div>
    </div>
    
  )
}

export default Homepage