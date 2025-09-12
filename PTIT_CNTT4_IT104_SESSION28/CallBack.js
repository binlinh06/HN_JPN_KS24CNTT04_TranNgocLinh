function askForPhoneNumber (callback){
    let phone;
    console.log("Ánh gọi Duy xin số ĐT Nhung")
    console.log("DOi MINH TI")
    setTimeout(()=>{
        console.log("Tim thay so r")
        phone=12345
        callback(phone)
    },3000)
}
function processPhoneNumber(sdt){
    console.log(`Anh goi cho Nhung theo so ${sdt}`)
}
askForPhoneNumber(processPhoneNumber)



