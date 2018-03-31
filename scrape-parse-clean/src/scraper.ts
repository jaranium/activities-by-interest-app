import request from 'request';
import fs from 'fs';
import path from 'path';
export default function scrapeApi(cb: Function) {
  const ebApiUrl = 'https://www.eventbriteapi.com/v3/events/search/?location.address=santa_monica&expand=organizer,venue,category,subcategory&token=F2VXUIDPZQLRKKGZMDM6';
  request(ebApiUrl).pipe(fs.createWriteStream('data/eventsPage2.json'))
  .on('finish', () => cb('download complete'));
}
export function scrapeEBUrl(url: string, cb: Function | void) {
  request(url, (err, res, body: string) => {
    if (typeof cb === 'function') cb(body);
    if (true) { // ie when on a read-write server filesystem @todo check for that etc down the road
      const filePath = path.join(__dirname, '../data/' + url.replace(/[^\w\s]/gi, '') + '.html');
      fs.writeFileSync(filePath, body, { encoding: 'utf-8' });
    }
  });
}