"use strict";
//Elements with Dom

const buttonMenu = document.querySelector('.icon-bar')
const navigation = document.querySelector('.navigation')

const techName = document.querySelector('#name');
const techdescr = document.querySelector('#description');
const techImg = document.querySelector('#img');
const switchsCircles = document.querySelectorAll('.switchsCircles');
let techIndex = 0; //index current switchs lenght=3
switchsCircles.forEach(function (eachCircles, i) {
    eachCircles.addEventListener('click', function () {
        if (techIndex != i) {
            console.log(i);
            fetch('../data.json')
                .then(res => res.json())
                .then(res => {
                techName.textContent = res.technology[i].name;
                techdescr.textContent = res.technology[i].description;
                techImg.src = res.technology[i].images.portrait;
            });
            switchsCircles[techIndex].classList.remove('active');
            switchsCircles[i].classList.add('active');
            techIndex = i;
        }
    });
});

import { openNav } from "./navJs/expFunction.js";

openNav(buttonMenu, navigation);