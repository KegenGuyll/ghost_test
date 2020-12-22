import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: "http://142.93.193.54:3001",
  key: "5083c66c8a5d8c07f04ee37b98",
  version: "v3",
});

export async function getPosts() {
  return await api.posts
    .browse({
      include: "tags,authors",
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getSinglePost(postSlug) {
  return await api.posts
    .read({
      slug: postSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}

export async function getPages() {
  return await api.pages
    .browse({
      limit: "all",
    })
    .catch((err) => {
      console.error(err);
    });
}
