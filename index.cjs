const https = require('https');

const Get = async (url, headers)=>{
    return new Promise((resolve, reject) =>{
        const urlobject = new URL(url);
        const req = https.request({hostname: urlobject.hostname, path: urlobject.pathname + urlobject.search, port: urlobject.port, method: "GET", headers: headers}, (res) =>{
            
            let responseBody = '';

            res.on('data', (chunk) =>{
                responseBody += chunk;
            });

            res.on('end', ()=>{
                resolve({StatusCode: res.statusCode, Headers: res.headers ,Data: responseBody});
            });
        });

        req.on('error', (err)=>{
            reject(err);
        });

        req.end();
    });
};

const Post = async (url, headers, data)=>{
    return new Promise((resolve, reject) =>{
        const urlobject = new URL(url);
        const req = https.request({hostname: urlobject.hostname, path: urlobject.pathname + urlobject.search, port: urlobject.port, method: 'POST', headers: headers}, (res)=>{
            let responseBody = '';

            res.on('data', (chunk) =>{
                responseBody += chunk;
            });

            res.on('end', ()=>{
                resolve({StatusCode: res.statusCode, Headers: res.headers ,Data: responseBody});
            });
        });

        req.on('error', (err)=>{
            reject(err);
        });

        req.write(data);
        req.end();
    });
};

const Put = async (url, headers, data)=>{
    return new Promise((resolve, reject) =>{
        const urlobject = new URL(url);
        const req = https.request({hostname: urlobject.hostname, path: urlobject.pathname + urlobject.search, port: urlobject.port, method: 'PUT', headers: headers}, (res) =>{
            let responseBody = '';

            res.on('data', (chunk) =>{
                responseBody += chunk;
            });

            res.on('end', ()=>{
                resolve({StatusCode: res.statusCode, Headers: res.headers ,Data: responseBody});
            });
        });

        req.on('error', (err)=>{
            reject(err);
        });

        req.write(data);
        req.end();
    });
};

const Delete = async (url, headers)=>{
    return new Promise((resolve, reject) =>{
        const urlobject = new URL(url);
        const req = https.request({hostname: urlobject.hostname, path: urlobject.pathname + urlobject.search, port: urlobject.port, method: 'DELETE', headers: headers}, (res)=>{
            let responseBody = '';

            res.on('data', (chunk) =>{
                responseBody += chunk;
            });

            res.on('end', ()=>{
                resolve({StatusCode: res.statusCode, Headers: res.headers ,Data: responseBody});
            });
        });

        req.on('error', (err)=>{
            reject(err);
        });

        req.end();
    });
};

module.exports = {
    Get: Get,
    Post: Post,
    Put: Put,
    Delete: Delete
};