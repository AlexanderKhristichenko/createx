export const popup = () => {
  const bodyPage = document.body;
  const subscribeBtn = document.querySelector(".positions__subscribe-btn");
  const cvBtn = document.querySelector(".positions__cv-btn");
  const cardBtn = document.querySelectorAll(".positions__card-btn");
  const closeSubscribe = document.querySelector(".close-subscribe");
  const closeCv = document.querySelector(".close-cv");
  const backdrop = document.querySelector(".backdrop");

  const popupsOpen = (classItem) => {
    const popup = document.querySelector(`.popup__${classItem}`);
    bodyPage.classList.add("body-page--active");
    backdrop.classList.add("backdrop--active");
    popup.classList.add(`popup__${classItem}--active`);
  };

  const popupsClose = (classItem) => {
    const popup = document.querySelector(`.popup__${classItem}`);
    bodyPage.classList.remove("body-page--active");
    backdrop.classList.remove("backdrop--active");
    popup.classList.remove(`popup__${classItem}--active`);
  };

  cardBtn.forEach((item) => {
    item.addEventListener("click", () => popupsOpen("cv"));
  });

  subscribeBtn.addEventListener("click", () => popupsOpen("subscribe"));
  closeSubscribe.addEventListener("click", () => popupsClose("subscribe"));

  cvBtn.addEventListener("click", () => popupsOpen("cv"));
  closeCv.addEventListener("click", () => popupsClose("cv"));

  backdrop.addEventListener("click", () => {
    popupsClose("subscribe");
    popupsClose("cv");
  });
};
