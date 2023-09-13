import './App.css'
import Contact from './components/Contact'
import Header from './components/Header'
import Interduction from './components/Interduction'
import Navbar from './components/Navbar'
import Projects from './components/Projects'
import Skils from './components/Skils'


function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <label id='interduction'><Interduction/></label>
      <Projects/>
      <Skils/>
      <Contact/>
      
    </>
  )
}
export default App
