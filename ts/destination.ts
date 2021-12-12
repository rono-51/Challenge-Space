//Elements Dom
const switchsPlanets = document.querySelectorAll('.switchsPlanets');
const destImg = document.querySelector('#img') as HTMLImageElement;
const destPlanets = document.querySelector('#planet') as HTMLElement;
const destDescription = document.querySelector('#description') as HTMLParagraphElement;
const destDistance = document.querySelector('#distance') as HTMLElement;
const destTime = document.querySelector('#times') as HTMLElement;

let destIndex:number = 1;

switchsPlanets.forEach( function (eachPlanet:any, i:number) {
    eachPlanet.addEventListener('click', function () {
        if (destIndex != i) {
            fetch('../data.json')
                .then(res => res.json())
                .then(res => {
                    console.log(res)
                    destImg.src = res.destinations[i].images.png;
                    destPlanets.textContent = res.destinations[i].name;
                    destDescription.textContent = res.destinations[i].description;
                    destTime.textContent = res.destinations[i].travel;
                    destDistance.textContent = res.destinations[i].distance;
                })
            switchsPlanets[destIndex].classList.remove('active');
            switchsPlanets[i].classList.add('active');
            destIndex = i;
        }
    });
});