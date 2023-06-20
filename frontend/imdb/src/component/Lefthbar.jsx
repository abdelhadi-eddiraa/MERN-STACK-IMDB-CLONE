import React, { useState } from 'react'
import {AiOutlinePoweroff} from 'react-icons/ai'
import {MdLocalMovies} from 'react-icons/md'

const Lefthbar = () => {
    const [icons,setIcons]=useState([
        {'name':'Movies','icons':<MdLocalMovies/>},
        {'name':'Tv','icons':<MdLocalMovies/>},
        {'name':'Music','icons':<MdLocalMovies/>}
       ,{'name':'Anime','icons':<MdLocalMovies/>},
       {'name':'Movies','icons':<MdLocalMovies/>},
       {'name':'Movies','icons':<MdLocalMovies/>},])
  return (
    <div className='flex h-full pl-12 justify-around flex-col  '>
        <div className=' text-white font-mono'>LONG</div>
        <div className=' text-white font-mono opacity-30'>
            {icons.map((icon)=>(
                <div className='flex   text-2xl space-x-2 items-center my-5 '>
                  <div className='py-2'> {icon.icons}</div>
                   <p>{icon.name}</p>
                </div>
            ))}
        </div>
        <div className='flex  pb-4 text-red-600 font-mono'>
            <AiOutlinePoweroff/>
        </div>
    </div>
  )
}

export default Lefthbar