//Task # 16
var GuestList = ['Sara', 'Zoha', 'Arfa', 'Simran'];
var notPresent = 'Sara';
var newGuest = 'Alizey';
GuestList[1] = newGuest;
for (var i = 0; i < GuestList.length; i++) {
    console.log('Dear' + GuestList[i] + ',\n Join us for a delicious dinner at our place tonight! \n\n Thankyou');
}
GuestList.unshift('Areesha', 'Noor', 'Anie');
for (var i = 0; i < GuestList.length; i++) {
    console.log('Dear' + GuestList[i] + ',\n Join us for a delicious dinner at our place tonight! \n\n Thankyou');
}
