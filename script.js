
// ===== 1. Basic Setup =====
console.log("Welcome to the Community Portal");
window.onload = () => alert("Page is fully loaded");

// ===== 2. Data Types and Operators =====
const eventName = "Music Fest";
const eventDate = "2025-06-10";
let availableSeats = 50;
console.log(`Event: ${eventName} on ${eventDate} - Seats: ${availableSeats}`);
availableSeats--;

// ===== 3. Conditionals, Loops, Error Handling =====
const events = [
  { name: "Yoga", date: "2025-06-01", seats: 10 },
  { name: "Tech Talk", date: "2023-05-01", seats: 0 },
  { name: "Music Fest", date: "2025-06-10", seats: 5 }
];

events.forEach(evt => {
  if (new Date(evt.date) > new Date() && evt.seats > 0) {
    console.log(`Upcoming: ${evt.name}`);
  } else {
    console.log(`Not showing: ${evt.name}`);
  }
});

function tryRegister(event) {
  try {
    if (event.seats <= 0) throw "No seats left!";
    event.seats--;
    console.log(`Registered for ${event.name}`);
  } catch (err) {
    console.error("Registration failed:", err);
  }
}

// ===== 4. Functions and Closures =====
function addEvent(name, date, seats) {
  events.push({ name, date, seats });
}

function registerUser(name, event) {
  tryRegister(event);
}

function filterEventsByCategory(category) {
  return events.filter(e => e.name.toLowerCase().includes(category.toLowerCase()));
}

function registrationTracker() {
  let total = 0;
  return function () {
    total++;
    console.log("Total registrations:", total);
  };
}

const trackReg = registrationTracker();
trackReg(); trackReg();

// ===== 5. Objects and Prototypes =====
function Event(name, date, seats) {
  this.name = name;
  this.date = date;
  this.seats = seats;
}

Event.prototype.checkAvailability = function () {
  return this.seats > 0;
};

const newEvent = new Event("Coding Bootcamp", "2025-07-15", 20);
console.log(Object.entries(newEvent));

// ===== 6. Arrays and Methods =====
events.push({ name: "Art Workshop", date: "2025-08-01", seats: 15 });

const musicEvents = events.filter(e => e.name.includes("Music"));
const displayCards = events.map(e => `Workshop on ${e.name}`);
console.log(displayCards);

// ===== 7. DOM Manipulation =====
function showEvents() {
  const container = document.querySelector("#eventList");
  events.forEach(evt => {
    const card = document.createElement("div");
    card.className = "eventCard";
    card.textContent = `${evt.name} on ${evt.date}`;
    container.appendChild(card);
  });
}

// ===== 8. Event Handling =====
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll(".registerBtn").forEach(btn => {
    btn.onclick = () => alert("Registered!");
  });

  document.querySelector("#categoryFilter").onchange = (e) => {
    console.log("Filtering by:", e.target.value);
  };

  document.querySelector("#search").onkeydown = (e) => {
    console.log("Searching:", e.key);
  };
});

// ===== 9. Async JS with Promises and Async/Await =====
async function fetchEvents() {
  document.querySelector("#loading").style.display = "block";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    console.log("Events fetched:", data.slice(0, 3));
  } catch (err) {
    console.error("Failed to fetch:", err);
  } finally {
    document.querySelector("#loading").style.display = "none";
  }
}

// ===== 10. ES6+ Features =====
const showDetails = ({ name, date }) => console.log(`${name} happening on ${date}`);
const clonedEvents = [...events];

// ===== 11. Forms =====
document.querySelector("#regForm")?.addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.target;
  const name = form.elements["name"].value;
  const email = form.elements["email"].value;
  if (!name || !email) {
    alert("Please fill in all fields.");
  } else {
    alert(`Registered ${name} (${email})`);
  }
});

// ===== 12. AJAX & Fetch =====
function submitData() {
  const user = { name: "Alex", event: "Music Fest" };
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-type": "application/json; charset=UTF-8" }
  })
    .then(res => res.json())
    .then(data => {
      console.log("Submission success", data);
      setTimeout(() => alert("Response saved"), 1000);
    })
    .catch(err => console.error("Submission error", err));
}

// ===== 13. Debugging =====
// Use browser dev tools to inspect console logs and breakpoints

// ===== 14. jQuery Integration =====
$(document).ready(function () {
  $('#registerBtn').click(() => alert("Registered with jQuery"));
  $('.eventCard').fadeIn();
});

// Benefit of frameworks: Components, reactivity, better scalability (React, Vue)
