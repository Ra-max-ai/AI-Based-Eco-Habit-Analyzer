document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("analyzeBtn").addEventListener("click", analyze);
});

function analyze() {
  const shower = document.getElementById("shower").value;
  const transport = document.getElementById("transport").value;
  const food = document.getElementById("food").value;
  const electricity = document.getElementById("electricity").value;
  const plastic = document.getElementById("plastic").value;
  const shopping = document.getElementById("shopping").value;

  if (!shower || !transport || !food || !electricity || !plastic || !shopping) {
    alert("Please select all fields");
    return;
  }

  let water = "Low";
  let energy = "Low";
  let waste = "Low";
  let contributors = [];

  if (shower === "medium") water = "Medium";
  if (shower === "long") {
    water = "High";
    contributors.push("Long showers");
  }

  if (transport === "public") energy = "Medium";
  if (transport === "car") {
    energy = "High";
    contributors.push("Private vehicle usage");
  }

  if (electricity === "high") contributors.push("High electricity usage");
  if (food === "nonveg") contributors.push("Non-vegetarian diet");

  if (plastic === "medium") waste = "Medium";
  if (plastic === "high") {
    waste = "High";
    contributors.push("High plastic usage");
  }

  if (shopping === "high") contributors.push("Frequent shopping");

  document.getElementById("impactOutput").innerHTML = `
    <p><b>Water Impact:</b> ${water}</p>
    <p><b>Energy Impact:</b> ${energy}</p>
    <p><b>Waste Impact:</b> ${waste}</p>
    <p><b>Main Contributors:</b> ${contributors.join(", ")}</p>
  `;

  const challenges = [];

  if (water !== "Low") challenges.push("Reduce shower time by 5 minutes");
  if (energy === "High") challenges.push("Turn off unused appliances");
  if (transport === "car") challenges.push("Use public transport twice this week");
  if (plastic === "high") challenges.push("Avoid single-use plastics");
  if (shopping === "high") challenges.push("Avoid unnecessary shopping");
  if (food === "nonveg") challenges.push("Try one vegetarian day");

  const list = document.getElementById("challengeOutput");
  list.innerHTML = "";

  challenges.forEach((c, i) => {
    const li = document.createElement("li");
    li.textContent = `Day ${i + 1}: ${c}`;
    list.appendChild(li);
  });

  document.getElementById("impactCard").classList.remove("hidden");
  document.getElementById("challengeCard").classList.remove("hidden");
}