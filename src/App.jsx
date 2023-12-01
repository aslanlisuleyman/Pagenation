

import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import Cards from './components/Cards';
import Pagenation from './components/Pagenation';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostPerPage] = useState(8);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/comments').then((res) => {
      setData(res.data);
      setLoading(false);
    });
  }, []);

  const lastItemIndex = currentPage * postsPerPage;
  const firstItemIndex = lastItemIndex - postsPerPage;
  const paginatedData = data.slice(firstItemIndex, lastItemIndex);

  const filteredData = paginatedData.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Search "
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {loading ? (
        <div class="d-flex justify-content-center" style={{ marginTop: '25%' }}>
          <div class="spinner-border" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <>
          <Cards data={filteredData} />
          <Pagenation
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            data={data}
            postsPerPage={postsPerPage}
          />
          <select
            onChange={(e) => {
              setPostPerPage(e.target.value);
            }}
            name="postsPerPage"
            id=""
          >
            <option value="8">8</option>
            <option value="10">10</option>
            <option value="12">12</option>
          </select>
        </>
      )}
    </div>
  );
}

export default App;

