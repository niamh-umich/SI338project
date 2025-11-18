const albums = {
  dawnfm: {
    title: "Dawn FM",
    description: "“Dawn FM” is a concept album framed as a surreal radio broadcast guiding listeners through a liminal, purgatory-like state. It blends synth-pop, disco, and electronic influences to explore themes of reflection, regret, and spiritual transition.",
    cover: "images/dawnfm.jpg",
    alt: "Dawn FM album cover",
    spotify: "https://open.spotify.com/embed/album/2nLOHgzXzwFEpl62zAgCEC?utm_source=generator&theme=0"
  },
  starboy: {
    title: "Starboy",
    description: "“Starboy” marks a transformation in The Weeknd's persona, diving into fame, excess, and self-destruction with slick synth wave production. The album embraces a more futuristic, pop leaning sound while still carrying his dark R&B edge.",
    cover: "images/starboy.jpg",
    alt: "Starboy album cover",
    spotify: "https://open.spotify.com/embed/album/2ODvWsOgouMbaA5xf0RkJe?utm_source=generator&theme=0"
  },
  kissland: {
    title: "Kiss Land",
    description: "“Kiss Land” is a cinematic, neon-lit debut studio album inspired by isolation, culture shock, and life on the road. Its dark, atmospheric production reflects The Weeknd's emotional disconnect and anxieties during sudden fame.",
    cover: "images/kissland.jpg",
    alt: "Kiss Land album cover",
    spotify: "https://open.spotify.com/embed/album/3hhDpPtCFuQbppwYgsVhMO?utm_source=generator&theme=0"
  },
  trilogy: {
    title: "Trilogy",
    description: "“Trilogy” is a remastered compilation of his first three mixtapes: House of Balloons, Thursday, and Echoes of Silence. It captures The Weeknd’s early sound: moody, atmospheric R&B defined by vulnerability, escapism, and nocturnal storytelling.",
    cover: "images/trilogy.jpg",
    alt: "Trilogy album cover",
    spotify: "https://open.spotify.com/embed/album/5EbpxRwbbpCJUepbqVTZ1U?utm_source=generator"
  }
};

function changeAlbum(key) {
  const album = albums[key];

  // Hide the home content, show the album content
  document.querySelector("#home-albumtitle-section").style.display = "none";
  document.querySelector("#album-content").style.display = "block";

  // Update the content
  document.querySelector("#album-title").textContent = album.title;
  document.querySelector("#album-description").textContent = album.description;

  const image = document.querySelector("#main-image");
  image.src = album.cover;
  image.alt = album.alt;

  document.querySelector("#spotify-embed").src = album.spotify;
}
