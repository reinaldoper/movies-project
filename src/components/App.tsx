import React, { useState, useEffect } from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { fetchMoviesTop } from '../service/fetchApi';
import { IMovie, BackdropCellProps } from '../types/Ttypes';
import { filterBy } from '@progress/kendo-data-query';
import { GridPageChangeEvent } from '@progress/kendo-react-grid';
import { urlImage } from '../environment/environment'
import ButtonFilter from '../buttons/ButtonFilter';
import ButtonReset from '../buttons/ButtonReset';

import '../styles/App.css'


const BackdropCell: React.FC<BackdropCellProps> = ({ dataItem }) => (
  <td className="imagem-container">
    <img className="imagem" src={`${urlImage}${dataItem.backdrop_path}`} alt={dataItem.title} />
  </td>
);

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [filters, setFilters] = useState<Array<{ field: string; operator: string; value: string; }>>([]);
  const [skip, setSkip] = useState(0);
  const [filterValue, setFilterValue] = useState('');

  useEffect(() => {
    const fetchMovies = async () => {
      const result = await fetchMoviesTop();
      setMovies(result.results);
    };

    fetchMovies();
  }, []);

  const applyFilters = () => {
    const filteredMovies = filters.length > 0 ? filterBy(movies, { logic: 'and', filters }) : movies;
    return filteredMovies;
  };

  const handlePageChange = (event: GridPageChangeEvent) => {
    setSkip(event.page.skip);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
  };

  const handleFilterClick = () => {
    const newFilters = [...filters, { field: 'title', operator: 'contains', value: filterValue }];
    setFilters(newFilters);
  };

  const handleResetFilters = () => {
    setFilters([]);
    setFilterValue('');
  };

  return (
    <>
      {movies.length === 0 && <h1>Loading...</h1>}
      {movies.length > 0 && (
        <>
        <h1>Movies</h1>
          <div>
            <label htmlFor="filter">Title filter: </label>
            <input type="text" id="filter" value={filterValue} onChange={handleFilterChange} />
            <ButtonFilter onClick={handleFilterClick} name='Filter' />
            <ButtonReset onClick={handleResetFilters} name='Reset' />
          </div>
          <Grid
            data={applyFilters().slice(skip, skip + 5)}
            style={{ height: '400px' }}
            resizable={true}
            sortable={true}
            pageable={{ pageSizes: true, buttonCount: 5 }}
            skip={skip}
            total={applyFilters().length}
            onPageChange={handlePageChange}
          >
            <GridColumn className='title-grid' field="title" title="Title" />
            <GridColumn field="backdrop_path" title="Backdrop" cell={BackdropCell} />
            <GridColumn className='title-grid' field="release_date" title="Release Date" />
            <GridColumn className='title-grid' field="original_language" title="Language" />
            <GridColumn className='overview-grid' field="overview" title="Overview" />
            <GridColumn className='title-grid' field="vote_average" title="Vote Average" />
          </Grid>
        </>
      )}
    </>
  );
}

export default App;
