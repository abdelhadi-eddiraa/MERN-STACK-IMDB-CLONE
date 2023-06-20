import React from 'react'

const Pagination = ({page,setPage,limit,total}) => {
   const totalPage=Math.ceil(total/limit)

   const onClick=(newPage)=>{
       setPage(newPage + 1)
   }
    return (
    <div className='p-6  flex justify-center space-x-2 '>
        
        {totalPage > 0 && [...Array(totalPage)].map((val,idx)=>(
           <button
           key={idx}
           onClick={()=> onClick(idx)}
           className={page===idx +1 ? 'text-black p-2 bg-white   rounded-md' : 'text-white p-2 bg-[#292d39]   rounded-md'  }
           
           >{idx + 1}</button>
        ))}
    </div>
  )
}

export default Pagination