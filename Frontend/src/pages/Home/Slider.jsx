import axios from "axios"
import react, { useEffect, useState } from "react"

export default function Slider()
{
    var [slider,setslider]=useState()
    var [img1,setimg1]=useState()
    var [img2,setimg2]=useState()
    var [img3,setimg3]=useState()

    useEffect(()=>{
        loaddata();
    },[])
    var loaddata=async()=>{
        var result=await axios.get('http://localhost:1000/slider_api');
        // console.log(result.data);
        setslider(result.data.da[0])
        setimg1(result.data.da[0].img1)
        setimg2(result.data.da[0].img2)
        setimg3(result.data.da[0].img3)
    }
    // console.log(slider)

    return(
        
        <>
        {/* <h1>{slider.da[0].slider_title}</h1> */}
   
  <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="1000">
                        <img src={`http://localhost:1000/${img1}`} className="" alt="..."style={{height:"600px"}} />
                    </div> 
                    <div className="carousel-item " data-bs-interval="2000">
                         <img src={`http://localhost:1000/${img2}`} className="" alt="..."style={{height:"600px"}} />
                    </div>
                    <div className="carousel-item">
                        <img src={`http://localhost:1000/${img3}`} className="" alt="..."style={{height:"600px"}} />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </>
    )
}