import React from 'react'

const Sort = ({sort,setSort}) => {
    const onSelectChange=({currentTarget:input})=>{
       setSort({sort:input.value,order:sort.order})
    }

    const onArrowChange=()=>{
        if (sort.order=== 'asc') {
             setSort({sort:sort.order,order:'desc'})
        }else{
            setSort({sort:sort.order,order:'asc'})

        }

    }
  return (
    <div className='flex space-x-2'>
        <p className='text-white'>Sort By:</p>
        <select 
        className='py-0 rounded-md'
        defaultValue={sort.sort}
        onChange={onSelectChange}
        >
          <option className='rounded-md' value="year">Year</option>
          <option className='rounded-md' value="rating">Rating</option>
        </select>
        <button className=' text-black bg-white rounded-sm'
        onClick={onArrowChange}>
            <div className='flex justify-center px-2'><p>&uarr;</p>
            <p>&darr;</p></div>
            
        </button>
    </div>
  )
}

export default Sort