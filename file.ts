//Task # 32
let current_users: string[]=['Eric','Waseem','Alina','Fatima','Admin']
let new_users:string[]=['Liza','Zara','fizza','Noor','Zoha' ]
let current_users_lower:string[]=current_users.map(user=> user.toLowerCase())
for(let new_user of new_users){
    if(current_users_lower.includes(new_user.toLowerCase())){
    console.log(`Sorry ${new_users},that name is taken`)
} else {
    console.log(`Yes ${new_users},is still in available list`)
}
}