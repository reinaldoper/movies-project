import React, { useState, useEffect } from 'react';
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { fetchMoviesTop } from '../service/fetchApi';
import { IMovie, BackdropCellProps, IFilter } from '../types/Ttypes';
import { filterBy } from '@progress/kendo-data-query';
import { GridPageChangeEvent } from '@progress/kendo-react-grid';
import { urlImage } from '../environment/environment'
import ButtonFilter from '../buttons/ButtonFilter';
import ButtonReset from '../buttons/ButtonReset';
import { format } from 'date-fns/format';

import Swal from "sweetalert2";

import '../styles/App.css'


const BackdropCell: React.FC<BackdropCellProps> = ({ dataItem }) => (
  <td className="imagem-container">
    <img className="imagem" src={`${urlImage}${dataItem.backdrop_path}`} alt={dataItem.title} />
  </td>
);

function App() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [filters, setFilters] = useState<Array<IFilter>>([]);
  const [skip, setSkip] = useState<number>(0);
  const [filterValue, setFilterValue] = useState<string>('');
  const [options, setOptions] = useState<string>('')

  useEffect(() => {
    const fetchMovies = async () => {
      const { results } = await fetchMoviesTop();
      setMovies(results);
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
    if (options.length === 0) {
      Swal.fire('Hey user!', 'Please select a filter term', 'info');
    } else {
      const newFilters = [...filters, { field: `${options}`, operator: 'contains', value: filterValue }];
      setFilters(newFilters);
    }

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
          <div className="w3-bar">
            <select value={options} id="filter" onChange={e => setOptions(e.target.value)} >
              <option value="">Select a filter</option>
              <option value="title">Title</option>
              <option value="release_date">Release_date</option>
              <option value="original_language">Original_language</option>
              <option value="vote_average">Vote_average</option>
            </select>
            <input type="text" id="filter" placeholder='Filter' value={filterValue} onChange={handleFilterChange} className="w3-bar-item w3-input" />
            <ButtonFilter onClick={handleFilterClick} name='Filter' />
            <ButtonReset onClick={handleResetFilters} name='Reset' />
          </div>
          <Grid
            data={applyFilters().slice(skip, skip + 5)}
            style={{ height: 'auto', width: '100%', overflowY: 'hidden' }}
            resizable={true}
            sortable={true}
            pageable={{ pageSizes: true, buttonCount: 5 }}
            skip={skip}
            total={applyFilters().length}
            onPageChange={handlePageChange}
          >
            <GridColumn className='overview-grid' field="title" title="Title" />
            <GridColumn field="backdrop_path" title="Backdrop" cell={BackdropCell} />
            <GridColumn field="release_date"
              title="Release Date"
              cell={(props) => (
                <td className='overview-grid'>
                  {format(new Date(props.dataItem.release_date), 'dd/MM/yyyy')}
                </td>
              )} />
            <GridColumn className='overview-grid' field="original_language" title="Language" />
            <GridColumn className='overview-grid' field="genre_ids" title="Genre_ids" />
            <GridColumn className='overview-grid' field="vote_average" title="Vote Average" />
          </Grid>
        </>
      )}
    </>
  );
}

export default App;
