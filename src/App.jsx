import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'
import FloatingButton from './components/FloatingButton'
function App() {

  return (
    <>
      <div className=''>
        <Navbar/>
        <FloatingButton/>
      <Hero/>
      <About/>
      <Services/>
      <Testimonials/>
      <Footer/>
      
      </div>
    </>
  )
}

export default App
