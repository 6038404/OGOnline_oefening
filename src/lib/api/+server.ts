import { json } from '@sveltejs/kit';

export const GET = async () => {
  const apiKey = '49489f51f59f612510740191ed54bba703995b2a4426d296a2719ae16469c082';

  const url =
    'https://serpapi.com/search.json' +
    '?engine=google_hotels' +
    '&q=hotels+amsterdam' +
    '&check_in_date=2026-02-01' +
    '&check_out_date=2026-02-03' +
    '&adults=2' +
    '&currency=EUR' +
    '&api_key=' + apiKey;

  const res = await fetch(url);
  const data = await res.json();

  return json(data);
};
