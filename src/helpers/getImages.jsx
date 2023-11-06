export const getImages = (size, images) => {
  console.log("from helpers", images);

  // const images = [
  //   "/bun.svg",
  //   "/deno.svg",
  //   "/docker.svg",
  //   "/github.svg",
  //   "/javascript.svg",
  //   "/redis.svg",
  //   "/supabase.svg",
  //   "/svelte.svg",
  //   "/vite.svg",
  //   "/vscode.svg",
  // ];

  // const images = [
  //   "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
  //   "https://rickandmortyapi.com/api/character/avatar/2.jpeg",
  //   "https://rickandmortyapi.com/api/character/avatar/3.jpeg",
  //   "https://rickandmortyapi.com/api/character/avatar/4.jpeg",
  //   "https://rickandmortyapi.com/api/character/avatar/5.jpeg",
  //   "https://rickandmortyapi.com/api/character/avatar/6.jpeg",
  //   "https://rickandmortyapi.com/api/character/avatar/7.jpeg",
  //   "https://rickandmortyapi.com/api/character/avatar/8.jpeg",
  //   "https://rickandmortyapi.com/api/character/avatar/9.jpeg",
  //   "https://rickandmortyapi.com/api/character/avatar/10.jpe",
  //   "https://rickandmortyapi.com/api/character/avatar/11.jpeg",
  //   "https://rickandmortyapi.com/api/character/avatar/12.jpeg",
  //   "https://rickandmortyapi.com/api/character/avatar/13.jpeg",
  //   "https://rickandmortyapi.com/api/character/avatar/14.jpeg",
  //   "https://rickandmortyapi.com/api/character/avatar/15.jpeg",
  //   "https://rickandmortyapi.com/api/character/avatar/16.jpeg",
  //   "https://rickandmortyapi.com/api/character/avatar/17.jpeg",
  //   "https://rickandmortyapi.com/api/character/avatar/18.jpeg",
  //   "https://rickandmortyapi.com/api/character/avatar/19.jpeg",
  //   "https://rickandmortyapi.com/api/character/avatar/20.jpeg",
  // ];

  const newImages = images.slice(0, size);
  console.log(newImages);
  const itera = newImages
    .flatMap((item) => [`1|${item}`, `2|${item}`])
    .sort(() => Math.random() - 0.5);

  console.log(itera);
  return itera;
};
