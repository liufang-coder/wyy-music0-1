import { getDjRadioCatelistData, getDjRadioRecommendData, getDjRadiosData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 发送异步网络请求
export const fetchRadioAction = createAsyncThunk("fetchdata",async(payload,{dispatch}) => {
    getDjRadioCatelistData().then(res => {
        dispatch(changRadioCategoriesAction(res.categories))
    })
})
export const getNewRadioAction = (currentId) => {
    return dispatch => {
        getDjRadioRecommendData(currentId).then(res => {
        dispatch(changeNewRadiosAction(res.djRadios));
      })
    }
  }

  export const getRadiosAction = (currentId, offset) => {
    return dispatch => {
        getDjRadiosData(currentId, 20, offset*20).then(res => {
        dispatch(changeRankingRadiosAction(res.djRadios));
      })
    }
  }
const djradioSlice = createSlice({
    name:"djradio",
    initialState:{
        radioCategoriesInfo:[],
        newRadiosInfo:[],
        rankingRadiosInfo:[],
        currentId:3
    },
    reducers:{
        changRadioCategoriesAction(state,{payload}) {
            state.radioCategoriesInfo = payload
        },
        changeNewRadiosAction(state,{payload}) {
            state.newRadiosInfo = payload
        },
        changeCurrentIdAction(state,{payload}) {
            state.currentId = payload
        },
        changeRankingRadiosAction(state,{payload}) {
            state.rankingRadiosInfo = payload
        }
    },
    extraReducers:{
        // [fetchHomeDataAction.fulfilled](state,{payload}) {
        //     state.goodPriceInfo = payload
        // }
    }
})
export const {
    changRadioCategoriesAction,
    changeNewRadiosAction,
    changeCurrentIdAction,
    changeRankingRadiosAction
} = djradioSlice.actions
export default djradioSlice.reducer