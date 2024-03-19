//Task # 17
var Guestlist = ['Sara', 'Zoha', 'Arfa', 'Simran'];
var NotPresent = 'Sara';
var NewGuest = 'Alizey';
Guestlist[1] = NewGuest;
Guestlist.unshift('Areesha', 'Noor', 'Anie');
console.log('\n Unfortunately we can not  arrange big table, Only two people are allowed.');
while (Guestlist.length > 2) {
    var remove_guest = Guestlist.pop();
    console.log("Sorry Mam!.".concat(remove_guest, " you are no invited for dinner."));
}
for (var i = 0; i < Guestlist.length; i++) {
    console.log('Dear' + Guestlist[i] + '\n Yes you are still invited om tomorrow dinner \nThankyou\n');
}
Guestlist.slice(0, 2);
