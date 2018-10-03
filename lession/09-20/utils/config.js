const baseUrl = "https://api.douban.com/v2/movie"
var allUrl = {
  hot: baseUrl + "/in_theaters?city=广州&start=0&count=10"
}
module.exports = allUrl;