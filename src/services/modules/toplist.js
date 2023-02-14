import MYRequest from ".."

// 左侧bar
export function getLeftListData() {
    return MYRequest.get({
      url: "/toplist"
    })
  }
  
  // 获取榜单详情
  export function getRankingListData(id) {
    return MYRequest.post({
      url: "/playlist/detail",
      params: {
        id
      }
    })
  }