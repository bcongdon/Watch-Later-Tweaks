'use strict';

chrome.runtime.onInstalled.addListener(details => {
  console.log('previousVersion', details.previousVersion);
});

chrome.webRequest.onBeforeRequest.addListener(
  function(details) {
    var newurl = details.url + '&list=WL'
    if(details.url.indexOf('list=') == -1) {
      console.log('Redirecting ' + details.url + ' to ' + newurl)
      return { redirectUrl: newurl }
    }
  },
  {urls: ['*://youtube.com/watch?*',
          '*://www.youtube.com/watch?*']},
  ['blocking']
);
