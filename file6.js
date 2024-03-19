//Task no 38
function describe_city(city, Country) {
    if (Country === void 0) { Country = 'Pakistan'; }
    console.log("".concat(city, " is in").concat(Country));
}
describe_city('Karachi');
describe_city('Lahore', 'Punjab');
describe_city('khairpur', 'Sindh');
