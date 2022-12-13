
export default function SignUpValidation(name,email,pwd) {
    let errors = {};

    if(!name){
        errors.name = "*Name is Required";
    }
    if(!email){
        errors.email = "*Email is Required";
    } else if(!/\S+@\S+\.\S+/.test(email)){
        errors.email = "*Email Is Invalid";
    }
    if(!pwd){
        errors.pwd = "*Password is Required";
    } else if(pwd.length < 8){
        errors.pwd = "*Password should atleast contain 8 characters";
    }else if(!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/.test(pwd)){
        errors.pwd = "Password must contain one uppercase letter, one number and a special character";
    }
  
    return errors;
}
