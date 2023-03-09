import https from 'https';
import { load } from 'cheerio'

const options = {
    hostname: 'tsn.ua',
    port: 443,
    path: '/news',
    method: 'GET'
};
  

const makeRequest = () => {
    const req = https.request(options, res => {
        
        console.log(`statusCode: ${res.statusCode}`);
    
        res.on('data', d => {
            // process.stdout.write(d);
            getNewsList(d.toString('utf-8'));
        });
    });
       
    req.on('error', error => {
        console.error(error);
    });
      
    req.end();
}
setTimeout(makeRequest, 1000);

function getNewsList(data : string) {
    const $ = load(data)
    const wrapper = $('article').each((i, elem) => {
        const title = $(elem).find('.c-card__title > a').text()
        const date = $(elem).find('.c-bar__label > time').text()
        const views = $(elem).find('.i-views').text().trim()
        const image = $(elem).find('.c-card__media > .c-card__embed > img').attr('data-src')
        const link = $(elem).find('.c-card__title > a').attr('href')
        const theme = $(elem).find('.c-card__body__embed > .c-card__body > footer > a ').text().trim()
        // crutch
        if (theme !== "") {
            
        }
        
    } )
    
}