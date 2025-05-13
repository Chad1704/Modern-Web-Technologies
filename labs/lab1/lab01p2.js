/* 
C- Create - Post
R - Read  - Get
U - Update - Put
D - Delete - Delete
*/

import http from 'http';
import fs from 'fs';


const server = http.createServer((req, res) => {
    //do something

    if(req.url == '/'){
        res.end('Hello World!!!');
    }

    else if(req.url == '/about'){

        const data = fs.readFileSync('./html/about.html')

        res.end(data);

    }
    else if(req.url == '/contact'){
        res.end('Hello To The Contact Page');
        

    }
    else if(req.url == '/methods'){

        if (req.method == 'GET'){
            res.end('Hello From The Get Method');
        }
        else if (req.method == 'POST'){
            res.end('Hello From The Post Method');
        }
        else if (req.method == 'PUT'){
            res.end('Hello From The Put Method');
        }

    } // Methods
    else{
        res.end('404 Not Found');
    }

});


server.listen(8000, () => {

    console.log(`http://localhost:8000`);

})