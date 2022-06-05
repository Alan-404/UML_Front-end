export const checkEmail = (email) => {
    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/; 
    if (!filter.test(email)) { 
             alert('Please Enter valid email');
             return false; 
    }
    return true 
}

export const checkPhone = (phone) => {
    if (!(phone.length === 10 || phone.length === 11)){
        alert("Phone number must have 10 or 11 numbers")
        return false
    }
    for (var i=0; i<phone.length; i++){
        if (isNaN(parseInt(phone[i]))){
            alert("Phone number must not have character")
            return false
        }
    }
    return true
}