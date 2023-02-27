import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../store/store";
import { Movie } from "../movies/moviesSlice";




function getFromLocal(key:string){
    const unparsedItems = localStorage.getItem(key)
    if(unparsedItems){
        return JSON.parse(unparsedItems)
    }
    return [];
}
const initialState:WatchListState ={
   history:getFromLocal('history'),
   watchList:getFromLocal('watchList')
}
console.log('initial ', initialState);
interface WatchListState{
    history:StoredMovie[],
    watchList:StoredMovie[]
}
export interface StoredMovie{
    id:number
    title : string
    releaseDate:string
    voteAverage:number
    posterPath?:string
}
const watchlistSlice = createSlice({
    name:"watchlist",
    initialState,
    reducers:{
        toggleLocal:(state,action:PayloadAction<{key:string,movie:StoredMovie}>)=>{
            const {movie,key} =action.payload
            if(isStored(key,movie)){
                if(key==='history'){
                    state.history = state.history.filter((itm)=>itm.id!=movie.id)
                    saveToLocal(key,state.history)
                }
                else{
                    state.watchList = state.watchList.filter((itm)=>itm.id!=movie.id)
                    saveToLocal(key,state.watchList)
                }
            }
            else{
                if(key==='history'){
                    state.history.push(movie)
                    saveToLocal(key,state.history)
                }
                else{
                    state.watchList.push(movie)
                    saveToLocal(key,state.watchList)
                }
            }
        }
    }
})

function saveToLocal(key:string,items:StoredMovie[]){
    localStorage.setItem(key,JSON.stringify(items))
}
function isStored(key:string,item:StoredMovie):boolean{
    const items = localStorage.getItem(key)
    if(items){
        const parsed = JSON.parse(items);
        return parsed.some((itm:any)=>item.id==itm.id)
    }
    return false;
}
export default watchlistSlice.reducer
export const selectWatchList = (state:RootState)=>state.watchlistReducer.watchList
export const selectHistory = (state:RootState)=>state.watchlistReducer.history
export const {toggleLocal} = watchlistSlice.actions