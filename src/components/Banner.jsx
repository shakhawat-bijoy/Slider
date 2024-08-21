import React, { useState } from 'react'
import Image from './layer/Image'
import p1 from "/p1.jpg";
import p2 from "/p2.jpg";
import p3 from "/p3.jpg";
import p4 from "/p4.jpg";
import Slider from 'react-slick';
import { FaMinus, FaPlus } from 'react-icons/fa';

const Banner = () => {

  let [number, setNumber] = useState(1)

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,

    appendDots: dots => (
      <div>
        <ul className='flex gap-x-5 mt-5'>{dots}</ul>
      </div>
    ),
    customPaging: i => (
      <div className='w-[120px] h-[120px] bg-cover cursor-pointer'
      style={{backgroundImage: `url(${[p1, p2, p3, p4][i]})`}}
      >

      </div>
    )


  };
  


  return (
    <div>
        <h1 className="text-3xl font-bold underline flex justify-center my-32">
            Hello world!
        </h1>

        <div className='lg:w-[700px] w-[320px] lg:h-[700px] h-[320px] lg:mt-32 mt-8 ml-20'>
                    <Slider  {...settings}>
                        <div className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px]'>
                            <Image className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px] object-cover' src={p1} alt="item01" />
                        </div>
                        
                        <div className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px]'>
                            <Image className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px] object-cover' src={p2} alt="item01" />
                        </div>
                        
                        <div className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px]'>
                            <Image className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px] object-cover' src={p3} alt="item01" />
                        </div>
                        
                        <div className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px]'>
                            <Image className='lg:w-[700px] w-[320px] lg:h-[500px] h-[220px] object-cover' src={p4} alt="item01" />
                        </div>
                        
                    </Slider>
                </div>



               
            <p className='text-base my-10 flex ml-20'>
            <div className='flex items-center border'>
                  <div
                  onClick={()=> number <= 1 ? setNumber(1):setNumber(--number)}
                     className='lg:w-14 w-8 lg:h-8  h-6 flex items-center justify-center cursor-pointer'>
                      <FaMinus />
                    </div>
                    <p className='lg:w-14 w-8 lg:h-10 h-6  flex items-center justify-center'>{number}</p>
                    <div 
                    onClick={()=> setNumber(++number)}
                   className='lg:w-14 w-8 lg:h-8  h-6 flex items-center justify-center cursor-pointer'><FaPlus/></div>
                    
                  </div>
            </p>




    </div>
  )
}

export default Banner