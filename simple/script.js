const button = document.getElementById("greetBtn");
const greeting = document.getElementById("greeting");

button.addEventListener("click", () => {
    const names = ["Chinnathalli", "Alice", "Bob", "Charlie"];
    const randomName = names[Math.floor(Math.random() * names.length)];
    greeting.textContent = `Hello, ${randomName}! 👋`;
});
