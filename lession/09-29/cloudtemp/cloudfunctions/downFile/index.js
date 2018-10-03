// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  return await cloud.downloadFile({
    fileID: "cloud://test-f7b933.7465-test-f7b933/test-img/test.jpg"
  })
}