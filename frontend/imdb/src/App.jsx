import React, { useState, useEffect } from 'react';
import LefthBar from './component/Lefthbar';
import RightBar from './component/RightBar';
import axios from 'axios';




function App() {
  const [obj, setObj] = useState({});
  const [sort, setSort] = useState({ sort: 'rating', order: 'desc' });
  const [filterGenre, setFilterGenre] = useState([]);
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState('');
  console.log(search)

  const base_url = 'http://localhost:8000/api/movies' 

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const url = `${base_url}?page=${page}&sort=${sort.sort},${sort.order}&genre=${filterGenre.toString()}&search=${search}`;
        const { data } = await axios.get(url);
        setObj(data);
        console.log(data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getAllMovies();
  }, [sort, filterGenre, page, search]);

  return (
    <div className="min-h-screen flex ">
      <div className="w-56 bg-[#1c1e29] ">
        <LefthBar setSearch={(search)=>setSearch(search)} />
      </div>
      <div className="flex-grow bg-[#1b1d28] overflow-y-auto">
        <RightBar 
        search={search}
        setSearch={(search)=>setSearch(search)}
        movies={obj.movies ? obj.movies : []} 
        genres={obj.genres}
        page={page}
        setPage={(page)=>setPage(page)}
        limit={obj.limit ? obj.limit : 0}
        total={obj.total ? obj.total : 0}
        sort={sort}
        setSort={(sort)=>setSort(sort)}
        filterGenre={filterGenre}
        setFilterGenre={(filterGenre)=>setFilterGenre(filterGenre)}
        />

      </div>
    </div>
  );
}

export default App;
