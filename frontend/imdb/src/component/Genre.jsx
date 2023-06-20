import React from 'react'

const Genre = ({genres,filterGenre,setFilterGenre}) => {
    const onClick = (genre) => {
        if (filterGenre.includes(genre)) {
          // If the genre is already in the filterGenre array, remove it
          const updatedFilter = filterGenre.filter((val) => val !== genre);
          setFilterGenre(updatedFilter);
        } else {
          // If the genre is not in the filterGenre array, add it
          const updatedFilter = [...filterGenre, genre];
          setFilterGenre(updatedFilter);
        }
      };
  return (
    <div className='flex space-x-4 py-4 justify-center '>
    {genres && genres.map((genre,idx)=>(
      <p
      onClick={()=> onClick(genre)}
       className=' cursor-pointer bg-[#292d39] rounded-sm p-2 text-white font-semibold hover:bg-[#4a536c]' key={idx}>{genre}</p>
    ))}
  </div>
  )
}

export default Genre