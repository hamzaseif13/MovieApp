import { createSlice } from "@reduxjs/toolkit";


const initialState: MoviesState = {
    movies: [],
    genres:[],
}

interface MoviesState {
    movies: Movie[],
    genres:Genre[],
    selectedGenre?:Genre
    selectedDate?:string
    selectedRating?:number
}
interface Movie {
    posterPath?: string
    adult: boolean
    overview: string
    releaseDate: string
    genresIds: number[]
    id: number
    originalTitle: string
    originalLanguage: string
    title: string
    backdropPath?: string
    popularity: number
    voteCount: number
    video: boolean
    voteAverage: number
}
interface Genre{
    name:string
    id:number
}
const moviesSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {

    }
})

export default  moviesSlice.reducer