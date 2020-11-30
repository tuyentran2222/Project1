import React from 'react'
import Products from './Products'
import SlideShow from './SlideShow'
class Home extends React.Component{
    render(){
        return(
            <div className="Home">
                <SlideShow/>
                <div className="title" style={{textTransform:'uppercase',fontSize:'30px',marginTop:'40px'}}>Đồng hồ </div>
                <Products/>
            </div>
            
        )
    }
}
export default Home;