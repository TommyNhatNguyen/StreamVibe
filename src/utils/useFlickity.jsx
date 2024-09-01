function useFlickity(element) {
  if (element) {
    const exploreGroup =
      element?.querySelector(".explore__moviesgroup") ||
      element?.querySelector(".explore__categroup");
    const prevButton = element?.querySelector(
      ".textbox__btngroup-btncontrol.--btncontrol.--arrow-left"
    );
    const nextButton = element?.querySelector(
      ".textbox__btngroup-btncontrol.--btncontrol.--arrow-right"
    );
    const progressBar = element?.querySelector(".progressbar span");
    if (exploreGroup) {
      const flkty = new Flickity(exploreGroup, {
        // options
        contain: true,
        cellAlign: "left",
        pageDots: false,
        prevNextButtons: false,
        freeScroll: true,
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

      return flkty;
    }
  }
}
export default useFlickity;
