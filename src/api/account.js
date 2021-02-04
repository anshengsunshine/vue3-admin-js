import service from "./request";


export function GetCode(data) {
    return service.request({
        url: "getCode/",
        method: 'post',
        data
    })
}
