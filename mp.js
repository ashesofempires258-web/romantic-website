function hideAll() {
  document.querySelectorAll(".screen").forEach(div => {
    div.classList.remove("active");
  });
}

function goYes() {
  hideAll();
  document.getElementById("screen5").classList.add("active");
}

function goNo1() {
  hideAll();
  document.getElementById("screen2").classList.add("active");
}

function goNo2() {
  hideAll();
  document.getElementById("screen3").classList.add("active");
}

function goNo3() {
  hideAll();
  document.getElementById("screen4").classList.add("active");
}

function openNote() {
  hideAll();
  document.getElementById("screen6").classList.add("active");
}
document.addEventListener("DOMContentLoaded", () => {
  const trickyBtn = document.querySelector(".tricky-btn");

  if (trickyBtn) {
    trickyBtn.addEventListener("mouseenter", () => {
      // Random X, Y position banate hain
      const x = Math.floor(Math.random() * 200) - 100; 
      const y = Math.floor(Math.random() * 200) - 100;

      trickyBtn.style.transform = `translate(${x}px, ${y}px)`;
    });
  }
});
document.addEventListener("DOMContentLoaded", () => {
  const noBtn = document.getElementById("noBtn");

  if (noBtn) {
    noBtn.addEventListener("mouseenter", () => {
      // Random position banate hain (screen ke andar hi)
      const x = Math.floor(Math.random() * (window.innerWidth - 150));
      const y = Math.floor(Math.random() * (window.innerHeight - 150));

      noBtn.style.position = "absolute";  // abhi se absolute karenge
      noBtn.style.left = `${x}px`;
      noBtn.style.top = `${y}px`;
    });
  }
});
function openNote() {
  document.getElementById("noteBox").style.display = "flex";
}

function closeNote() {
  document.getElementById("noteBox").style.display = "none";
}
function openNote() {
  const noteBox = document.getElementById("noteBox");
  const envelope = noteBox.querySelector(".envelope");
  noteBox.style.display = "flex";

  // Delay for smooth animation
  setTimeout(() => {
    envelope.classList.add("open");
  }, 200);
}

function closeNote() {
  const noteBox = document.getElementById("noteBox");
  const envelope = noteBox.querySelector(".envelope");

  envelope.classList.remove("open");
  setTimeout(() => {
    noteBox.style.display = "none";
  }, 600); // wait for animation
}
