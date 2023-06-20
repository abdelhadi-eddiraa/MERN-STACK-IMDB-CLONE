import React from 'react'
import NavBar from './NavBar'
import Table from './Table'
import Pagination from './Pagination'
import Genre from './Genre'

const RightBar = ({search,setSearch,movies,genres,page,setPage,total,limit,sort,setSort,filterGenre,setFilterGenre}) => {

  return (
    <div  className='h-full p-4'>
        <NavBar  sort={sort} setSort={(sort)=>setSort(sort)}   
         search={search}
        setSearch={(search)=>setSearch(search)}/>
        <Genre genres={genres} filterGenre={filterGenre}
        setFilterGenre={(filterGenre)=>setFilterGenre(filterGenre)}/>

        <Table movies={movies}/>
        <Pagination page={page} setPage={(page)=>setPage(page)} total={total} limit={limit}/>
    </div>
  )
}

export default RightBar