import fetchJsonp from 'fetch-jsonp';

const url = 'https://api.flickr.com/services/feeds/photos_public.gne?format=json';

export function getPictures(tag) {
  return fetchJsonp(`${url}&tags${tag}`, { jsonpCallbackFunction: 'jsonFlickrFeed' })
    .then(response => response.json())
    .then((json) => {
      console.log(json.items.map(ele => ({ title: ele.title, url: ele.media.m })));
      return json.items.map(ele => ({ title: ele.title, url: ele.media.m }));
    })
    .catch((ex) => {
      console.log('failed', ex);
      return ex;
    });
}

