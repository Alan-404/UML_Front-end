import swal from 'sweetalert';
export const checkEmail = (email) => {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter.test(email)) { 
        swal({
            title: "Error System",
            text: 'Định Dạng Email Không Hợp Lệ',
            icon: "error",
            dangerMode: true
        })
        return false
    }
    return true 
}

export const checkPhone = (phone) => {
    
    if (!(phone.length === 10 || phone.length === 11)){
        swal({
            title: "Error System",
            text: 'Số Điện Thoại Phải có 10 hoặc 11 chữ số.',
            icon: "error",
            dangerMode: true
        })
        return false
    }
    for (var i=0; i<phone.length; i++){
        if (isNaN(parseInt(phone[i]))){
            swal({
                title: "Error System",
                text: 'Số điện thoại không được có chữ.',
                icon: "error",
                dangerMode: true
            })
            return false
        }
    }
    return true
}

export const checkPrice = (price) => {
    for (var i=0; i<price.length; i++){
        if (isNaN(parseInt(price[i]))){
            swal({
                title: "Error System",
                text: 'Tiền không được có ký tự.',
                icon: "error",
                dangerMode: true
            })
            return false
        }
    }
    return true
} 