export const setMetaTags = (brand, name, amount,imageUrl) => {
  document
  .querySelector(`meta[property='og:title']`)
  .setAttribute('content', `${brand} ${name}`)
  document
  .querySelector(`meta[property='og:description']`)
  .setAttribute('content', `dnjf ${amount} 원`)
  document
  .querySelector(`meta[property='og:image']`)
  .setAttribute('content', `${imageUrl}`)
  document
  .querySelector(`meta[property='og:url']`)
  .setAttribute('content', window.location.href)
}