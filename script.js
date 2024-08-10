let show = document.querySelector('.show');
let noneclas = document.querySelector('.none');
let plus = document.querySelector('.plus');
let mines = document.querySelector('.mines');
let pa = document.querySelector('.p');
plus.addEventListener('click', function() {
    show.classList.remove("show");
    show.classList.add("none")
    noneclas.classList.toggle("show")

});

mines.addEventListener('click', function() {
    noneclas.classList.remove("show");
    noneclas.classList.add("none");
    plus.classList.add("show")


});
plus.addEventListener('click', function() {
    pa.classList.remove("none")
});
mines.addEventListener('click', function() {
    pa.classList.add("none")

});






let show1 = document.querySelector('.show1');
let noneclas1 = document.querySelector('.none1');
let plus1 = document.querySelector('.plus1');
let mines1 = document.querySelector('.mines1');
let pa1 = document.querySelector('.p1');
plus1.addEventListener('click', function() {
    show1.classList.remove("show1");
    show1.classList.add("none1")
    noneclas1.classList.toggle("show1")

});

mines1.addEventListener('click', function() {
    noneclas1.classList.remove("show1");
    noneclas1.classList.add("none1");
    plus1.classList.add("show1")


});
plus1.addEventListener('click', function() {
    pa1.classList.remove("none1")
});
mines1.addEventListener('click', function() {
    pa1.classList.add("none1")

});


let show2 = document.querySelector('.show2');
let noneclas2 = document.querySelector('.none2');
let plus2 = document.querySelector('.plus2');
let mines2 = document.querySelector('.mines2');
let pa2 = document.querySelector('.p2');
plus2.addEventListener('click', function() {
    show2.classList.remove("show2");
    show2.classList.add("none2")
    noneclas2.classList.toggle("show2")

});

mines2.addEventListener('click', function() {
    noneclas2.classList.remove("show2");
    noneclas2.classList.add("none2");
    plus2.classList.add("show2")


});
plus2.addEventListener('click', function() {
    pa2.classList.remove("none2")
});
mines2.addEventListener('click', function() {
    pa2.classList.add("none2")

});



let show3 = document.querySelector('.show3');
let noneclas3 = document.querySelector('.none3');
let plus3 = document.querySelector('.plus3');
let mines3 = document.querySelector('.mines3');
let pa3 = document.querySelector('.p3');
plus3.addEventListener('click', function() {
    show3.classList.remove("show3");
    show3.classList.add("none3")
    noneclas3.classList.toggle("show3")

});

mines3.addEventListener('click', function() {
    noneclas3.classList.remove("show3");
    noneclas3.classList.add("none3");
    plus3.classList.add("show3")


});
plus3.addEventListener('click', function() {
    pa3.classList.remove("none3")
});
mines3.addEventListener('click', function() {
    pa3.classList.add("none3")

});