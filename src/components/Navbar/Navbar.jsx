import { useState } from 'react'
import './Navbar.css'

const Navbar = () => {

    const [menu, setMenu] = useState('Home');

  return (
    <div className='navbar'>
      <h1>LOGO</h1>
      <ul>
        <li className={menu === 'Home' ? 'active' : ''} onClick={() => setMenu('Home')} >Home</li>
        <li className={menu === 'Service' ? 'active' : ''} onClick={() => setMenu('Service')} >Service</li>
        <li className={menu === 'Contact' ? 'active' : ''} onClick={() => setMenu('Contact')} >Contact</li>
      </ul>
      <button>Login</button>
    </div>
  )
}

export default Navbar


{/* <a href="#explore-collection" onClick={() => setMenu("Collection")} className={menu === "Collection" ? "active" : ""}>Collection</a> */}
