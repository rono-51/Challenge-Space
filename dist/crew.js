"use strict";
//Elements Dom
const buttonMenu = document.querySelector('.icon-bar')
const navigation = document.querySelector('.navigation')

const crewName = document.querySelector('#name');
const crewBio = document.querySelector('#bio');
const crewImg = document.querySelector('#img');
const switchPoints = document.querySelectorAll('.switchPoints');
let crewIndex = 3; // crewIndex current switch
switchPoints.forEach(function (eachPoint, i) {
    eachPoint.addEventListener('click', function () {
        if (i != crewIndex) {
            fetch('../data.json')
                .then(res => res.json())
                .then(res => {
                crewName.innerText = res.crew[i].name;
                crewBio.textContent = res.crew[i].bio;
                crewImg.src = res.crew[i].images.png;
            });
            switchPoints[crewIndex].classList.remove('active');
            switchPoints[i].classList.add('active');
            crewIndex = i;
        }
    });
});

import { openNav } from "./navJs/expFunction.js";

openNav(buttonMenu, navigation);