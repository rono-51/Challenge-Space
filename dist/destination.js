"use strict";
//Elements Dom
const buttonMenu = document.querySelector('.icon-bar')
const navigation = document.querySelector('.navigation')

const switchsPlanets = document.querySelectorAll('.switchsPlanets');
const destImg = document.querySelector('#img');
const destPlanets = document.querySelector('#planet');
const destDescription = document.querySelector('#description');
const destDistance = document.querySelector('#distance');
const destTime = document.querySelector('#times');
let destIndex = 1;
switchsPlanets.forEach(function (eachPlanet, i) {
    eachPlanet.addEventListener('click', function () {
        if (destIndex != i) {
            fetch('../data.json')
                .then(res => res.json())
                .then(res => {
                console.log(res);
                destImg.src = res.destinations[i].images.png;
                destPlanets.textContent = res.destinations[i].name;
                destDescription.textContent = res.destinations[i].description;
                destTime.textContent = res.destinations[i].travel;
                destDistance.textContent = res.destinations[i].distance;
            });
            switchsPlanets[destIndex].classList.remove('active');
            switchsPlanets[i].classList.add('active');
            destIndex = i;
        }
    });
});

import { openNav } from "./navJs/expFunction.js";

openNav(buttonMenu, navigation);