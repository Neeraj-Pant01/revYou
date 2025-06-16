export type slideTypes = {
    title:string,
    image:string,
    desc:string,
    ctaText:string,
    ctaLink:string
  }

// types/slider.ts or your data file
export const slides = [
  {
    image: "https://images.unsplash.com/photo-1646766360897-34c92cb6545a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neSUyMGdhZGdldHxlbnwwfHwwfHx8MA%3D%3D",
    title: "Discover the Future of Tech",
    desc: "Top gadgets and innovations, all in one place.",
    ctaText: "Shop Now",
    ctaLink: "/products",
  },
  {
    image: "/s3.jpeg",
    title: "Elevate Your Style",
    desc: "Exclusive drops, latest trends, and bold looks.",
    ctaText: "Explore Collection",
    ctaLink: "/fashion",
  },
  {
    image: "https://media.istockphoto.com/id/860688956/photo/running-female-with-mobile-phone-connected-to-a-smart-watch.webp?a=1&b=1&s=612x612&w=0&k=20&c=8710Peitv_OOb8bVfKt6aF8ubFGOsKCG8jqCrq81AzU=",
    title: "Gear That Moves You",
    desc: "Train smart with our premium fitness gear.",
    ctaText: "Start Training",
    ctaLink: "/fitness",
  },
];


