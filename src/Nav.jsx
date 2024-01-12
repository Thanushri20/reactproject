import React from 'react'
import {Link} from 'react-router-dom'
const Nav = () => {
  return (
    <nav>
      <div className='logoblock'>
          <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/organic-food-logo%2Crestaurant-logo-icon%2Cfood-design-template-ab1374521c32813442deba341daa1e5b_screen.jpg?ts=1662466868" alt="" />
      </div>
      <div className='menublock'>
        <ol>
            <li>
                <Link to={"/order"}>Order</Link>
            </li>
            <li>
                <Link to={"/food"}>Food</Link>
                </li>
            <li>
                <Link to={"/login"}>Login</Link>
            </li>
            <li>
                <Link to={"/signup"}>Signup</Link>
            </li>
           
        </ol>
      </div>
    </nav>
  )
}

export default Nav
