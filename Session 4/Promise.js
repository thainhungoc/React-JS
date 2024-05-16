// promise - lời hứa : xử lí các thao tác bất đồng bộ trong js
// ví dụ: lấy dữ liệu từ máy chủ về tiêu tốn một khoảng thời gian 
// Nếu promise thành công: trạng thái resolve()
// Nếu promise thất bại : trạngt hái reject()


// tạo lời hứa
let myPromise = new Promise((resolve, reject)=>{
    // thành công
    let data = [2,20,5];
    // resolve(data);

    // thất bại
    let message = "Đăng ký thất bại";
    reject(message);
})

// gọi Promise
myPromise.then((data)=>{
    console.log(data)
},
    (message)=>{
        console.log(message);
    }
)

// khai báo có 2 hàm thì khi gọi phải có 2 hàm ấy 
// nếu data trả về thì resolve còn else reject
//                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    