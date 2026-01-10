import axios from "axios";
import react, { useEffect, useState } from "react";

export default function Hero(){
  var [img,setimg]=useState()
  useEffect(()=>{
    loaddata();
  },[])

var loaddata=async()=>{
  var result=await axios.get('http://localhost:1000/about_img_api')
  // console.log(result.data)
  setimg(result.data.da[0].about_img)
}
// console.log(img)
  return(
    <>
      <div className="row g-0">
            <div className="col-md-12">
              <img
                src={`http://localhost:1000/${img}`}
                alt="Biomass Briquettes"
                className="img-fluid w-100"
                style={{ height: 400 }}
              />
            </div>
          </div>
    </>
)}