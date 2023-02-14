import { getAllAlbumData, getHotAlbumsData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 发送异步网络请求
export const fetchAlbumDataAction = createAsyncThunk("fetchdata",async(payload,{dispatch}) => {
    getHotAlbumsData().then(res => {
        dispatch(changeHotAlbumAction(res.albums))
    })

})
export const getAllAlbumAction = (page) => {
    return dispatch => {
        getAllAlbumData(30,(page - 1) * 30).then(res => {
            dispatch(changeAllAlbumAction(res.albums))
            dispatch(changeAllAlbumTotalAction(res.total))
        })
    }
} 
const albumSlice = createSlice({
    name:"album",
    initialState:{
        hotAlbumInfo:[],
        allAlbumInfo:[],
        allAlbumTotal:0
    },
    reducers:{
        changeHotAlbumAction(state,{payload}) {
            state.hotAlbumInfo = payload
        },
        changeAllAlbumAction(state,{payload}) {
            state.allAlbumInfo = payload
        },
        changeAllAlbumTotalAction(state,{payload}) {
            state.allAlbumTotal = payload
        }
    },
    extraReducers:{
        // [fetchHomeDataAction.fulfilled](state,{payload}) {
        //     state.goodPriceInfo = payload
        // }
    }
})
export const {
    changeHotAlbumAction,
    changeAllAlbumAction,
    changeAllAlbumTotalAction
} = albumSlice.actions
export default albumSlice.reducer