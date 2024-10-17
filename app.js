gsap.from(".logo1", { // Animando a logo "Squid"
    x: -600, // A posição começa no `x: -600` e vai andar até a posição até onde deveria ficar no CSS
    opacity: 0, // Vai começar invisível e ficar visível quando chegar no final
    duration: 1.2 // Demora 1.2s para fazer toda a animação
});

gsap.from(".logo2", { // Animando a logo Game
    x: 600, // A posição começa no `x: -600` e vai andar até a posição até onde deveria ficar no CSS
    opacity: 0, // Vai começar invisível e ficar visível quando chegar no final
    duration: 1.2 // Demora 1.2s para fazer toda a animação
});

var t1 = gsap.timeline();

t1.from("footer", {
    y: 70,
    opacity: 0,
    duration: 1,
    delay: 1.1 //Delay, auto-explicativo, mas o legal é que ele só aparece depois de um tempinho
    // Isso acontece pq o t1 é uma função, então até que o gsap.from(logo1 e logo2) seja executado, t1 vai ficar na boa dele.
});

t1.from(".hero-img", {
    x: -900,
    duration: 1.2,
    opacity: 0,
});

// Para pegar dois seletores tipo esse código abaixo, você precisa colocar `[]`
t1.from([".top-info img", ".bottom-info p"], {
    scale: 0,
    opacity: 0
});

t1.from(".top-info span", {
    x: 70,
    opacity: 0,
    duration: 1
});


