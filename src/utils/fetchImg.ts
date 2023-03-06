/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
// Funcion para conseguir la url de la imagen del lenguaje

import { string } from "zod";

// a travez de la API de wikipedia
async function fetchImg() {
  const language = "JavaScript";
  const endpoint = `https://en.wikipedia.org/w/api.php?action=query&prop=pageimages&format=json&piprop=original&titles=${language}`;
  const response = await fetch(endpoint);
  if (!response.ok) {
    throw Error(response.statusText);
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const languageRequest = await response.json();

  // Primero busco el pageID a travez de la query
  const pageQuery = languageRequest.query.pages;
  // Con esto consigo su ID, ya que es desconocido por el momento
  // Si no se encuentra, se remplaza por un -1, indicando que no existe
  let pageID = Object.keys(pageQuery)[0];
  if (pageID === undefined) pageID = "-1";

  // Ahora puedo acceder al url de la imagen
  const img = pageQuery[pageID].original.source;

  console.log(img);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return img;
}

fetchImg()
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

export default fetchImg;
