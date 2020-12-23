import GhostContentAPI from "@tryghost/content-api";
import { key, url, version } from "./ghostCredentials";

export const api = new GhostContentAPI({
  url: url,
  key: key,
  version: version,
});
