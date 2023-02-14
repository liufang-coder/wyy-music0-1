import MYRequest from ".."

// 新碟上架-全部新碟
export function getAllAlbumData(limit, offset) {
    return MYRequest.post({
      url: "/album/new",
      params: {
        limit,
        offset
      }
    })
  }
  // 新碟上架-热门新碟
  export function getHotAlbumsData() {
    return MYRequest.get({
      url: "/album/newest"
    })
  }