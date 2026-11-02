export type VisualCategory = "Photography" | "Graphic Design"

export type VisualPhoto = {
  src: string

  alt: string
}

export type VisualAlbum = {
  title: string

  category: VisualCategory

  year?: string

  description: string

  cover: string

  photos: VisualPhoto[]

  featured?: boolean
}

const graduationPhotos = [
  ["graduation-fpm01936.jpg", "Graduate portrait against a wooden wall"],

  ["graduation-fpm01946.jpg", "Black and white graduation detail portrait"],

  ["graduation-fpm01947.jpg", "Graduation portrait beside a campus railing"],

  ["graduation-fpm01981.jpg", "Graduate portrait on a campus walkway"],

  ["graduation-fpm01984.jpg", "Full-length graduation portrait by a railing"],

  ["graduation-fpm01995.jpg", "Graduate posing in ceremonial attire"],

  ["graduation-fpm01999.jpg", "Graduate portrait in a bright outdoor setting"],

  ["graduation-fpm02006.jpg", "Graduate standing among campus greenery"],

  ["graduation-fpm02009.jpg", "Graduate posing beside a campus railing"],

  ["graduation-fpm02010-2.jpg", "Candid graduation portrait outdoors"],

  ["graduation-fpm02021.jpg", "Black and white graduation portrait"],

  ["graduation-fpm02022.jpg", "Black and white graduate portrait on campus"],

  ["graduation-fpm02024.jpg", "Graduate in a pink hijab and graduation cap"],

  ["graduation-fpm02027.jpg", "Close graduation portrait in a pink hijab"],

  ["graduation-fpm02033.jpg", "Full-length portrait on a campus stairway"],

  ["graduation-fpm02034.jpg", "Graduation portrait on a stairway"],

  ["graduation-fpm02036.jpg", "Close-up graduation portrait"],

  ["graduation-fpm02041.jpg", "Black and white detail of graduation attire"],

  [
    "graduation-fpm02056.jpg",
    "Black and white graduation portrait by a railing",
  ],

  ["graduation-fpm02058.jpg", "Black and white graduate portrait indoors"],

  ["graduation-fpm02082.jpg", "Graduate posing in an elevator"],

  ["graduation-fpm02090.jpg", "Dramatic graduation portrait indoors"],

  [
    "graduation-fpm02092.jpg",
    "Portrait in graduation attire in a dark interior",
  ],

  ["graduation-fpm02095.jpg", "Close graduation portrait indoors"],

  ["graduation-fpm02097.jpg", "Graduate portrait in a dark interior"],
].map(([file, alt]) => ({
  src: `/assets/${file}`,

  alt,
}))

export const visualAlbums: VisualAlbum[] = [
  {
    title: "Graduation",

    category: "Photography",

    description:
      "A portrait series celebrating a milestone and new beginnings.",

    cover: "/assets/graduation-fpm02024.jpg",

    photos: graduationPhotos,

    featured: true,
  },

  {
    title: "Community Visuals",

    category: "Graphic Design",

    year: "2025",

    description:
      "Digital storytelling and campaign visuals for community programs.",

    cover: "/assets/social-hero.jpg",

    photos: [
      {
        src: "/assets/social-hero.jpg",

        alt: "Social media campaign cover for a community program",
      },

      {
        src: "/assets/social-01.jpg",

        alt: "Community program visual story",
      },

      {
        src: "/assets/social-02.jpg",

        alt: "Community registration campaign visual",
      },

      {
        src: "/assets/social-03.jpg",

        alt: "Community activity campaign visual",
      },

      {
        src: "/assets/social-04.jpg",

        alt: "Community campaign social media design",
      },
    ],

    featured: true,
  },
]
