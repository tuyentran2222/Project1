import React from 'react'

class News extends React.Component{
    render(){
        return (
            <div className="NewContainer">
                <div className="titleNew">
                    <h2>Tin tức mới nhất</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
                </div>
                <div id="new1" className="new">
                    <img src="./Photos/photo2.jpg"/>
                    <div>
                        <h6>But I must explain to you how all this mistaken idea</h6>
                        <div>25-10-2020<span>2 comment</span></div>
                        <div>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything hidden in the text</div>
                    </div>
                </div>
                <div id="new2" className="new">
                    <img  src="./Photos/photo4.jpg"/>
                    <div>
                        <h6>On the other hand we provide denounce with righteous</h6>
                        <div>25-10-2020<span>2 comment</span></div>
                        <div>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything hidden in the text</div>
                    </div>
                </div>
                <div  id="new3" className="new">
                    <img  src="./Photos/photo2.jpg"/>
                    <div>
                        <h6>Why is a ticket to Lagos so expensive?Because here.....</h6>
                        <div>25-10-2020<span>2 comment</span></div>
                        <div>If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything hidden in the text</div>
                    </div>
                </div>
            </div>
        )
    }
}
export default News;