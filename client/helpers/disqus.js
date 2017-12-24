function createPostUrl(url) {
  const baseUrl = 'https://blog.andrewingrich.com/article/';
  const postUrl = url.slice(30);

  return baseUrl + postUrl;
}

function createIdentifier(url) {
  return url.slice(30);
}

export {
  createPostUrl,
  createIdentifier,
}