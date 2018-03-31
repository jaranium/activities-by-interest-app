import scrapeApi from './scraper';

import { expect } from 'chai';
import 'mocha';
import fs from 'fs';

describe('scraper basic tests', () => {
  it('should return back from scrapeApi() within 10000ms', function(done) { // hard to use => fn with Mocha when we want access to this.timeout: https://github.com/mochajs/mocha/issues/2018, https://stackoverflow.com/questions/31418005/how-to-increase-the-mocha-timeout-per-suite-in-a-typescript-test
    this.timeout(10000);
    console.log('about to call scrape()');
    scrapeApi((status: string) => {
      describe('should save the expected JSON data as a string', () => {
        const s = fs.readFileSync('data/eventsPage1.json', { encoding: 'utf-8' });
        it('should be saved as a string', () => {
          expect(typeof s).to.eql('string');
        });
        it('should at least have length greater than 1, ie: {}', () => {
          expect(s.length > 1).to.eql(true);
        });
        it('should parse as an object', () => {
          const o = JSON.parse(s);
        expect(typeof o).to.eql('object');
        });
      })
      done();
    });
  });
});