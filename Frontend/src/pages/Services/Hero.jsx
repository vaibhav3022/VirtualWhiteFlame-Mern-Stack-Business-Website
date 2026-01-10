import axios from "axios";
import react, { useEffect, useState } from "react";

export default function Hero()
{
    var [img,setimg]=useState();
    useEffect(()=>{
        loadData();
    })

    var loadData=async()=>{
        var result=await axios.get('http://localhost:1000/service_img_api')
        // console.log(result.data.da)
        setimg(result.data.da[0].service_img)
    }
    return(
        <>
          {/* ===== HERO IMAGE ===== */}
      <img src={`http://localhost:1000/${img}`} alt="Services Banner" className="hero-img" />

        </>
    )
}