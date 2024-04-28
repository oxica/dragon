const counters = document.querySelectorAll('.counter');
const experience = document.querySelector(".experience-section");

window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > experience.offsetHeight + 150) {
    counters.forEach(counter => {
    counter.innerText = '0';

    const updateCounter = () => {
        const target = +counter.getAttribute('data-target');
        const c = +counter.innerText;

        const increment = target / 20;
        if (c < target) {
            counter.innerText = `${Math.ceil(c + increment)}`;
            setTimeout(updateCounter, 300);
        } else {
            counter.innerText = target;
        }
    }
    updateCounter();
})
  } 
}

// counters.forEach(counter => {
//     counter.innerText = '0';

//     const updateCounter = () => {
//         const target = +counter.getAttribute('data-target');
//         const c = +counter.innerText;

//         const increment = target / 200;
//         if (c < target) {
//             counter.innerText = `${Math.ceil(c + increment)}`;
//             setTimeout(updateCounter, 30);
//         } else {
//             counter.innerText = target;
//         }
//     }
//     updateCounter();
// })

