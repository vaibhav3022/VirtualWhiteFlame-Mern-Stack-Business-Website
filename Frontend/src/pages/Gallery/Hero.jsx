import axios from "axios";
import react, { useEffect, useState } from "react";

export default function Hero()
{
    var [img,setimg]=useState()
 useEffect(()=>{
    loaddata()
 })
 var loaddata=async()=>{
    var result=await axios.get('http://localhost:1000/gallery_img_Api');
    setimg(result.data.data[0].gallery_img)
 }
    return(
        <>
          {/* ===== HERO SECTION ===== */}
      <img src={`http://localhost:1000/${img}`} alt="Gallery Banner" className="hero-img" />
        </>
    )
}