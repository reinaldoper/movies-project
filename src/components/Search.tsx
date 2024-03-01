import { fetchMoviesSearch } from "../service/fetchApi";
import { useState } from "react";
import { Grid, GridColumn } from '@progress/kendo-react-grid';
import { IMovie, BackdropCellProps } from '../types/Ttypes';
import { GridPageChangeEvent } from '@progress/kendo-react-grid';
import { urlImage } from '../environment/environment'
import ButtonFilter from '../buttons/ButtonFilter';
import ButtonReset from '../buttons/ButtonReset';
import movie from '../assets/movie.png'

import '../styles/App.css'


const BackdropCell: React.FC<BackdropCellProps> = ({ dataItem }) => (
  <td className="imagem-container">
    {dataItem.backdrop_path ? (
      <img className="imagem" src={`${urlImage}${dataItem.backdrop_path}`} alt={dataItem.title} />
    ) : (
      <img className="imagem" src={movie} alt="Imagem Padrão" />
    )}
  </td>
);

const Search = () => {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [skip, setSkip] = useState(0);
  const [filterValue, setFilterValue] = useState<string>('');
  const [reset, setReset] = useState<boolean>(true);


  const handlePageChange = (event: GridPageChangeEvent) => {
    setSkip(event.page.skip);
  };

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilterValue(e.target.value);
    
  };

  const handleFilterClick = async () => {
    if (filterValue.length === 0) {
      alert("Please select a search term");
    } else {
      const { results } = await fetchMoviesSearch(filterValue);
      setMovies(results);
      setReset(false);
    }

  };

  const handleResetFilters = () => {
    setFilterValue('');
    setMovies([]);
    setReset(true);
  };

  return (
    <>
      {movies.length === 0 && <h1>Do your movie search</h1>}
      <div className="w3-bar">
        { reset && <>
        <input type="text" id="filter" placeholder="search" value={filterValue} onChange={handleFilterChange} className="w3-bar-item w3-input" />
        <ButtonFilter onClick={handleFilterClick} name='Search' /></>}
        {!reset && <><ButtonReset onClick={handleResetFilters} name='Reset' /></>}
      </div>
      {movies.length > 0 && (
        <>
          <Grid
            data={movies.slice(skip, skip + 5)}
            style={{ height: '400px' }}
            resizable={true}
            sortable={true}
            pageable={{ pageSizes: true, buttonCount: 5 }}
            skip={skip}
            total={movies.length}
            onPageChange={handlePageChange}
          >
            <GridColumn className='overview-grid' field="title" title="Title" />
            <GridColumn field="backdrop_path" title="Backdrop" cell={BackdropCell} />
            <GridColumn className='overview-grid' field="release_date" title="Release Date" />
            <GridColumn className='overview-grid' field="original_language" title="Language" />
            <GridColumn className='overview-grid' field="genre_ids" title="Genre_ids" />
            <GridColumn className='overview-grid' field="vote_average" title="Vote Average" />
          </Grid>
        </>
      )}
    </>
  );
}

export default Search
