import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Hero = () => {

  return (

    <div className='w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center 
    justify-center gap-4'>
       
       
        <div>
            <Image src={assets.hero} alt='' className='rounded-full w-64'/>
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>
                Hi! I'm Vladimir a Manual QA tester <Image src={assets.hand_icon} alt=''
               className='w-6'/></h3>
             <p className='max-w-2xl mx-auto font-Ovo'>
             I am capable of analyzing business needs and executing comprehensive integration testing to ensure the system functions as intended across all layers
             <span className='block'>(API, database, and frontend).</span>  
             </p>
            
            
             <div className='flex flex-col sm:flex-row items-center gap-4 mt-4'>

                 <a href='#contact'
                 className='px-10 py-3 border borded-white rounded-full bg-black text-white flex items-center gap-2'
                 >Contact me <Image src={assets.right_arrow_white} alt=''
               className='w-4'/></a>

             <a href='/qa_manual_cv.pdf' download 
              className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
                 
                 My resume <Image src={assets.download_icon} alt=''
               className='w-4'/></a>

             </div>
         </div>

    )

  }

export default Hero