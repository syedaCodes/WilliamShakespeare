const listOfVideos = [
    {
        title: 'Stage1',
        href: '#',
        thumbnail: 'assets/thumbnail-1.png',
    },
    {
        title: 'Stage1',
        href: '#',
        thumbnail: 'assets/thumbnail-1.png',
    },
    {
        title: 'Stage1',
        href: '#',
        thumbnail: 'assets/thumbnail-1.png',
    },
    {
        title: 'Stage1',
        href: '#',
        thumbnail: 'assets/thumbnail-1.png',
    },
    {
        title: 'Stage1',
        href: '#',
        thumbnail: 'assets/thumbnail-1.png',
    },
    {
        title: 'Stage1',
        href: '#',
        thumbnail: 'assets/thumbnail-1.png',
    }
];

//hover or mouseover a thumbnail should assign it one and align the rest after

const listOfThumbnails = document.querySelectorAll('.wrapper__container--box');
const classesOfTheThumbnails = ['one', 'two', 'three', 'four', 'five', 'six'];

// const removeClasses = () => {
//     // for(let i = 0; i < listOfThumbnails.length; i++){
//     //     console.log(i)
//     // }
//     listOfThumbnails.forEach(e => {
//         console.log(e.target.parentNode)
//     })
    
// }

// for(let j = 0; j < classesOfTheThumbnails.length; j++){
//     if(i === j){
//         i.classList.remove(j);
//     }
// }

listOfThumbnails?
    listOfThumbnails.forEach(e => {
        e.addEventListener('mouseover', (item) => {
            // removeClasses();
            console.log(item.target.parentNode);
            
            // item.classList.add('one');
        });
        console.log(e)
    }): null;