import MYRequest from "..";

// 歌单分类
export function getSongCategoryData() {
  return MYRequest.get({
    url: "/playlist/catlist"
  })
}

// 全部歌单
export function getSongListData(cat="全部", limit = 35,offset=0) {
  return MYRequest.post({
    url: "/top/playlist",
    params: {
      cat,
      limit,
      offset
    }
  })
}