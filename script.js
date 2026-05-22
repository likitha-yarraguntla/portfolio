const texts = [
    "AI Developer",
    "Web Designer",
    "Frontend Learner"
];

let i = 0;

setInterval(() => {
    document.getElementById("typing").innerText = texts[i];

    i++;
    if (i === texts.length) i = 0;

}, 2000);


// FADE ON SCROLL
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
});

elements.forEach(el => observer.observe(el));