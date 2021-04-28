var obj = {
    "1": "google",
    "2": "yahoo",
    "3": "msn",
    "4": "stackoverflow",
    "5": "github",
    "6": "jsfiddle",
    "7": "amazon",
    "8": "ebay"
};

var arr = [];

for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
        arr.push(obj[key]);
    }
}

console.dir(arr.sort());