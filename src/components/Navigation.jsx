import React, { useContext } from 'react';
import { GlobalContext } from '../localState/GlobalProvider';
import { FaShoppingCart } from 'react-icons/fa';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navigation = (props) => {
  const myState = useContext(GlobalContext)
  // const pages = [
  //   { id: 1, page: 'Home', link: '/' },
  //   { id: 2, page: 'Details', link: 'details' },
  //   { id: 3, page: 'Blog', link: 'blog' },
  //   { id: 4, page: 'About', link: 'about' },
  // ]
  function menuDrawer() {
    myState.setHide(true)
    myState.setNewPosition(0)
  }

  return (
    <div className="navbar">
      <header>
        <a href="#" className="logo"><GiHamburgerMenu className="menuIcon" onClick={menuDrawer} /> YasRShop</a>
        <nav className="navigation">
          {/*
            pages.map((x)=> {
              return(
                <a href="#" key={x.id} className="navLink">{x.page}</a>
              )
            })
          */}
        </nav>
        <a href="#"><FaShoppingCart className="shopping-cart" /></a>
      </header>
    </div>
  )
}

export default Navigation;
