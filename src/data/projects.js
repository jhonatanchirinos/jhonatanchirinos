import gb_preview from "@/assets/images/projects/gb_preview.webp";
import sixvssix_preview from "@/assets/images/projects/sixvssix_preview.webp";
import pokeapp_preview from "@/assets/images/projects/pokeapp_preview.webp";
import earnings_preview from "@/assets/images/projects/earnings_preview.webp";

export const projects = [
  {
    title: "GunBound Info",
    image: gb_preview,
    description: "Proyecto web con información sobre el juego GunBound.",
    url: "https://gunbound-info.vercel.app/emotes",
    technologies: [
      "devicon-vuejs-plain",
      "devicon-javascript-plain",
      "devicon-tailwindcss-plain",
    ],
  },
  {
    title: "6vs6",
    image: sixvssix_preview,
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
    description:
      "Proyecto web para buscar Pokémon por nombre y por tipos utilizando PokéAPI.",
    url: "https://buscadordepokemon.vercel.app/",
    technologies: [
      "devicon-react-original",
      "devicon-javascript-plain",
      "devicon-tailwindcss-plain",
    ],
  },
  {
    title: "Earnings Counter",
    image: earnings_preview,
    description:
      "Proyecto web que muestra en tiempo real las ganancias acumuladas según un salario mensual configurable.",
    url: "https://earnings-counter-jet.vercel.app/",
    technologies: [
      "devicon-vuejs-plain",
      "devicon-typescript-plain",
      "devicon-tailwindcss-plain",
    ],
  },
];
