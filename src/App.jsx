
import './App.css';
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'

import PortfolioInfo from './components/portfolioInfo/PortfolioInfo'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'

function App() {
  return (
    <>
    <Header/>
    <Nav/>
    <About/>
    <PortfolioInfo/>
    {/* <Experince/> */}
    {/* <Services/> */}
   
    {/* <Testimonials/> */}
    <Contact/>
    <Footer/>

    
    </>
  );
}

export default App;
