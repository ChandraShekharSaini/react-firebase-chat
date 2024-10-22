
import { useEffect, useState,useRef } from 'react';
import './chat.css'
import EmojiPicker from 'emoji-picker-react';
const Chat = () => {

    const [showPicker, setShowPicker] = useState(false);
    const [text, setText] = useState('');
    
     const endRef = useRef(null);
   
     useEffect(()=>{
     endRef.current?.scrollIntoView({behavior:"smooth"});
     },[])
 


    const handleEmoji = (e) => {
        setText((prev) => prev + e.emoji);

    }


    console.log(text)

    return (
        <div className='chat'>
            <div className="top">
                <div className='user'>
                    <img src="./avatar.png" alt="" />
                    <div className='texts'>
                        <span>Chnadra</span>
                        <p>lorem5 nmckkjc wvewvw wwvcw cwcwc</p>
                    </div>

                </div>
                <div className='icons'>
                    <img src="./phone.png" alt="" />
                    <img src="./video.png" alt="" />
                    <img src="./info.png" alt="" />
                </div>

            </div>




            <div className="center">

                <div className='message'>
                    <img src="./avatar.png" alt='' />
                    <div className='texts'>
                        <p>Both flex items want to be 20em wide. Because of the flex-grow (first parameter), if the flex container is larger than 40em, the 2nd child will take twice as much le</p>
                        <span>1 min ago</span>
                    </div>
                </div>


                <div className='message own'>
                    <div className='texts'>
                        <p>Both fle-grow (first parameter), if the flex container is larger than 40em, the 2nd child will take twice as much leftover space as the first child</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className='message'>
                    <img src="./avatar.png" alt='' />
                    <div className='texts'>
                        <p>Both flex items want to be 20em wide. Because of the flex-grow (first parameter), if the flex container is larger than 40em, the 2nd child will take twice as much le</p>
                        <span>1 min ago</span>
                    </div>
                </div>


                <div className='message own'>

                    <div className='texts'>
                        <img src="https://cdn.pixabay.com/photo/2023/07/08/04/58/sunset-8113697_640.jpg" />

                        <p>Both flex items want to be 20em wide</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className='message'>
                    <img src="./avatar.png" alt='' />
                    <div className='texts'>
                        <p>Both flex items want to be 20em wide. Because of the flex-grow (first parameter), if the flex container is larger than 40em, the 2nd child will take twice as much le</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className='message own'>
                    <div className='texts'>
                        <p>Both flex items want to be 20em wide. Because of the flex-grow (first parameter), if the flex container is larger than 40em, the 2nd child will take twice as much le</p>
                        <span>1 min ago</span>
                    </div>
                </div>

                <div className='message'>
                    <img src="./avatar.png" alt='' />
                    <div className='texts'>
                        <img src="https://thumbs.dreamstime.com/b/luxury-swimming-pool-patio-comfortable-garden-furniture-beautiful-beach-house-315685620.jpg" />
                        <p>Both flex items want to be 20em wide. Because of the flex-grow (first parameter), if the flex container is larger than 40em, the 2nd child will take twice as much le</p>
                        <span>1 min ago</span>
                    </div>
                </div>

           <div ref={endRef}></div>

            </div>
            <div className="bottom">
                <div className='icons'>
                    <img src="./img.png" alt="" />
                    <img src="./camera.png" alt="" />
                    <img src="./mic.png" alt="" />
                </div>
                <input type='text' placeholder='Enter Text..' onChange={(e) => setText(e.target.value)} value={text} />
                <div className='emoji'>
                    <img src="./emoji.png" alt="/" onClick={() => setShowPicker(picker => !picker)} />
                    <div className='picker'>
                        {showPicker && <EmojiPicker onEmojiClick={handleEmoji} />}
                    </div>

                </div>

                <button className='sendButton'>Send</button>
            </div>

        </div>
    )
}

export default Chat