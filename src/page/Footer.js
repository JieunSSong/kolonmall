import React from 'react'
import { Link } from 'react-router-dom'
import footerLogo from '../images/footer_logo.svg';
import isms from '../images/isms.png';
function Footer() {
  return (
    <footer className='footer'>
      <div className='footer_inner'>
      <div className='logo'>
        <img src={footerLogo}/>
      </div>
      <div className='footer_top'>
        <div className='footer_left'>
          <h3>코오롱인더스트리㈜ FnC부문</h3>
          <p>
            대표이사 : 유석진 서울특별시 강남구 삼성로 518<br/>
            TEL : 1588-7667 (유료)Mail : kolonmall@kolon.com<br/>
            통신판매업신고 : 제2017-서울강남-02297호 사업자등록번호 : 138-85-19612<button>사업자정보 확인</button> <br/>
            <b>고객님은 안전거래를 위해 결제 시 저희 사이트에서 가입한 구매안전 서비스를 이용하실 수 있습니다.</b>
            토스페이먼츠 <span>가입확인</span>
          </p> 
        </div>
        <div className='footer_right'>
          <ul>
            <li><Link>로그인</Link></li>
            <li><Link>실시간 채팅상담</Link></li>
            <li><Link>비회원 주문조회</Link></li>
          </ul>
          
          <ul>
            <li><Link>매장안내</Link></li>
            <li><Link>입점/제휴문의</Link></li>
            <li><Link>이용약관</Link></li>
            <li><Link><b>개인정보처리방침</b></Link></li>
          </ul>
          <div>
            <h4>고객센터 <i class="fa-solid fa-chevron-right"></i></h4>
            <h3>1588-7667 (유료)</h3>
            <h6>(09:30 ~ 18:00, 주말/공휴일 휴무)</h6>
            <select>
              <option>FAMILY SITE</option>
              <option>Archivepke</option>
              <option>247series</option>
              <option>byseries</option>
              <option>THE CART GOLF</option>
              <option>KOLON SPORT</option>
            </select>
          </div>
        </div>
      </div>
        <div className='footer_bottom'>
            <p>&copy; KOLON MALL all rights reserved</p> 
            <div className='footer_rightBottom'>
              <img src={isms}/>
              <div>
                <p><span>인증범위</span> 인터넷 쇼핑몰 운영(코오롱 패션샵)</p>
                <p><span>유효기간</span> 2020.11.04 ~ 2023.11.03</p>
              </div>
              <div className='sns'>
                <i class="fa-brands fa-apple"></i>
                <i class="fa-brands fa-facebook"></i>
                <i class="fa-brands fa-instagram"></i>
                <i class="fa-brands fa-youtube"></i>
              </div>
            </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer