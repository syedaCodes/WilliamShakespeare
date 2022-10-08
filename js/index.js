//all footer links
const footerLinks = document.querySelectorAll('.footer__social--item');

//the scrolling line over footer links
const footerLine = document.querySelector('.footer__social--line');

const linkTypes = new Map([
    ['FB', 'translate(0px, 0px) scale(0.3, 1)'],
    ['TW', 'translate(52.994px, 0px) scale(0.3, 1)'],
    ['YT', 'translate(105.989px, 0px) scale(0.3, 1)'],
    ['default', 'translate(0px, 0px) scale(0.2, 1)']
])

footerLinks.forEach(e => {
    e.addEventListener('mouseover', (item) => {
        footerLine.style.transform = linkTypes.get(item.target.innerHTML);
        item.target.classList.add('highlight');
    })
    e.addEventListener('mouseout', (item) => {
        footerLine.style.transform = linkTypes.get('default');
        item.target.classList.remove('highlight');
    })
});

// Explore Paragraph
const boxLine = document.getElementById('box__line');
const exploreBtn = document.getElementById('explore');
const boxContainer = document.getElementById('box__container');
const containerLine = document.getElementById('box__container--line');
const box = document.getElementById('box');
const title = document.getElementById('title');

exploreBtn? exploreBtn.addEventListener('click', (e) => {
    e.preventDefault();
    //paragraph - first page
    boxLine.style.transform = 'scale(0, 1)';

    //para container - first page
    boxContainer.style.transform = 'translate(100%, 0)';

    //para scoll line -fi
    containerLine.style.transform = 'scale(0, 1)';

    setTimeout(()=>{
        boxContainer.style.display = 'none';
        box.style.display = 'none';
    }, 200);

    setTimeout(() => {
        //remove title
        boxLine.style.transform = 'scale(0, 1)';
        title.style.display = 'none';

        //add thumbnails
    }, 300)
}): null;