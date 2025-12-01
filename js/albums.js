const albums = {
    dawnfm: {
        title: "You Have Selected Dawn FM",
        description: "“Dawn FM” is a concept album framed as a surreal radio broadcast guiding listeners through a liminal, purgatory state. It blends synth-pop, disco, and electronic influences to explore themes of reflection, regret, and spiritual transition.",
        cover: "images/dawnfm.jpg",
        alt: "Dawn FM album cover",
        spotify: "https://open.spotify.com/embed/album/2nLOHgzXzwFEpl62zAgCEC?utm_source=generator&theme=0",
        theme: "theme-dawnfm"
    },
    starboy: {
        title: "You Have Selected Starboy",
        description: "“Starboy” marks a transformation in The Weeknd's persona, diving into fame, excess, and self-destruction with slick synth wave production. The album embraces a more futuristic, pop leaning sound while still carrying his dark R&B edge.",
        cover: "images/starboy.jpg",
        alt: "Starboy album cover",
        spotify: "https://open.spotify.com/embed/album/2ODvWsOgouMbaA5xf0RkJe?utm_source=generator&theme=0",
        theme: "theme-starboy"
    },
    kissland: {
        title: "You Have Selected Kiss Land",
        description: "“Kiss Land” is a cinematic, neon-lit debut studio album inspired by isolation, culture shock, and life on the road. Its dark, atmospheric production reflects The Weeknd's emotional disconnect and anxieties during sudden fame.",
        cover: "images/kissland.jpg",
        alt: "Kiss Land album cover",
        spotify: "https://open.spotify.com/embed/album/3hhDpPtCFuQbppwYgsVhMO?utm_source=generator&theme=0",
        theme: "theme-kissland"
    },
    trilogy: {
        title: "You Have Selected Trilogy",
        description: "“Trilogy” is a remastered compilation of his first three mixtapes: House of Balloons, Thursday, and Echoes of Silence. It captures The Weeknd's early sound with moody, atmospheric R&B defined by vulnerability, escapism, and nocturnal storytelling.",
        cover: "images/trilogy.jpg",
        alt: "Trilogy album cover",
        spotify: "https://open.spotify.com/embed/album/5EbpxRwbbpCJUepbqVTZ1U?utm_source=generator&theme=0",
        theme: "theme-trilogy"
    }
};

function changeAlbum(key) {
    const album = albums[key];

    // hide the home section
    document.querySelector("#home-albumtitle-section").style.display = "none";

    // show the album section and expand its height
    const albumSection = document.querySelector("#album-content");
    albumSection.style.display = "block";
    albumSection.style.visibility = "visible";
    albumSection.style.height = "auto";
    albumSection.style.overflow = "visible";

    // show the heading
    document.querySelector("#album-heading").style.display = "block";
    document.querySelector("#album-title").style.display = "block";


    // update title + description
    document.querySelector("#album-title").textContent = album.title;
    document.querySelector("#album-description").textContent = album.description;

    // update album cover
    const image = document.querySelector("#album-cover");
    image.src = album.cover;
    image.alt = album.alt;

    // update spotify embed
    document.querySelector("#spotify-embed").src = album.spotify;

    // theme
    document.body.className = "";
    document.body.classList.add(album.theme);
}


