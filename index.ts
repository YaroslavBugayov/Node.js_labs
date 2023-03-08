import https from 'https';

const options = {
    hostname: 'gordonua.com',
    port: 443,
    path: '/ukr/news.html',
    method: 'GET'
};
  

const makeRequest = () => {
    const req = https.request(options, res => {
        
        console.log(`statusCode: ${res.statusCode}`);
    
        res.on('data', d => {
            process.stdout.write(d);
        });
    });
       
    req.on('error', error => {
        console.error(error);
    });
      
    req.end();
}
setTimeout(makeRequest, 10000);