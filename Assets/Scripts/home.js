document.getElementById("handleShowModal").addEventListener('click', handleShowModal)

function handleShowModal() {
  const menuLinks = document.querySelector('.menu__links').classList

  menuLinks.contains('hidden') ? menuLinks.replace('hidden', 'show') : menuLinks.replace('show', 'hidden')

}

window.addEventListener('scroll',function(){ 
  var header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY>0);  

});

const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        const content = entry.target.querySelector('.timeline-content');
        const dot = entry.target.querySelector('.timeline-dot');
        const timelineItem = entry.target;
        
        if(entry.isIntersecting){
            content.classList.add("timeline-show");
            dot.classList.add("animate-dot");
            timelineItem.classList.add("blue-bar");
        }
    })
});

timelineItems.forEach((item) => observer.observe(item));