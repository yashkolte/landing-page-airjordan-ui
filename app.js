let tl = gsap.timeline();

tl.from("#loaderr img", { duration: 1, scale: 0, opacity: 0 });
tl.from("#loaderr ", { duration: 1, y: "100%", delay: 0.5 });
tl.from("#bg-cut", { duration: 0.5, x: "50%", opacity: 0 });
tl.from("#header", { duration: 0.5, y: "-100%", delay: 0.5 });
tl.from(".bg-text", { duration: 0.8, x: "50%", opacity: 0, delay: 0.5 });
tl.from("#right img", { duration: 0.5, rotate: 130, delay: 0.3, opacity: 0 });
tl.from(".center h2", { duration: 0.3, x: "-10%", opacity: 0, delay: 0.1 });
tl.from(".center h1", { duration: 0.3, x: "-10%", opacity: 0, delay: -0.1 });
tl.from(".center .star", { duration: 0.3, x: "-10%", opacity: 0, delay: 0.1 });
tl.from(".center p", { duration: 0.3, x: "-10%", opacity: 0, delay: 0.1 });
tl.from(".center .btn", { duration: 0.3, x: "-10%", opacity: 0, delay: 0.1 });
tl.from("#footer", { duration: 1, y: "30%", opacity: 0, delay: 0.5 });
