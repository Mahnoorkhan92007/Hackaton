let numbers = document.getElementById('numbers');


let count = 0; 


function increaseNumbers() {
    count++;
    numbers.innerText = count;
    
}


const faqItems = document.querySelectorAll('.faq-item');
        
faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
//     item: Har item ek individual FAQ section hai (question aur answer ke saath).


    question.addEventListener('click', () => {
        
        faqItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });
        
        item.classList.toggle('active');
    });
});
















