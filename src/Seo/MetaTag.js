export const setMetaTags = ({ title = '', description = '', imageUrl = '' }) => {
  //set title
  document.querySelector('meta[property="og:title"]').setAttribute('content', `${title}`);

  //set description
  document.querySelector('meta[property="og:description"]').setAttribute('content', description);

  //set images
  document.querySelector('meta[property="og:image"]').setAttribute('content', imageUrl);

  //set url
  document.querySelector('meta[property="og:url"]').setAttribute('content', window.location.href);
};
