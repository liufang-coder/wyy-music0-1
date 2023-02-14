import MYRequest from "..";

// 轮播图
export function getBannerData() {
    return MYRequest.get({
        url:"/banner"
    })
}

// 热门推荐
export function getHotRecommendData() {
    return MYRequest.get({
        url:"/personalized"
    })
}

// 新碟上架
export function getNewAlbumData() {
    return MYRequest.get({
        url:"/album/new"
    })
}

// 榜单
export function getTopListData(id) {
    return MYRequest.post({
        url:"/playlist/detail",
        params:{
            id
        }
    })
}

