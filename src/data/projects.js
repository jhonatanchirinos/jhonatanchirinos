import gb_preview from "@/assets/project-previews/gb_preview.png";
import peloteada_preview from "@/assets/project-previews/peloteada_preview.png";
import pokeapp_preview from "@/assets/project-previews/pokeapp_preview.png";

export const projects = [
  {
    title: "GunBound Info",
    image: gb_preview,
    description: "Proyecto web que contiene información sobre el juego GunBound",
    url: "https://gunbound-info.vercel.app/emotes",
    technologies: [
      "devicon-vuejs-plain",
      "devicon-javascript-plain",
      "devicon-tailwindcss-plain",
    ],
  },
  {
    title: "Peloteada Chirinos",
    image: peloteada_preview,
    description: "Proyecto web para crear alineaciones de fútbol 6vs6.",
    url: "https://peloteada-chirinos.vercel.app/",
    technologies: [
      "devicon-vuejs-plain",
      "devicon-javascript-plain",
      "devicon-tailwindcss-plain",
    ],
  },
  {
    title: "Pokébuscador",
    image: pokeapp_preview,
    description: "Proyecto web para buscar Pokémon por nombre y por tipos utilizando PokéAPI.",
    url: "https://buscadordepokemon.vercel.app/",
    technologies: [
      "devicon-react-original",
      "devicon-javascript-plain",
      "devicon-tailwindcss-plain",
    ],
  },
];