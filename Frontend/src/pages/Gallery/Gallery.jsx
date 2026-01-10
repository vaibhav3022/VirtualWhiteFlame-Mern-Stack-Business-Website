import react from "react";
import Hero from "./Hero";
import GalleryCard from "./GalleryCard";

export default function Gallery()
{
    return(
        <>
  {/* ===== Inline Styles ===== */}
      <style>
        {`
          .hero-img {
            width: 100%;
            height: auto;
          }
          .gallery-heading {
            color: #0b6623;
            font-weight: 700;
            text-align: center;
            margin: 40px 0 10px;
          }
          .filter-btn {
            color: #0b6623;
            font-weight: 600;
            border: none;
            background: transparent;
            margin: 0 8px;
          }
          .filter-btn:hover,
          .filter-btn.active {
            text-decoration: underline;
          }
          .gallery-card {
            background-color: #e8ffe8;
            border: none;
            padding: 10px;
            transition: 0.3s ease;
            text-align: center;
            border-radius: 6px;
          }
          .gallery-card:hover {
            transform: translateY(-5px);
            box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
          }
          .gallery-title {
            color: #0b6623;
            font-weight: 600;
            margin-top: 10px;
            font-size: 1rem;
          }
        `}
      </style>



    <div className="container-fluid p-0">
        <div className="row">
            <div className="col-12">
                <Hero/>
            </div>
        </div>
    </div>



<section>
    <GalleryCard/>
</section>



        </>
    )
}