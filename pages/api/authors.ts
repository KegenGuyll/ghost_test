import GhostContentAPI from "@tryghost/content-api";

// Create API instance with site credentials
const api = new GhostContentAPI({
  url: "http://142.93.193.54:3001",
  key: "5083c66c8a5d8c07f04ee37b98",
  version: "v3",
});

export async function getAuthor(authorSlug) {
  return await api.authors
    .read({
      slug: authorSlug,
    })
    .catch((err) => {
      console.error(err);
    });
}
