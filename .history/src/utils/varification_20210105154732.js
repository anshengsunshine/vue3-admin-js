/**
 * 手机号验证
 * @param {*} value 手机号
*/
export function checkPhone(value){
    let regPhong = /^1[3456789][0-9]\d{9}$/;
    console.log(regPhong.test(value))
    return regPhong.test(value)
}

