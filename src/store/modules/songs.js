import { getSongCategoryData, getSongListData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 发送异步网络请求
export const fetchSongAction = createAsyncThunk("fetchdata",async(payload,{dispatch}) => {
    getSongCategoryData().then(res => {
        dispatch(changSongTitleAction(res))
    })

})
export const getSongListAction = (page) => {
    return dispatch => {
        const cat = "全部"
        getSongListData(cat,30,(page - 1) * 30).then(res => {
            dispatch(changeSongsAction(res))
        })
    }
} 
const songsSlice = createSlice({
    name:"album",
    initialState:{
        songTitleInfo:[],
        songsInfo:[],
    },
    reducers:{
        changSongTitleAction(state,{payload}) {
            state.songTitleInfo = payload
        },
        changeSongsAction(state,{payload}) {
            state.songsInfo = payload
        },
    },
    extraReducers:{
        // [fetchHomeDataAction.fulfilled](state,{payload}) {
        //     state.goodPriceInfo = payload
        // }
    }
})
export const {
    changSongTitleAction,
    changeSongsAction,
} = songsSlice.actions
export default songsSlice.reducer