document.addEventListener("DOMContentLoaded", () => {
  /* Simple gallery lightbox */
  const images = document.querySelectorAll(".gallery img");
  images.forEach((img) =>
    img.addEventListener("click", () => {
      const overlay = document.createElement("div");
      overlay.id = "overlay";
      const fullImg = document.createElement("img");
      fullImg.src = img.src;
      fullImg.alt = img.alt;
      overlay.appendChild(fullImg);
      document.body.appendChild(overlay);
      overlay.addEventListener("click", () => overlay.remove());
    })
  );

  /* Contact form handler (client‑side only) */
  const form = document.getElementById("contact-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Thanks for reaching out! We will contact you soon.");
      form.reset();
    });
  }
});
function setLanguage(lang) {
  document.querySelectorAll('[data-en]').forEach(el => {

    el.textContent =
     el.getAttribute(`data-${lang}`);
  });
}