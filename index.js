const anim1 = document.querySelectorAll(".anim1");
const anim2 = document.querySelectorAll(".anim2");
const anim3 = document.querySelectorAll(".anim3");
const anim4 = document.querySelectorAll(".anim4");
const anim5 = document.querySelectorAll(".anim5");



const dur = .5

gsap.from(anim1, {
    x: '-100%',
    duration: dur
});


gsap.from(anim2, {
    x: '150%',
    duration: dur,
    delay: dur
});

gsap.from(anim3, {
    y: '100%',
    duration: dur,
    opacity: 0,
    delay: dur * 2
});

gsap.from(anim4, {
    y: "10%",
    duration: dur,
    opacity: 0,
    stagger: .3,
    delay: dur * 3
});

gsap.from(anim5, {
    x: "100%",
    opacity: 0,
    duration: dur,
    stagger: .3,
    delay: dur * 4
})