let cache = {};

export const getCachedData = (key) => {
  if (cache[key] && cache[key].expires > Date.now()) {
    return cache[key].data;
  }
  return null;
};

export const setCachedData = (key, data, ttl) => {
  cache[key] = {
    data,
    expires: Date.now() + ttl,
  };
};