import https from 'https';
import { load } from 'cheerio';
import fs from 'fs/promises';
import { Data } from './interfaces/data'

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
setInterval(makeRequest, 60000);

function getNewsList(data : string) {
    const $ = load(data)
    $('article').each((i, elem) => {
        const data : Data = {
            title : $(elem).find('.c-card__title > a').text(),
            date : $(elem).find('.c-bar__label > time').text(),
            views : $(elem).find('.i-views').text().trim(),
            image : $(elem).find('.c-card__media > .c-card__embed > img').attr('data-src'),
            link : $(elem).find('.c-card__title > a').attr('href'),
            theme : $(elem).find('.c-card__body__embed > .c-card__body > footer > a ').text().trim()
        }
        
        // crutch
        if (data.theme != "") {
            writeData(data, i)
        }
        
    } )
}

async function writeData(data: Data, i: number) {
    try {
        await fs.writeFile(`./data/news${i}.json`, JSON.stringify(data))
    } catch (err) {
        console.log(err);
    }
}