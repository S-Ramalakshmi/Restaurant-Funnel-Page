import { BrowserRouter,Routes,Route } from 'react-router-dom'

import Hero from './Components/Hero.jsx'
import Growth from './Components/Growth.jsx'
import Branches from './Components/Branches.jsx'
import Roadmap from './Components/Roadmap.jsx'
import About from './Components/About us.jsx'
import Works from './Components/Works.jsx'
import Testimonial from './Components/Testimonial.jsx'
import FAQ from './Components/FAQ.jsx'
import Footer from './Components/Footer.jsx'
import Thankyou from './Components/Thankyou.jsx'
import Contact from './Components/Form.jsx'
import './App.css'


function Main(){
  return(
    <>
      <section id='hero'><Hero/></section>
      <section id='grow'><Growth/></section>
      <section id='branch'><Branches/></section>
      <section id='roadmap'><Roadmap/></section>
      <section id='about'><About/></section>
      <section id='features'><Works/></section>
      <section id='testi'><Testimonial/></section>
      <section id='faq'><FAQ/></section>
      <section id='footer'><Footer/></section>
    </>

  );
}


export default function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Main/>}></Route>
          <Route path='/contact' element={<Contact/>}></Route>
          <Route path='/thankyou' element={<Thankyou/>}></Route>
        </Routes>
      </BrowserRouter>

    </>
  )
}


