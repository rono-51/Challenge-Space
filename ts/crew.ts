//Elements Dom
const crewName = document.querySelector('#name') as HTMLElement;
const crewBio = document.querySelector('#bio') as HTMLParagraphElement;
const crewImg = document.querySelector('#img') as HTMLImageElement;

const switchPoints = document.querySelectorAll('.switchPoints');
let crewIndex:number = 3; // crewIndex current switch

switchPoints.forEach(function (eachPoint:any, i:number) { 
    eachPoint.addEventListener('click', function() {
        if (i != crewIndex) {
            fetch('../data.json')
                .then(res => res.json())
                .then(res => {
                    crewName.innerText = res.crew[i].name;
                    crewBio.textContent = res.crew[i].bio;
                    crewImg.src = res.crew[i].images.png  
                })
            switchPoints[crewIndex].classList.remove('active');
            switchPoints[i].classList.add('active');
            crewIndex = i;
        }
    });
});

