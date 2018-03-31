import cleaner from './cleaner';
import { scrapeEBUrl } from './scraper';

import fs from 'fs';
import path from 'path';
import cheerio from 'cheerio';

const parseLocationFromEBPageBody = (body: string, cb?: Function): void | string => {
  const $ = cheerio.load(body);
  const locationSelector = '#event-page > main > div.js-hidden-when-expired.event-listing.event-listing--has-image > div.g-grid.g-grid--page-margin-manual > div > section.listing-info.clrfix > div.listing-info__body.l-sm-pad-vert-0.l-sm-pad-vert-6.clrfix.g-group.g-group--page-margin-reset > div > div > div.g-cell.g-cell-12-12.g-cell-md-4-12.g-offset-md-1-12.g-cell--no-gutters.l-lg-pad-left-6.hide-small > div > div:nth-child(4)';
  const locationSelectionText = $(locationSelector).text();
  const locationSelectionTextSplit = locationSelectionText.split('\n')
  const locationText = locationSelectionTextSplit && locationSelectionTextSplit.length > 2 ? locationSelectionTextSplit[3].trim() : '';
  if (typeof cb === 'function') cb(locationText);
  else return locationText;
};

export default function parseLocationFromEBPage(url: string, cb?: Function): void | string {
  const urlName = url.replace(/[^\w\s]/gi, '');
  const filePath = path.join(__dirname, '../data/' + urlName + '.html');
  if (fs.existsSync(filePath)) { // ideally, parser should not fetch while in parsing stage.
    if (process.env.NODE_ENV !== 'production') console.log('Page already exists in local filesystem!');
    const body = fs.readFileSync(filePath, { encoding: 'utf-8' });
    parseLocationFromEBPageBody(body, cb);
  } else { // @todo refactor this call to fetch from scraper (cache before needing to parse)?
    if (process.env.NODE_ENV !== 'production') console.log('Saving page to local filesystem!');
    scrapeEBUrl(url, (body: string) => parseLocationFromEBPageBody(body, cb));
  }
}