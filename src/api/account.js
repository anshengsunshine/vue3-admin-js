import service from "./request";


export function GetCode(data) {
    return service.request({
        url: "/getCode",
        method: 'post',
        data
    })
}



// post 请求
// service.request({
//     url: "/user",
//     method: 'post',
//     data: {
//         ID: 12345
//     }
// })