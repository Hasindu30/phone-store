import React from 'react'
import Navbar from './components/Navbar/Navbar';
import Home from './Pages/Home/Home';
export const App = () => {
  return (
    <div className='overflow-x-hidden'>
      <Navbar/>
      <Home/>
    </div>
  )
}
export default App;
