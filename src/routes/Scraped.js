import React from 'react'
import './Scraped.css';


function Scraped() {


    return (
        <div className='main'>
            <div className='main-top'>
                <div className='main-top-profile'>
                    <div className='articles-profile-img'>
                        <img className='profile-img-bottom' src={require('./img/profile.jpg')}/>
                    </div>
                    <div>
                        <span className='articles-user-name'>김홍시</span>
                        <span>님</span>
                    </div>

                </div>
                <div className='article-buttons'>
                    <div>
                        <a href='./articles'>
                            <button className='article-post-button' type='button'>게시물</button>
                        </a>
                    </div>
                    <div>
                        <a href='./scraped'>
                            <button className='article-scrap-button1' type='button'>스크랩</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Scraped
