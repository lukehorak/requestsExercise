const request = require('request');
const fs = require('fs');


// Cause why throw an error when you can YEET(https://www.youtube.com/watch?v=2Bjy5YQ5xPc) it
const YEET = (err) => {
  console.log("This code errored... YEET \n*DABS*\n\n \\(⌐■_■)ᕗ\n---")
  throw err
}

request.get('https://sytantris.github.io/http-examples/future.jpg')             
       .on('error', function(err){
        YEET(err)
       })
       .on('response', function (response) {                        
          console.log(` Response Status Code: ${response.statusCode}\n`,
          `Response Status Message: ${response.statusMessage}\n`,
          `Response Content Type" ${response.headers['content-type']}`);
          })
       .pipe(fs.createWriteStream('./future.jpg'))
       .on('finish', function(){
        console.log('Download Complete.')
      })
console.log("Downloading image...");