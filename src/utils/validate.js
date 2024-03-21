export const checkValidateData=(email,password)=>{

    const isEmailValid=/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)
    const isPasswordValid=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password)

    if(!isEmailValid) return ("Email Id Is Not Valid")

    if(!isPasswordValid) return ("Password Is Not Valid")

    return null
}