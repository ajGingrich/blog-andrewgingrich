function createPostLinkFromImmutable(link) {
  const slug = link.get('slug');
  const year = link.get('published').slice(0, 4);
  const month = link.get('published').slice(5, 7);
  const day = link.get('published').slice(8, 10);

  return `/post/${year}/${month}/${day}/${slug}`;
}

function createPostLinkFromJS(link) {
  const slug = link.slug;
  const year = link.published.slice(0, 4);
  const month = link.published.slice(5, 7);
  const day = link.published.slice(8, 10);

  return `/post/${year}/${month}/${day}/${slug}`;
}

export {
  createPostLinkFromImmutable,
  createPostLinkFromJS,
}
