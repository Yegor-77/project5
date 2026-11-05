export default function Products() {
  return <h1>Products</h1>;
}

import { Route, Routes } from "react-router-dom";import About from "./pages/About";import Home from "./pages/Home";import NotFound from "./pages/NotFound";import Nav from "./coponets/Nav";import Products from "./pages/Products";function App() {  return (    <>    <Nav/>    <Routes>      <Route path="/" element={<Home />} />      <Route path="/about" element={<About />} />      <Route path="*" element={<NotFound />} />      <Route path="/" element={<Products />} />    </Routes>    </>  );}
export default App;



import { Link } from "react-router-dom";
export default function Nav() {  return (    <nav>      <Link to="/">Home</Link>      <Link to="/about">About</Link>      <Link to="/Products">Products</Link>    </nav>  );}