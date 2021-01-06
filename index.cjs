const https = require('https');

const Get = async (hostname, path, headers)=>{
    return new Promise((resolve, reject) =>{
        const req = https.request({hostname: hostname, path: path, port: 443, method: "GET", headers: headers}, (res) =>{
            let responseBody = '';

            res.on('data', (chunk) =>{
                responseBody += chunk;
            });

            res.on('end', ()=>{
                resolve(responseBody);
            });
        });

        req.on('error', (err)=>{
            reject(err);
        });

        req.end();
    });
};

const Post = async (hostname, path, headers, data)=>{
    return new Promise((resolve, reject) =>{
        const req = https.request({hostname: hostname, path: path, port: 443, method: 'POST', headers: headers}, (res)=>{
            let responseBody = '';

            res.on('data', (chunk) =>{
                responseBody += chunk;
            });

            res.on('end', ()=>{
                resolve(responseBody);
            });
        });

        req.on('error', (err)=>{
            reject(err);
        });

        req.write(data);
        req.end();
    });
};

const Put = async (hostname, path, headers, data)=>{
    return new Promise((resolve, reject) =>{
        const req = https.request({hostname: hostname, path: path, port: 443, method: 'PUT', headers: headers}, (res) =>{
            let responseBody = '';

            res.on('data', (chunk) =>{
                responseBody += chunk;
            });

            res.on('end', ()=>{
                resolve(responseBody);
            });
        });

        req.on('error', (err)=>{
            reject(err);
        });

        req.write(data);
        req.end();
    });
};

const Delete = async (hostname, path, headers)=>{
    return new Promise((resolve, reject) =>{
        const req = https.request({hostname, hostname, path: path, port:443, method: 'DELETE', headers: headers}, (res)=>{
            let responseBody = '';

            res.on('data', (chunk) =>{
                responseBody += chunk;
            });

            res.on('end', ()=>{
                resolve(responseBody);
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