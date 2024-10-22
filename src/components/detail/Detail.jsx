import './detail.css'

const Detail = () => {
    return (
        <div className='detail'>
            <div className='user'>
                <img src='./avatar.png' />
                <h2>Chandra</h2>
                <p>element is less than 40em wide, then the 2nd child will have twice as</p>
            </div>
            <div className='info'>
                <div className='option'>
                    <div className='title'>
                        <span>Chat Settings</span>
                        <img src="./arrowUp.png" />
                    </div>
                </div>

                <div className='option'>
                    <div className='title'>
                        <span>Privacy & help</span>
                        <img src="./arrowUp.png" />
                    </div>
                </div>


                <div className='option'>
                    <div className='title'>
                        <span>Shared photos</span>
                        <img src="./arrowUp.png" />
                    </div>

                    <div className='photos'>
                        <div className='photoIteam'>
                            <div className='photoDetail'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJePvP9FW97lRE3FJAovm1b7eMDEw2wRceypc_bDZFJU3hdCONsWujsU-f7br_EvCPgqc&usqp=CAU' />
                                <span>photos_202.png</span>
                            </div>

                            <img src="./download.png" className='icons'/>
                        </div>
        
                    </div>

                    
                    <div className='photos'>
                        <div className='photoIteam'>
                            <div className='photoDetail'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJePvP9FW97lRE3FJAovm1b7eMDEw2wRceypc_bDZFJU3hdCONsWujsU-f7br_EvCPgqc&usqp=CAU' />
                                <span>photos_202.png</span>
                            </div>

                            <img src="./download.png" className='icons'/>
                        </div>
        
                    </div>

                    
                    <div className='photos'>
                        <div className='photoIteam'>
                            <div className='photoDetail'>
                                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJePvP9FW97lRE3FJAovm1b7eMDEw2wRceypc_bDZFJU3hdCONsWujsU-f7br_EvCPgqc&usqp=CAU' />
                                <span>photos_202.png</span>
                            </div>

                            <img src="./download.png" className='icons'/>
                        </div>
        
                    </div>
                </div>

                <div className='option'>
                    <div className='title'>
                        <span>Shared Files</span>
                        <img src="./arrowUp.png" />
                    </div>
                </div>
                 <button>Block User</button>
                 <button className='logout'>Logout</button>
            </div>
        </div>
    )
}

export default Detail