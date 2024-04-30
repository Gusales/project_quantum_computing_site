const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) =>{

        if(entry.isIntersecting){
            entry.target.classList.add("timeline-show")
            console.log(entry.target.classList)
        }
    })
})

const hiddenTimelineElements = document.querySelectorAll('.timeline-hidden')

hiddenTimelineElements.forEach((ele) => observer.observe(ele))