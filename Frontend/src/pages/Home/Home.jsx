import react from "react";
import './Home.css';
import Slider from "./Slider";
import About from "./About";
import PlantsCard from "./PlantsCard";
import Counting from "./Counting";
import WorkingProcess from "./WorkingProcess";
import ClientTestimonials from "./ClientTestimonials";
import Machinaries from "./Machinaries";
import NewsBlogs from "./NewBlogs";

export default function Home()
{
    return(
        <>

    <slider className="p-0">
       <div className="container-fluid mb-5 mt-0">
       <Slider/>
           </div>
    </slider>



    <about className="m-5">
        <About/>
    </about>


   <section>
   <PlantsCard/>
   </section>

<counting>
   <div className="container-fluid  bg-success mt-5">
 
        <Counting/>
    </div>

</counting>


<working>
    <WorkingProcess/>
</working>

<client>
    <ClientTestimonials/>
</client>

<blogs>
    <NewsBlogs/>
</blogs>
<machine>
    <Machinaries/>
</machine>
        </>
    )
}