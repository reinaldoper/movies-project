import { MouseEventHandler } from "react";

export interface IMovie {
  "adult": boolean,
  "backdrop_path": string,
  "id": number,
  "original_language": string,
  "original_title": string,
  "title": string,
  "vote_average": number,
  "release_date": string,
  "genre_ids": [
    number,
    number
    ],
  "overview": string
}

export interface BackdropCellProps {
  dataItem: IMovie;
}

export interface ButtonFilterProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  name: string;
}