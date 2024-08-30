function useFlickity(element) {
  if (element) {
    const exploreCate = element?.querySelector(".explore__categroup");
    const prevButton = element?.querySelector(
      ".textbox__btngroup-btncontrol.btncontrol.--arrow-left"
    );
    const nextButton = element?.querySelector(
      ".textbox__btngroup-btncontrol.btncontrol.--arrow-right"
    );
    const progressBar = element?.querySelector(".explore__progressbar span");
    const flktyDots = element?.querySelector(".flickity-page-dots");
    if (exploreCate) {
      const flkty = new Flickity(exploreCate, {
        // options
        cellAlign: "left",
        contain: true,
        pageDots: false,
        prevNextButtons: false,
      });
      prevButton?.addEventListener("click", () => {
        flkty.previous(true);
      });
      nextButton?.addEventListener("click", () => {
        flkty.next(true);
      });
      flkty.on("scroll", (progress) => {
        progress = Math.max(0, Math.min(1, progress));
        progressBar.style.width = progress * 100 + "%";
      });
      if (flktyDots) {
        prevButton?.insertAdjacentElement("afterend", flktyDots);
      }
      return flkty;
    }
  }
}
export default useFlickity;
