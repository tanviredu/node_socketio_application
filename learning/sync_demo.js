fs = require('fs');



data = fs.readdirSync('A:/');
console.log('data :',  data);


// thiis will come after
console.log('this comes after');


// so this is a synchronous programming