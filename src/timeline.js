

//timeline.js
export default function renderTimeline(events, containerId = "timeline") {
  const timeline = document.getElementById(containerId);
  if (!timeline) return;

  events.forEach((event, index) => {
    const side = index % 2 === 0 ? "left" : "right";
    const div = document.createElement("div");
    div.className = `event ${side}`;

    div.innerHTML = `
      <div class="event-content">
        <h3>${event.title}</h3>
        <p><strong>${event.date}</strong></p>
        <img src="${event.img}" alt="${event.title}">
        <h4>${event.note}</h4>
        <p>${event.description}</p>
      </div>
    `;

    timeline.appendChild(div);
  });
}