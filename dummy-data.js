const allEvents = [
  {
    id: 1,
    date: "MON, FEB 21 @10:30 AM CST",
    title: "Mond, Body, Spirit",
    description: "Chat over caffeine",
    img: "/images/spirit.jpg",
    groupId: 1,
    hostId: 1,
  },
  {
    id: 3,
    date: "SUN, FEB 20 @2:00 CST",
    title: "Crypto Club",
    description: "Bit of that, a bit of coin",
    img: "/images/bitcoin.jpg",
    groupId: 5,
    hostId: 2,
  },
  {
    id: 4,
    date: "SUN, FEB 20 @3:30 CST",
    title: "Chicago Tech",
    description: "Rendezvous with the Nerds",
    img: "/images/tech.jpg",
    groupId: 5,
    hostId: 3,
  },
  {
    id: 5,
    date: "SUN, FEB 20 @3:00 CST",
    title: "Write It Up!",
    description: "Get Down and Write it Up",
    img: "/images/writing.jpg",
    groupId: 3,
    hostId: 4,
  },
  {
    id: 6,
    date: "SAT, FEB 19 @3:00 CST",
    title: "Day Care Rave",
    description: "Kiddies let Loose",
    img: "/images/kindergarten.jpg",
    groupId: 4,
    hostId: 5,
  },
  {
    id: 7,
    date: "MON, FEB 21 @2:30 CST",
    title: "Bulgarian Beef Out",
    description: "Sample Meats of the World",
    img: "/images/spirit.jpg",
    groupId: 6,
    hostId: 6,
  },
];

const users = [
  {
    id: 1,
    firstName: "Ashley",
    lastName: "Mueller",
  },
  {
    id: 2,
    firstName: "Caleb",
    lastName: "Olyewo",
  },
  {
    id: 3,
    firstName: "Mekhai",
    lastName: "Morris",
  },
  {
    id: 4,
    firstName: "Jared",
    lastName: "Cliff",
  },
  {
    id: 5,
    firstName: "Monique",
    lastName: "Sengupta",
  },
  {
    id: 6,
    firstName: "Daria",
    lastName: "Snell",
  },
];

const allGroups = [
  {
    id: 1,
    date: "TUES, FEB 22 @10:00 CST",
    title: "Brunch Blues",
    description: "Drown your Sorrows",
    img: "/images/brunch.jpg",
  },
  {
    id: 2,
    date: "TUES, FEB 22 @12:00 CST",
    title: "Madcap Capers",
    description: "Murdery Mystery and Tapas",
    img: "/images/capers.jpg",
  },
  {
    id: 3,
    date: "WED, FEB 23 @10:00 CST",
    title: "Karate Kids",
    description: "Drop the Kids off for Kicks",
    img: "/images/karate.jpg",
  },
  {
    id: 4,
    date: "WED, FEB 23 @7:00 CST",
    title: "Dinner with Andre",
    description: "Deep Thoughts over Deep Dish",
    img: "/images/andre.jpg",
  },
  {
    id: 5,
    date: "SUN, FEB 20 @3:30 CST",
    title: "Chicago Tech",
    description: "Rendezvous with the Nerds",
    img: "/images/tech.jpg",
  },
];

export function getAllUsers() {
  return users;
}

export function getUserById(id) {
  const users = getAllUsers();
  const user = users.filter((user) => user.id == id);
  return user;
}

export function getAllGroups() {
  return allGroups;
}

export function getGroupById(id) {
  const groups = getAllGroups();
  const selectedGroup = groups.filter((group) => group.id == id);
  return selectedGroup;
}

export function getAllEvents() {
  return allEvents;
}

export function getEventById(id) {
  const allEvents = getAllEvents();
  const selectedEvent = allEvents.filter((event) => event.id == id);
  console.log("get event by id function: ", selectedEvent);
  return selectedEvent;
}
