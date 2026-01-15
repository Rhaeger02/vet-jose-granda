import { useEffect } from "react";

const useWhyUsAnimation = () => {
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    };

    // Cards observer
    const cardObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target;
          const index = Array.from(card.parentNode.children).indexOf(card);

          setTimeout(() => {
            card.classList.add("visible");
          }, index * 200);
        }
      });
    }, observerOptions);

    const cards = document.querySelectorAll(".feature");
    cards.forEach((card) => cardObserver.observe(card));

    // Title observer
    const titleObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("title-visible");
          }
        });
      },
      { threshold: 0.3 }
    );

    const title = document.querySelector("#nosotros h2");
    if (title) titleObserver.observe(title);

    return () => {
      cards.forEach((card) => cardObserver.unobserve(card));
      if (title) titleObserver.unobserve(title);
    };
  }, []);
};

export default useWhyUsAnimation;
