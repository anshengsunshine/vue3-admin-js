export function checkPhone(value){
    let regPhong = /^1[3456789][0-9]\d{9}$/;
    return regPhong.test(value)
}