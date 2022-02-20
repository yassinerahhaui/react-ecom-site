import React,{ useContext } from 'react';
import { GlobalContext } from '../localState/GlobalProvider';
import { AiOutlineHome } from 'react-icons/ai';
import { RiShirtLine } from 'react-icons/ri';
import { BsPhone, BsLaptop } from 'react-icons/bs';
import { FiWatch } from 'react-icons/fi';


const NavList = (props) => {
  const myState = useContext(GlobalContext)
  const list = [
    { id: 1, name: 'Home', icon: <AiOutlineHome />, link: '/'},
    { id: 2, name: 'fashion', icon: <RiShirtLine />, link: '/'},
    { id: 3, name: 'phone', icon: <BsPhone />, link: '/'},
    { id: 4, name: 'laptop', icon: <BsLaptop />, link: '/'},
    { id: 5, name: 'watch', icon: <FiWatch />, link: '/'},
  ]
  function drawer() {
    myState.setHide(false)
    myState.setNewPosition(-255)
  }
  
  return(
    <>
    {myState.hide===true?<div className="darkScreen" onClick={drawer}></div>:''}
    <div className="navlist" style={{left: myState.newPosition}}>
      <ul>
        {
          list.map((item)=> {
            return(
              <li key={item.id} className="itemList">
                {item.icon}<a href="#" className="textItemList">{item.name}</a>
              </li>
              )
            })
        }
      </ul>
    </div>
    </>
  )
}
export default NavList;
