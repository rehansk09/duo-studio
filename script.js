function init() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

init();

let cursor = document.querySelector("#cursor");
let main = document.querySelector("#main");
let videos = document.querySelectorAll("video");

main.addEventListener("mousemove", function (dets) {
  gsap.to(cursor, {
    x: dets.clientX,
    y: dets.clientY,
    duration: 0.3,
    ease: "power2.out",
  });
});

videos.forEach(function (video) {
  video.addEventListener("mouseenter", function () {
    cursor.textContent = "sound";

    gsap.to(cursor, {
      width: 80,
      height: 25,
      borderRadius: "6px",
      duration: 0.2,
      textAlign: "center",
    });
  });

  video.addEventListener("mouseleave", function () {
    cursor.textContent = "";

    gsap.to(cursor, {
      width: 20,
      height: 20,
      borderRadius: "50%",
      duration: 0.2,
    });
  });
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: "#main",
    start: "top 27%",
    end: "top 0",
    scrub: 3,
  },
});

tl.to(
  ".page1 h1",
  {
    x: -90,
    duration: 1,
  },
  "anim",
);

tl.to(
  ".page1 h2",
  {
    x: 100,
    duration: 1,
  },
  "anim",
);

tl.to(
  ".page1 video",
  {
    width: "90%",
  },
  "anim",
);

let tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".page1 h1",
    scroller: "#main",
    start: "top -115%",
    end: "top -120",
    scrub: 3,
  },
});

tl2.to("#main", {
  backgroundColor: "white",
});
