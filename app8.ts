//Task # 30
let users:string[]=['admin','Eric','John']
for(let user of users){
    if(user==="admin"){
    console.log("Hello admin,would you like to see a status report?")
}else{
    console.log(`Hello ${user}, thankyou for logging in again`)
}
}