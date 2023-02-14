import { getBannerData, getHotRecommendData, getNewAlbumData, getTopListData } from "@/services";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// 发送异步网络请求
export const fetchRecommendDataAction = createAsyncThunk("fetchdata",async(payload,{dispatch}) => {
    // const res = await getBannerData()
    // console.log(res.banners);
    getBannerData().then(res => {
        dispatch(changeBannerAction(res.banners))
    })
    getHotRecommendData().then(res => {
        dispatch(changeHotRecommendAction(res.result))
    })
    getNewAlbumData().then(res => {
        dispatch(changeNewAblumAction(res.albums))
    })

    // getTopListData(3779629).then(res => {
    //     dispatch(changeNewListAction(res.playlist))
    // })
    // getTopListData(19723756).then(res => {
    //     dispatch(changeUpListAction(res.playlist))
    // })
    // getTopListData(2884035).then(res => {
    //     dispatch(changeOriginAction(res.playlist))
    // })
})
export const getTopData = (idx) => {
    return dispatch => {
        getTopListData(idx).then(res => {
        switch (idx) { 
          case 19723756:
            dispatch(changeUpListAction(res.playlist));
            break;
          case 3779629:
            dispatch(changeNewListAction(res.playlist));
            break;
          case 2884035:
            dispatch(changeOriginAction(res.playlist));
            break;
          default:
            console.log("其他数据处理");
        }
      })
    }
  }
const recommendSlice = createSlice({
    name:"recommend",
    initialState:{
        bannerInfo:[],
        hotRecommendInfo:[],
        newAlbumInfo:[],
        newListInfo:{},
        upListInfo:{},
        originListInfo:{},
    },
    reducers:{
        changeBannerAction(state,{payload}) {
            state.bannerInfo = payload
        },
        changeHotRecommendAction(state,{payload}) {
            state.hotRecommendInfo = payload
        },
        changeNewAblumAction(state,{payload}) {
            state.newAlbumInfo = payload
        },
        changeNewListAction(state,{payload}) {
            state.newListInfo = payload
        },
        changeUpListAction(state,{payload}) {
            state.upListInfo = payload
        },
        changeOriginAction(state,{payload}) {
            state.originListInfo = payload
        },
    },
    extraReducers:{
        // [fetchHomeDataAction.fulfilled](state,{payload}) {
        //     state.goodPriceInfo = payload
        // }
    }
})
export const {
    changeBannerAction,
    changeHotRecommendAction,
    changeNewAblumAction,
    changeNewListAction,
    changeUpListAction,
    changeOriginAction
} = recommendSlice.actions
export default recommendSlice.reducer