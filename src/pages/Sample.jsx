import React from 'react'
import assets from '../assets/assets'

const Sample = () => {
  return (
    <div>
        <div className="bg-gray-800 text-white p-5 font-bold text-2xl text-center  ">
                <h1>JAGDAMB SOUND</h1>
        </div>
        <div className="flex items-center gap-3  p-3 border-4 border-black">
            <h1 className="text-xl font-semibold">Rating</h1>
            <div className='flex text-yellow-200'>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star"></i>
                <i class="fa-solid fa-star text-gray-200"></i>
            </div>
        </div>
        <div>
            <div className='mt-5 px-5'>
                <h1 className="text-center text-xl font-semibold ">BARAT</h1>
                <video style={{ width: "600px", height: "300px" }} controls>
                    <source src={assets.sample1} type="video/mp4" />
                </video>
                <div className="border-2 border-b-black w-full mt-4"></div>
            </div>

            <div className='mt-5 px-5'>
                <h1 className="text-center text-xl font-semibold ">14 APRIL SPECIAL</h1>
                <video style={{ width: "600px", height: "300px" }} controls>
                    <source src={assets.sample2} type="video/mp4" />
                </video>
                <div className="border-2 border-b-black w-full mt-4"></div>
            </div>

            <div className='mt-5 px-5'>
                <h1 className="text-center text-xl font-semibold ">Competition</h1>
                <video style={{ width: "600px", height: "300px" }} controls>
                    <source src={assets.sample3} type="video/mp4" />
                </video>
                <div className="border-2 border-b-black w-full mt-4"></div>
            </div>
            
            <div className='mt-5 px-5 flex w-1/2 ml-3 '>
                <img  src={assets.contactdj}  />
                <img src={assets.front} alt="" />
            </div>
        </div>
      
        
    </div>
  )
}

export default Sample
