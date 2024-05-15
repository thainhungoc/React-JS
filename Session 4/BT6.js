class contact{
    constructor(name, phone, email){
        this.name = name;
        this.phone = phone;
        this.email = email;
    }
}
let phoneBooks = [];
function addContact(name,phone,email){
    const newContact = new contact(name, phone, email)
    phoneBooks = [...phoneBooks, newContact]
}
function displayContact(){
    phoneBooks.forEach((contact) =>{
        console.log("Tên: " +contact.name + "Số điện thoại: " + contact.phone + "email: " + contact.email);
    })
}

addContact("Thái Như Ngoc", "0123456789", "thainhungoc205@gmail.com");
addContact("Lương Hoàng Bảo Trân", "9876543210", "btran@gmail.com");
displayContact(); // in 