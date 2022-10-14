import React,{useEffect,useState} from 'react'
import './Post.css'
import axios from 'axios'


function Post() {
    const [products,setProducts] = useState([])
    const [ComShops,setComShops] = useState([])
    
    
    useEffect(() => {
      axios.get('https://api.xentice.com/api/postadSelect').then((response)=>{
        
        setProducts(response.data)
      products.map((obj)=>{
        console.log(obj.propertyType.name);
        setComShops(obj.propertyType) 
      
            
      })
      })
    
      
      
    }, [])
    
  return (
    <div className='ParentDiv'>
        <div className="subcontainer">
            <div className="postheader">
                
                <div className="left">
                    <img alt='' className='postheaderimage' src='https://www.xentice.com/static/media/commercial_space.cabcda3f.png'></img>
                    <span>Commercial Shop</span>
                </div>
            <div className="right">
                <a href='#' className='explainmore'>Explore More</a>
            </div>
            </div>
        </div>
        <div className="cardcontainer">
            <div className="postcard">
            {products.map((obj)=>{
                
                
            return <div>
                    
            <img alt='' className='cardimage' src='https://xenticebucket21.s3.ap-south-1.amazonaws.com/image/7tDOwtNMBHJrhvYCLj5zHztMIbwL6Gq0snqz57Ch.jpg'></img>
            <div className="carddetails">
                <div className="cardtitle">
                    <h5>Shop</h5>
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                    </div>
                </div>
                <div className="cardlocation">
                <ion-icon name="location-outline"></ion-icon>
                <span>Cochin</span>
                </div>
                <span className='cardprice'>
                    RS 1100/month
                </span>
                <a href='#' className='explore'>Explore Now</a>
            </div>
            </div>
            })}
            </div>   
        </div>
    </div>
  )
}

export default Post