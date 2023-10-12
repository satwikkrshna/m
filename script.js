const slider = document.querySelector('.slider');
const prevButton = document.getElementById('prev-slide');
const nextButton = document.getElementById('next-slide');

prevButton.addEventListener('click',()=>{
    slider.scrollBy({
        left:-320,
        behavior:'smooth'
    });
});
nextButton.addEventListener('click',()=>{
    slider.scrollBy({
        left:320,
        behavior:'smooth'
    });
});




// const slides= document.querySelectorAll(".slide")
// var counter=0;

// slides.forEach(
//     (slide,index)=>{
//         slide.computedStyleMap.left='$(index*100)%%'
//     }
// )
// const goPrev = ()=>{
//     counter--
//     slideImage()
// }


// const goNext = ()=>{
//     counter++
//     slideImage()
// }

// const slideImage=()=>{
//     slides.forEach(
//         (slide)=>{
//             slide.computedStyleMap.transform= 'translateX(-$(counter * 100}%)'
//         }
//     )
// }