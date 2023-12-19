import React, {useState} from "react";
import Nav from './components/Nav'
import Home from './components/Home'
// import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer';


export default function App() {
    const [page, setPage] = useState("home");
  
    function pickPage() {
      switch (page) {
        case "home":
          return <Home />;
        case "about":
          return <About />;
        case "projects":
          return <Projects />;
        case "contact":
          return <Contact />;
        default:
          return <h1>404</h1>;
      }
    }
  
    function handPage(e, page) {
      e.preventDefault();
      console.log(page);
      setPage(page);
    }
  
    return (
      <>
        <Nav handlePage={handPage} />
        <div>{pickPage()}</div>
        <Footer />
      </>
    );
};