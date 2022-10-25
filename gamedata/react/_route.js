// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Post from "./pages/post";
// import Layout from "./pages/layout";
// import Contact from "./pages/contact";
// import Home from "./pages/home";
// import NoPage from "./pages/nopage";

export default function App(){
  return (
    /**
     * Bộ định tuyến:
     * npm create-react-app app-name
     * npm i -D react-router-dom
     * từ thư mục scr: tạo thư mục pages.
     * từ thư mục page: tạo 5 file js
     *      1. layout.js
     *            Tạo component layout.js như bình thường, tuy nhiên return về một 
     *            <nav><ul><li></li></ul></nav>
     *            link tới các đường dẫn path bằng componet <Link> của react-router-dom
     *            nếu link sai sẻ trả về trang nopage
     *            trước thẻ đóng </> là <Outlet/> tạm dịch là lối ra.
     *      2. home.js
     *      3. contact.js
     *      4. blogs.js
     *      5. nopage.js
     * từ file App.js, với cấu trúc export thông thường
     * gọi <BrowserRouter> là cha của <Routes> là cha của <Route> là cha của <Router>
     * Router bọc có path là / và element là layout component
     * Router thứ nhất không có thẻ đóng có attribute là index và element là Home component
     * Router thứ hai không thẻ đóng có attribute là path giá trị là contact và element là <Contact/> componet
     * Router thứ ba không có thẻ đóng có attribute path giá trị là post và element là  <Post/> component
     * Router thứ 4 không có thẻ đóng có attribute path giá trị là * và element là nopage element
     * 
     *******************NHẬN XÉT******************************
     CẤU TRÚC, cha <BrowserRouter> con <Routes/> cháu <Route/> chắc <Route không thẻ đóng/>
     THUỘC TÍNH: Các Route đều có element là các component UI.
                  Các Route đều có path, riêng trên cùng là /, nopage cuối cùng là *, các component còn lại là tên file.
     */


    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="post" element={<Post/>}/>
            <Route path="*" element={<NoPage/>}/>
         
          </Route>
      </Routes>
    </BrowserRouter>
  )
}
// layout.js
// import { Link, Outlet } from "react-router-dom";

// function Layout() {
//     return (
//         <>
//             <nav>


//                 <ul>
//                     <li>
//                         <Link to="/">Home</Link>
//                     </li>
//                     <li>
//                         <Link to="contacts">Contacts</Link>
//                     </li>
//                     <li>
//                         <Link to="post">Post</Link>
//                     </li>
                   
//                 </ul>
//             </nav>
//             <Outlet/>
//         </>
//     )
// }

// export default Layout;