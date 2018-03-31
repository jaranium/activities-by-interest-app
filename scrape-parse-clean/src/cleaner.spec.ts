import clean from './cleaner';

import { expect } from 'chai';
import 'mocha';
import fs from 'fs';
import path from 'path';

describe('clean() basic tests', () => {
  it('should return back from clean() within 10000ms', function(done) { // hard to use => fn with Mocha when we want access to this.timeout: https://github.com/mochajs/mocha/issues/2018, https://stackoverflow.com/questions/31418005/how-to-increase-the-mocha-timeout-per-suite-in-a-typescript-test
    this.timeout(10000);
    console.log('about to call clean()');
    const events = clean();
    describe('should return an array of events', () => {
      it('should be an array', () => Array.isArray(events));
      it('should return nonempty array', () => events.length > 0);
      it('should have an event with a category', () => events[0].category !== '');
      it('should have an event with a description', () => events[0].description !== '');
      it('should have an event with a name', () => events[0].name !== '');
      it('should have an event with a external_url', () => events[0].external_url !== '');
      it('should have an event with a location', () => typeof events[0].location === 'string' && events[0].location.length > 0);
      if (process.env.NODE_ENV === 'development') {
        console.log('events:', events);
      }
    });
  });
});