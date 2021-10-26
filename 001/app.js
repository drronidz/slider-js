import people from './data.js'


const container = document.querySelector('.slide-container')
const nextBtn = document.querySelector('.next-btn')
const prevBtn = document.querySelector('.prev-btn')

// Set slides
container.innerHTML = people.map((person, slideIndex) => {
    const {img, name, job, text} = person
    // Logic
    let position = 'slide__next'

    if(slideIndex === 0) {
        position = 'slide__active'
    }

    if(slideIndex === people.length - 1) {
        position = 'slide__last'
    }

    return ` <article class="slide ${position}">
          <img src="${img}"
               alt="${name}"
               class="img">
          <h4>${name}</h4>
          <p class="title">${job}</p>
          <p class="text">
           ${text}
          </p>
          <div class="quote-icon">
            <div class="fas fa-quote-right">
            </div>
          </div>
        </article>`
}).join('')