import { useState } from 'react';
import './chatList.css'
import AddUser from './addUser/AddUser'

const ChatList = () => {

  const [addMode, setAddMode] = useState(false);

  return (
    <div className='chatList'>
      <div className='search'>
        <div className='searchBar'>
          <img src="./search.png" alt="" />
          <input type="text" placeholder="Search" />
        </div>

        <img src={addMode ? "./minus.png" : "./plus.png"} alt='' className='add' onClick={() => setAddMode(prev => !prev)} />

      </div>

      <div className='iteam'>
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Rahul Singh</span>
          <p>Hello</p>
        </div>
      </div>

      <div className='iteam'>
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Rahul Singh</span>
          <p>Hello</p>
        </div>
      </div>


      <div className='iteam'>
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Rahul Singh</span>
          <p>Hello</p>
        </div>
      </div>

      
      <div className='iteam'>
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Rahul Singh</span>
          <p>Hello</p>
        </div>
      </div>

      
      <div className='iteam'>
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Rahul Singh</span>
          <p>Hello</p>
        </div>
      </div>

      
      <div className='iteam'>
        <img src="./avatar.png" alt="" />
        <div className="texts">
          <span>Rahul Singh</span>
          <p>Hello</p>
        </div>
      </div>


       {addMode && <AddUser/>}
    </div>
  )
}

export default ChatList