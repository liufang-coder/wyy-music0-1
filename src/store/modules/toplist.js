import { getLeftListData, getRankingListData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 发送异步网络请求
export const fetchTopListAction = createAsyncThunk("fetchdata",async(payload,{dispatch}) => {
    getLeftListData().then(res => {
        dispatch(changTopListInfoAction(res.list))
    })
})
export const getPlayListAction = (id) => {
    return dispatch => {
        getRankingListData(id).then(res => {
            dispatch(changePlayListAction(res.playlist))
        })
    }
} 
const topListSlice = createSlice({
    name:"toplist",
    initialState:{
        topListInfo:[],
        playListInfo:[],
    },
    reducers:{
        changTopListInfoAction(state,{payload}) {
            state.topListInfo = payload
        },
        changePlayListAction(state,{payload}) {
            state.playListInfo = payload
        },
    },
    extraReducers:{
        // [fetchHomeDataAction.fulfilled](state,{payload}) {
        //     state.goodPriceInfo = payload
        // }
    }
})
export const {
    changTopListInfoAction,
    changePlayListAction,
} = topListSlice.actions
export default topListSlice.reducer