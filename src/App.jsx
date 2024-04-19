import './App.css'
import ComparisionTable from './components/ComparisionTable'
import Features from './components/Features'
import First from './components/First'
import Footer from './components/Footer'
import Header from './components/Header'
import Testimonials from './components/Testimonials'

function App() {

  return (
        <div className='bg-[rgb(235,245,238)]'>
        <Header />
        <First />
        <Features />
        <ComparisionTable />
        <Testimonials />
        <Footer />
        </div>
        
    
);
}

export default App
