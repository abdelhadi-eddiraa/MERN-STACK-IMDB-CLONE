import React from 'react'
import Sort from './Sort';

const NavBar = ({setSearch,sort,setSort}) => {
    const currentDate = new Date();
    const hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const period = hours >= 12 ? 'PM' : 'AM';
    const displayHours = hours > 12 ? hours - 12 : hours;
  return (
    <div  className='flex justify-between'>
        
        <div>
       
                            <div className="flex items-center gap-1 px-2 border rounded-lg">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                </svg>
                                <input
                                    type="text"
                                    placeholder="Search"
                                    onChange={({currentTarget:input})=>setSearch(input.value)}
                                    className="w-full px-2 py-2 text-gray-500 bg-transparent rounded-md outline-none"
                                />
                            </div>
                       
        </div>


        <div className=' flex space-x-6 items-center'>
        <Sort sort={sort} setSort={(sort)=>setSort(sort)} />
        <p className='text-white'>{`${displayHours}:${minutes < 10 ? '0' : ''}${minutes} ${period}`}</p>

        </div>
    </div>
  )
}

export default NavBar