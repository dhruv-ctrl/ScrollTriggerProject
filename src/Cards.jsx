import React, { useEffect } from 'react'
import gsap from 'gsap' 
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
function Cards() {
    const images = [
        "/images/1.png",
        "/images/2.png",
        "/images/3.png",
        "/images/4.png",
        "/images/5.png",
        "/images/6.png",
    ]

    useEffect(()=>{
        gsap.utils.toArray(".card").forEach(card=>{
            gsap.to(card,{
                scale:0.8,
                opacity:0,
                scrollTrigger:{
                    trigger:card,
                    start:"top 15%",
                    end: "bottom 15%",
                    scrub:true,
                }
            })
        })
    })
    return (
    
        <main className='flex items-center text-white flex-col gap-5 py-[15vh] '>
        {
            images.map((image,index) =>{
            return (
                <div id = {index} className='card w-[25vw] sticky top-[15vh] flex flex-col gap-5 px-[30px] py-[10vh] items-center bg-[#383027] rounded-lg text-center'>
            <img className = "w-[18vh] " src={image} alt="" />
            <h1 className='text-4xl'>
                The<br></br>
                <span className='font-bold'>Algorithm</span>
            </h1>
            <p className='font-thin'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, odio!</p>
         </div>
            )
        })
       }
        </main>
    
  )
}

export default Cards