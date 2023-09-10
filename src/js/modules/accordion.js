export const accordion = () => {
  const accordionContent = document.querySelectorAll(".accordion__content");

  accordionContent.forEach((item, ind) => {
    const accordionHeader = item.querySelector(".accordion__header");
    const accordionDescription = item.querySelector(".accordion__description");

    accordionHeader.addEventListener("click", () => {
      item.classList.toggle("accordion__content--open");

      if (item.classList.contains("accordion__content--open")) {
        accordionDescription.style.height = `${accordionDescription.scrollHeight}px`;
      } else {
        accordionDescription.style.height = "0px";
      }

      accordionAutoClose(ind);
    });
  });

  const accordionAutoClose = (index) => {
    accordionContent.forEach((item, ind) => {
      const accordionDescription = item.querySelector(
        ".accordion__description",
      );

      if (index !== ind) {
        item.classList.remove("accordion__content--open");
        accordionDescription.style.height = "0px";
      }
    });
  };
};
