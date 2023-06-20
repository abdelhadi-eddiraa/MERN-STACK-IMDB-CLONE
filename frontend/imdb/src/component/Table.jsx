import React from 'react'

const Table = ({movies}) => {
  return (
    <div className='grid grid-cols-4 justify-items-center   gap-y-2 h-full p-4'>
        {movies.map((movie,idx)=>(
           <div  key={idx} className='relative'>
              <div  className='w-40 h-20 rounded-sm'>
                <img src={movie.img} alt='mobie.img'/>
              </div>
              {/*<p className='text-white absolute bottom-0 left-0 p-4'>{movie.name} ({movie.year})</p>*/}

              <div>
              {/*{movie.genre.map((genre,index)=>(
               <p key={index} className='bg-white absolute top-0 left-0 w-full'>
                    {genre}
                    {index !== movie.genre.length -1 && '/'}
                   
                    </p>
            ))
           } */} 
              </div>
           </div>
          
        ))}
    </div>
  )
}

export default Table