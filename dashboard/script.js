import { App } from "./components/App.js";

let locationData = [
  {
    title: "French",
    subtitle: "35 lessons",
    image: "images/tower1.svg",
    color: "var(--color-blue)",
    cornerColor: "#006ED3",
    cornerOpacity: "0.2",
  },
  {
    title: "Portugese",
    subtitle: "30 lessons",
    image: "images/train.svg",
    color: "#FF993A",
    cornerColor: "#FF7E07",
    cornerOpacity: "0.4",
  },
  {
    title: "Italian",
    subtitle: "20 lessons",
    image: "images/tower2.svg",
    color: "#8AC53E",
    cornerColor: "#006838",
    cornerOpacity: "0.1",
  },
  {
    title: "German",
    subtitle: "40 lessons",
    image: "images/building.svg",
    color: "#FFD143",
    cornerColor: "#FFC000",
    cornerOpacity: "0.5",
  },
];

let planningData = [
  {
    title: "Reading - Beginner Topic 1",
    hours: "8:00 AM - 10:00 AM",
    image: "images/planning1.svg",
  },
  {
    title: "Reading - Beginner Topic 1",
    hours: "01:00 PM - 02:00 PM",
    image: "images/planning2.svg",
  },
  {
    title: "Listening - Intermediate Topic 1",
    hours: "03:00 PM - 04:00 PM",
    image: "images/planning3.svg",
  },
  {
    title: "Speaking - Advanced Topic 1",
    hours: "07:00 PM - 08:00 PM",
    image: "images/planning4.svg",
  },
  {
    title: "Speaking - Beginner Topic 1",
    hours: "8:00 AM - 12:00 PM",
    image: "images/planning5.svg",
  },
  {
    title: "Listening - Beginner Topic 1",
    hours: "8:00 AM - 12:00 PM",
    image: "images/planning6.svg",
  },
  {
    title: "Grammar - Intermediate Topic 2",
    hours: "8:00 AM - 12:00 PM",
    image: "images/planning7.svg",
  },
  {
    title: "Reading - Advanced Topic 1",
    hours: "8:00 AM - 12:00 PM",
    image: "images/planning8.svg",
  },
];

let statsData = [
  { title: "Courses Completed", count: "02" },
  { title: "Total Points Gained", count: "250" },
  { title: "Courses In Progress", count: "03" },
  { title: "Tasks Finished", count: "05" },
];

let weeklyData = [80, 60, 50, 100, 55, 85, 80];

let app = document.querySelector("#app");

app.innerHTML = App({ locationData, planningData, statsData, weeklyData });
