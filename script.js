document.querySelectorAll(".box").forEach((box) => {
  box.addEventListener("mouseenter", () => {
    const more = box.querySelector(".more");
    const details = box.querySelector(".details");
    gsap.to(more, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      marginTop: "8px",
      height: "20px",
      display: "flex",
      duration: 0.3,
    });
    gsap.to(details, {
      onStart: function () {
        details.classList.add("detail");
      },
    });
  });

  box.addEventListener("mouseleave", () => {
    const more = box.querySelector(".more");
    const details = box.querySelector(".details");
    gsap.to(more, {
      clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
      marginTop: "0px",
      height: "0px",
      display: "none",
    });

    gsap.to(details, {
      onStart: function () {
        details.classList.remove("detail");
      },
    });
  });
});
