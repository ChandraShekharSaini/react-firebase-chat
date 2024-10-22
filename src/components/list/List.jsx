import ChatList from './chatList/ChatList'
import UserInof from './userinof/UserInof'
import './list.css'

const List = () => {
    return (
        <div className='list'>
            <UserInof />
            <ChatList />
        </div>
    )
}

export default List