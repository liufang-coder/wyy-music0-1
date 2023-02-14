import MYRequest from '..';

export function getDjRadioCatelistData() {
  return MYRequest.get({
    url: "/dj/catelist"
  })
}

export function getDjRadioRecommendData(type) {
  return MYRequest.post({
    url: "/dj/recommend/type",
    params: {
      type
    }
  })
}

export function getDjRadiosData(cateId, limit, offset) {
  return MYRequest.post({
    url: "/dj/radio/hot",
    params: {
      cateId,
      limit,
      offset
    }
  })
}