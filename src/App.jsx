
import './App.css'
import Content from './component/Content'
import Footer from './component/Footer'
import Header from './component/Header'

function App() {

  return (
    <>
<div className='flex flex-col min-h-screen'>
  <Header/>
<Content/>
<Footer/>
</div>
    </>
  )
}

export default App
