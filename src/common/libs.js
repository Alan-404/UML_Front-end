import swal from 'sweetalert';
export const checkEmail = (email) => {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter.test(email)) { 
        swal({
            title: "Error System",
            text: 'Please Enter valid email',
            icon: "error",
            dangerMode: true
        })
    }
    return true 
}

export const checkPhone = (phone) => {
    if (!(phone.length === 10 || phone.length === 11)){
        swal({
            title: "Error System",
            text: 'Phone number must have 10 or 11 numbers',
            icon: "error",
            dangerMode: true
        })
        return false
    }
    for (var i=0; i<phone.length; i++){
        if (isNaN(parseInt(phone[i]))){
            swal({
                title: "Error System",
                text: 'Phone number must not have character',
                icon: "error",
                dangerMode: true
            })
            return false
        }
    }
    return true
}