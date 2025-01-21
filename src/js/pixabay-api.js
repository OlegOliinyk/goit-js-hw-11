export function fetchPhotosByQuery(url) {
  return fetch(url).then(response => {
    if (!response.ok) throw new Error(response.status);
    return response.json();
  });
}
