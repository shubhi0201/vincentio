import React from 'react'
import gpupricing from "./gpupricing.webp"

const Gpupricing = () => {
  return (
    <div><div className="hero">
         <div className="hero_title"> GPU Cloud Pricing </div>
          <div className="hero_subtitle">Up to 75% more cost-effective than legacy cloud providers</div>
           <div><img src={gpupricing} alt="vincetio" className="image"/>
           </div> 
           </div>
    </div>
    

  )
}

export default Gpupricing
