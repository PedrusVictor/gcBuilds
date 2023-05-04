export function Authenticate(){
    const session= localStorage.getItem("session")
    if(!session){
        return false
    }

    try{

        const user=JSON.parse(session).user
        if(!user||user&&user.login=="" || user&&user.login=="user")return false
        return true
    }
    catch(error){
        return false
    }
}