const container = document.querySelector(".container");

const roles = ["Front End Developer", "React Developer", "UI/UX Designer"];

let rolesIndex = 0;

let charIndex = 0;

let isDeleting = false;

function updateText() {
  const currentRole = roles[rolesIndex];
  const article = /^[aeiouAEIOU]/.test(currentRole) ? "an" : "a";
  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }
  container.innerHTML = `<h1>I am ${article} ${currentRole.slice(0,charIndex)}<span class="cursor">|</span></h1>`;
  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => (isDeleting = true), 1000);
  }
  if (isDeleting && charIndex === 0) {
    isDeleting = false;
    rolesIndex++;
    if (rolesIndex === roles.length) {
      rolesIndex = 0;
    }
  }

  const speed = isDeleting ? 100 : 150; 
  setTimeout(updateText, speed);
}

updateText();
