const hero = document.querySelector(".hero");
const slider = document.querySelector(".slider");



const tl = new TimelineMax();

tl.fromTo(hero, 1, {height: "0%"}, {height: "80%"}).fromTo(hero,1.2, {width:"100%"}, {width:"80%"})
.fromTo(slider,1.2, {x: "-100%"}, {x:"0%"},"-=1.2")


let getAnimation = document.querySelector('animation');
function slideAnimation (){
    anime({

        targets: '.animation',
        translateX: 900,
        direction: 'alternate',
        loop: true,
        easing: 'steps(10)'

    });
};
new fullpage("#full-page", {
    autoScrolling: true,
    navigation: true,
    
});


