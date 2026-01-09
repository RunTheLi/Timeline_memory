// src/index.js
import "./style.css";
import renderTimeline from "./timeline.js";

const events = [
  {
    date: "18-01-2025",
    title: "The first day we talked 💕",
    note: "The beginning of our story.",
    description: "We chatted for hours and really connected that day.",
    img: "images/love.png"
  },
  {
    date: "14-02-2025",
    title: "Valentine day 💝",
    note: "Delicious chocolate and Valentine card.",
    description: "Our very first Valentine’s together — chocolates, a card, and a heart full of love.",
    img: "images/valen.jpg"
  },
  {
    date: "01-05-2025",
    title: "The first day we met 🍰",
    note: "Chiang Mai trip with a special person.",
    description: "That day in Chiang Mai felt magical, like the universe brought us together at the perfect time.",
    img: "images/first day.jpg"
  },
  {
    date: "02-05-2025",
    title: "We became Gf & Bf 🎉",
    note: "The beginning of our love story.",
    description: "The day our story truly began — from friends to lovers, a new chapter opened.",
    img: "images/pizza.jpg"
  },
  {
    date: "09-08-2025-",
    title: "Bangkok trip! ✈️",
    note: "So much fun and love.",
    description: "Exploring the city, sharing laughter, and making memories I’ll treasure forever.",
    img: "images/run.jpg"
  },
  {
    date: "23-10-2025-",
    title: "Bangkok trip Again YAY! ✈️",
    note: "Traveling is better when I’m with you.",
    description: "We spent our days exploring, laughing, and eating everything we could find. From Japanese food to sweet desserts,.",
    img: "images/bkk2.jpg"
  },
  {
    date: "31-12-2025-",
    title: "Memories made with my favorite person! ✈️",
    note: "A trip I’ll always remember.",
    description: "We welcomed the New Year by traveling to Bangkok and Hua Hin, sharing laughs, exploring new places, and enjoying every moment side by side..",
    img: "images/Huahin.jpg"
  },
  {
    date: "2025-XX-XX",
    title: "Where should we go next?",
    note: "To be continuous!",
    description: " CHIANG MAI AGAIN !!!",
    img: "images/next.png"
  }
];

renderTimeline(events, "timeline");
