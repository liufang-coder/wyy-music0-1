import { configureStore } from "@reduxjs/toolkit";
import recommendReducer from './modules/recommend';
import albumReducer from './modules/album'
import songsReducer from './modules/songs'
import toplistReducer from './modules/toplist'
import djradioReduce from './modules/djradio'
const store = configureStore({
    reducer:{
        recommend:recommendReducer,
        album:albumReducer,
        songs:songsReducer,
        toplist:toplistReducer,
        djradio:djradioReduce
    }
})

export default store