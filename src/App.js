import './styles/reset.css';
import './styles/App.css';
import './styles/Header.css';
import './styles/Footer.css';
import './styles/Product.css';
import Header from './page/Header';
import Footer from './page/Footer';
import Homepage from './page/Homepage';
import Aboutpage from './page/Aboutpage';
import ProductDetailpage from './page/ProductDetailpage';
import ProductAllpage from './page/ProductAllpage';
import { Route, Routes, Link, Navigate } from 'react-router-dom';
import Login from './page/Login';
import Private from './router/Private';
import { useState } from 'react';
function App() {
  // restful routes
  // url 디자인 패턴
  // get 데이터를 가져올때 씀 (read)
  // post 데이터를 생성할 때 사용 (create)
  // put 수정 시 사용 (update)
  // delete 삭제할 때 (delete)

  // 유저 스토리
  // 1. 헤더, 푸터 html, css 작성 미디어쿼리 작성
  // 2. Detailpage를 누르면 전체 상품이 나온다.
  // 3. 상단 : 상품개수, 높은금액, 낮은금액, 할인률, 신상품이 버튼이 있어서 클릭하면 해당 데이터만 나온다.
  // 4. 5열로 배열됨

  // 유저 스토리2
  // 1. 헤더, 푸터, html, css 작성 미디어쿼리 작성
  // 2. gnb(=nav)상품 클릭 시 상품 전체 페이지가 나온다.
  // 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
  // 4. 상품 클릭 시 상품 디테일 페이지가 나온다.
  // 5. 상품 디테일을 눌렀으나? 로그인이 안 되어있을 경우 로그인 페이지가 먼저 나온다.
  // 6. 로그인이 되어 있으면 상품 상세페이지를 볼 수 있다.
  // 7. 상품을 검색할 수 있다.

  const [authenticate, SetAuthenticate] = useState(false);

  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<ProductAllpage/>}></Route>
        <Route path='/login' element={<Login SetAuthenticate={SetAuthenticate}/>}></Route>
        {/* <Route path='/ProductDetailpage/:id' element={<ProductDetailpage/>}></Route> */}
        <Route path='/products/:id' element={<Private authenticate={authenticate}/>}></Route>
        <Route path='/Aboutpage' element={<Aboutpage/>}></Route>
        <Route path='/ProductAllpage' element={<ProductAllpage/>}></Route>
        <Route path='/user' element={<Private authenticate={authenticate}/>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
