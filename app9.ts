//Task # 31
let user :string[]=['Eric','Naseeb','Ali','Fatima','Admin'] 
if (user.length ===0){
    console.log("We need to find some users!")
} else{
    for(let users of user ){
        if( users==='Admin'){
console.log("Hello Admin, would you like to see a status report?")
        }else{
            console.log (`Hello ${user}, thankyou for logging in again.`)
        }
    }
}
user = []
if(user.length ===0){
    console.log("We need to find some users!")
}