import React, {useEffect, useState} from 'react';
import './Pagination.css';

export default function Pagination({current, total, callback}) {

  const [pages, setPages] = useState([]);
  const choosePage = (chosen) => callback(chosen);

  useEffect(() => {
    let pagesArray = Array(total).fill().map((_, idx) => idx).map(x => x + 1);
    setPages(pagesArray);
  }, [total]);

  return (
      <div className={'pagination-container'}>
        {pages.map(page => <div className={`pagination-item ${page === current ? 'chosen-page' : ''}`}
                                key={page}
                                onClick={()=> choosePage(page)}
        >{page}</div>)}
      </div>
  );
}