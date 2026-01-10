import axios from "axios";
import react, { useEffect, useState } from "react";

export default function Hero()
{
    var [img,setimg]=useState();
    useEffect(()=>{
       loaddata()
    },[])

    var loaddata=async ()=>{
        var result=await axios.get('http://localhost:1000/contact_img_api')
        setimg(result.data.data[0].contact_img)
       
    }
    return(
        <>
          {/* ===== HERO IMAGE ===== */}
      <img src={`http://localhost:1000/${img}`} alt="Contact Banner" className="hero-img" />

        </>
    )
}