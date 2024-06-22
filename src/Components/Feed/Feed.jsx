import React, { useState } from 'react'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faVideo,faPhotoFilm,faSmile,faXmark,faThumbsUp,faComment,faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import './feed.css'


const Feed = () => {

  const [value, setValue] = useState('');
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: 'Ayon Banerjee',
      time: '29 m',
      text: "It's my first post",
      image: '/Assets/Image/1699029158598.jpg'
    }
  ]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    
    <div className='feed'>
        <div className="feed-wrapper">
          <div className="feed-create-post">
            <form className="feed-create-post-head" onSubmit={handleSubmit}>



              <img src="/Assets/Image/1699029158598.jpg" alt="" />
              <input placeholder='Write something ......' type="text"  value={value} onChange={handleChange}/>

              <button type='submit' >Post</button>

            </form>
            <hr className='hr-feed' />
            <div className="feed-create-post-tell">
              <div className="live-video">
              <FontAwesomeIcon className='icon' icon={faVideo} />
              <p>Live Video</p>
              </div>
              <div className="photos-videos">
              <FontAwesomeIcon className='icon' icon={faPhotoFilm} />
              <p>Photo/Video</p>
              </div>
              <div className="feelings">
              <FontAwesomeIcon className='icon' icon={faSmile} />
              <p>Feeling/Activity</p>
              </div>
            </div>
          </div>
          <br />
          <div className="feed-create-post">

            <div className="feed-create-post-head">
              <img src="/Assets/Image/1699029158598.jpg" alt="" />
              <div className="name-time">
                <div className="name">Ayon Banerjee</div>
                <p>29 m</p>
              </div>
              <div className="bar-cross">
              <FontAwesomeIcon className='icon' icon={faXmark} />
              </div>
              
            </div>
            <div className="feed-create-post-body">
              <p>It's my first post</p>
              <img src="/Assets/Image/1699029158598.jpg" alt="" />
            </div>
            
            <div className="feed-create-post-tell">
              
              <div className="like-comment">
                <div className="like">
                <FontAwesomeIcon className='icon' icon={faThumbsUp} />
                <h4>Like</h4>
                </div>
                <div className="comment">
                <FontAwesomeIcon className='icon' icon={faComment} />
                <h4>Comment</h4>
              
                </div>
              </div>
             
              
            </div>
            <div className="comment-box">
                <p>cdsgdsdsscs</p>
                <input type="text" placeholder='Write a comment' />
                <div className="sender">
                <FontAwesomeIcon className='icon' icon={faPaperPlane} />
                </div>
              </div>
          </div>
          <div className="feed-create-post">

            <div className="feed-create-post-head">
              <img src="/Assets/Image/1699029158598.jpg" alt="" />
              <div className="name-time">
                <div className="name">Ayon Banerjee</div>
                <p>29 m</p>
              </div>
              <div className="bar-cross">
              <FontAwesomeIcon className='icon' icon={faXmark} />
              </div>
              
            </div>
            <div className="feed-create-post-body">
              <p>It's my first post</p>
              <img src="/Assets/Image/1699029158598.jpg" alt="" />
            </div>
            
            <div className="feed-create-post-tell">
              
              <div className="like-comment">
                <div className="like">
                <FontAwesomeIcon className='icon' icon={faThumbsUp} />
                <h4>Like</h4>
                </div>
                <div className="comment">
                <FontAwesomeIcon className='icon' icon={faComment} />
                <h4>Comment</h4>
              
                </div>
              </div>
             
              
            </div>
            <div className="comment-box">
                <p></p>
                <input type="text" placeholder='Write a comment' />
                <div className="sender">
                <FontAwesomeIcon className='icon' icon={faPaperPlane} />
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Feed
