import './userinof.css'

const UserInof = () => {
    return (
        <div className="userInof">
            <div className="user">
                <img src="./avatar.png" alt />
                <h2>Chandra</h2>
            </div>
            <div className='icons'>
                <img src='./more.png' alt='' />
                <img src='./video.png' alt='' />
                <img src='./edit.png' alt='' />
            </div>
        </div>
    )
}

export default UserInof