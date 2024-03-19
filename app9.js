//Task # 31
var user = ['Eric', 'Naseeb', 'Ali', 'Fatima', 'Admin'];
if (user.length === 0) {
    console.log("We need to find some users!");
}
else {
    for (var _i = 0, user_1 = user; _i < user_1.length; _i++) {
        var users = user_1[_i];
        if (users === 'Admin') {
            console.log("Hello Admin, would you like to see a status report?");
        }
        else {
            console.log("Hello ".concat(user, ", thankyou for logging in again."));
        }
    }
}
user = [];
if (user.length === 0) {
    console.log("We need to find some users!");
}
