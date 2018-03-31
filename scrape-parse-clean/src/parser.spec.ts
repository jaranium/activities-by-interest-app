import parseLocationFromEBPage from './parser';
import { scrapeEBUrl } from './scraper';

import { expect } from 'chai';
import 'mocha';
import fs from 'fs';
import path from 'path';

describe('parser.parseLocationFromEBPage(url) basic tests', () => {
  it('should return back from scrapeEBUrl() within 10000ms', function(done) { // hard to use => fn with Mocha when we want access to this.timeout: https://github.com/mochajs/mocha/issues/2018, https://stackoverflow.com/questions/31418005/how-to-increase-the-mocha-timeout-per-suite-in-a-typescript-test
    this.timeout(10000);
    console.log('about to call scrapeEBUrl()');
    const url = 'https://www.eventbrite.com/e/love-propaganda-saturdays-seriesgrp-tickets-27205766179?aff=ebapi';
    parseLocationFromEBPage(url, (location: string) => {
      describe('should parse the scraped page from the provided URL', () => {
        it('should be saved as a string', () => {
          expect(typeof location).to.eql('string');
        });
        it('should have positive length', () => {
          expect(location.length > 1).to.eql(true);
        });
      });
      done();
    });
  });
});