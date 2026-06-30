console.log("Access Studio Loaded");

window.addEventListener("scroll", function () {

    const navbar =
        document.querySelector(".access-navbar");

    navbar.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );

});

const photos = document.querySelectorAll(".photo");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: .2
});

photos.forEach(photo => {

    observer.observe(photo);

});




const whyCards = document.querySelectorAll(".why-card");

const whyObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: .2
});

whyCards.forEach(card => {

    whyObserver.observe(card);

});



const featureCards = document.querySelectorAll(".feature-photo-card");

const featureObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: .2
});

featureCards.forEach(card => {

    featureObserver.observe(card);

});



// Accordion

    const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item=>{

const question=item.querySelector(".faq-question");

question.addEventListener("click",()=>{

        faqItems.forEach(other => {

            if (other !== item) {

                other.classList.remove("active");

                other.querySelector(".faq-answer").style.maxHeight = null;

            }

        });

    item.classList.toggle("active");

    const answer=item.querySelector(".faq-answer");

    if(item.classList.contains("active")){

        answer.style.maxHeight = answer.scrollHeight + "px";

}else{

        answer.style.maxHeight = null;

}

});

});

// Scroll Animation

const faqObserver=new IntersectionObserver((entries)=>{

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

},{
        threshold:.2
});

faqItems.forEach(item=>{

        faqObserver.observe(item);

});




