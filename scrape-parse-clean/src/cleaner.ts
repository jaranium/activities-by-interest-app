import parseLocationFromEBPage from './parser';

import fs from 'fs';
import path from 'path';
import { EBCategories } from './EBCategories';
export interface OurEvent {
  name: string;
  description: string;
  url: string;
  external_url: string;
  category: string;
  subcategory: string;
  start: Date;
  end: Date;
  latitude: string;
  longitude: string;
  created: Date;
  updated: Date;
  location: string;
  address: string;
  city: string;
}
interface EBCategory {
  resource_uri: string;
  id: string;
  name: string;
  name_localized: string;
  short_name: string;
  short_name_localized: string;
}
interface EBSubcategory {
  resource_uri: string;
  id: string;
  name: string;
}
interface EBAddress {
  address_1: string;
  address_2?: string;
  city: string;
  region: string;
  postal_code: string;
  country: string;
  latitude: string;
  longitude: string;
  localized_address_display: string;
  localized_area_display: string;
  localized_multi_line_address_display: Array<string>;
}
interface EBVenue {
  address: EBAddress;
  resource_uri: string;
  id: string;
  age_restriction?: string;
  capacity?: string;
  name: string;
  latitude: string;
  longitude: string;
}
interface EBEvent { // works on an api call for: https://www.eventbriteapi.com/v3/events/search/?token=F2VXUIDPZQLRKKGZMDM6&page=1
  name: { text: string };
  description: { text: string };
  url: string;
  vanity_url: string;
  start: { utc: string };
  end: { utc: string };
  category_id: string;
  subcategory_id: string;
  category?: EBCategory;
  subcategory?: EBSubcategory;
  venue?: EBVenue;
}

const EBCategoryIdToCategory = (id: number) => EBCategories(id).name;
function EBSubCategoryIdToSubCategory(id: number) {
  switch (id) {

  }
}
export default function clean(): Array<OurEvent> {
  const o = JSON.parse(fs.readFileSync(path.join(__dirname, '../data/eventsPage2.json'), { encoding: 'utf-8' }));
  const events: Array<OurEvent> = [];
  o.events.forEach((eIn: EBEvent) => {
    // console.log('event:', e);
    const e: OurEvent = {
      name: '',
      description: '',
      url: '',
      external_url: '',
      category: '',
      subcategory: '',
      start: new Date(),
      end: new Date(),
      latitude: '',
      longitude: '',
      created: new Date(),
      updated: new Date(),
      location: '',
      address: '',
      city: '',
    };
    e.name = eIn.name.text;
    e.description = eIn.description.text;
    e.url = eIn.url;
    e.external_url = eIn.vanity_url;
    e.start = new Date(eIn.start.utc);
    e.end = new Date(eIn.end.utc);
    e.category = EBCategoryIdToCategory(Number(eIn.category_id));
    // e.location = <string>parseLocationFromEBPage(e.url);
    e.address = eIn.venue ? eIn.venue.address.address_1 : '';
    e.city = eIn.venue ? eIn.venue.address.city : '';
    events.push(e);
  });
  return events;
}