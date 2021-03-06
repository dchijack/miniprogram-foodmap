// 云函数入口文件
const cloud = require('wx-server-sdk')

cloud.init()

// 云函数入口函数
exports.main = async (event, context) => {
  const wxContext = cloud.getWXContext()

  const administrator = [
    "ocdyO4u6-0Gf92PZUWAsEK4LxkuI"
  ];

  if (administrator.indexOf(wxContext.OPENID) == -1){
    return {
      data:{
        is_administrator:false
      }
    }
  }else{
    return {
      data: {
        is_administrator: true
      }
    }
  }

}