import React, {useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import logo from '../images/logo.svg';
function Header() {
  const sideList = [
    'KOLON MALL',
    '로그인',
    '회원가입',
    '고객센터',
    <i className='fa-solid fa-basket-shopping'/>
  ];
  // state 값 추가
  const[activeLink, setActiveLink] = useState();
  // Link 클릭 할 때 활성화
  const LinkClick = (index)=>{
    setActiveLink(index);
  };
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate('/login')
  }
  const onCheckEnter = (event) => {
    // 입력한 검색어를 읽는다.
    // url 을 바꿔준다.
    if(event.key === 'Enter'){
      event.preventDefault();
      let keyword = event.target.value;
      navigate(`?q=${keyword}`);
    }
  }
  return (
    <div className='inner'>
      <div className='HeaderTop'>
        <Link to='/' className='logo'>
          <img src={logo} /> 
          <i class="fa-regular fa-heart"></i>
        </Link>
        <form>
          <input 
            type='text' 
            placeholder='신상품이 보고 싶다면? #신상태그'
            onKeyPress={onCheckEnter}  
          >
          </input>
          <i class="fa-solid fa-magnifying-glass searchIcon"></i>
        </form>
        <div className='snb'>
          <ul>
            {/* {
              sideList.map((menu) =>{
                return(
                  <li><Link to='/'>{menu}</Link></li>
                )
              })
            } */}
            <li>KOLON MALL</li>
            <li onClick={goToLogin}>로그인</li>
            <li>회원가입</li>
            <li>고객센터</li>
            <li><i className='fa-solid fa-basket-shopping'/></li>
          </ul>
        </div>
      </div>
      <div className='HeaderBottom'>
        <ul className='nav'>
          <li>
            <Link
              to='/Aboutpage'
              className={activeLink === 0 ? 'active' : ''}
              onClick={() => LinkClick(0)}
            >
              소개
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className={activeLink === 1 ? 'active' : ''}
              onClick={() => LinkClick(1)}
            >
              홈
            </Link>
          </li>
          <li>
            <Link
              to='/ProductAllpage'
              className={activeLink === 2 ? 'active' : ''}
              onClick={() => LinkClick(2)}
            >
              상품
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className={activeLink === 3 ? 'active' : ''}
              onClick={() => LinkClick(3)}
            >
              기획전
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className={activeLink === 4 ? 'active' : ''}
              onClick={() => LinkClick(4)}
            >
              컬렉션
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className={activeLink === 5 ? 'active' : ''}
              onClick={() => LinkClick(5)}
            >
              매장안내
            </Link>
          </li>
          <li>
            <Link
              to='/'
              className={activeLink === 6 ? 'active' : ''}
              onClick={() => setActiveLink(6)}
            >
              WEATHER MONSTER
            </Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Header