const blogContainer = document.querySelector('.post-you-may-like-section')



const postYouMayLike = [
    {
        img: './images/basket-ball-nerd.jpg',
        date: 'aug 2, 2022',
        headerText: 'the story',
        bodyText: "My name is LazyCode i'm eighteen years old, i'm a web developer, i had a preety rough childhood <span> Read more...</span>"
    },
    {
        img: './images/basket-ball-nerd.jpg',
        date: 'aug 2, 2022',
        headerText: 'the story',
        bodyText: "My name is LazyCode i'm eighteen years old, i'm a web developer, i had a preety rough childhood <span> Read more...</span>"
    },
    {
        img: './images/basket-ball-nerd.jpg',
        date: 'aug 2, 2022',
        headerText: 'the story',
        bodyText: "My name is LazyCode i'm eighteen years old, i'm a web developer, i had a preety rough childhood <span> Read more...</span>"
    },
    {
        img: './images/basket-ball-nerd.jpg',
        date: 'aug 2, 2022',
        headerText: 'the story',
        bodyText: "My name is LazyCode i'm eighteen years old, i'm a web developer, i had a preety rough childhood <span> Read more...</span>"
    },
    {
        img: './images/basket-ball-nerd.jpg',
        date: 'aug 2, 2022',
        headerText: 'the story',
        bodyText: "My name is LazyCode i'm eighteen years old, i'm a web developer, i had a preety rough childhood <span> Read more...</span>"
    },
       {
        img: './images/basket-ball-nerd.jpg',
        date: 'aug 2, 2022',
        headerText: 'the story',
        bodyText: "My name is LazyCode i'm eighteen years old, i'm a web developer, i had a preety rough childhood <span> Read more...</span>"
    },
    {
        img: './images/basket-ball-nerd.jpg',
        date: 'aug 2, 2022',
        headerText: 'the story',
        bodyText: "My name is LazyCode i'm eighteen years old, i'm a web developer, i had a preety rough childhood <span> Read more...</span>"
    },
    {
        img: './images/basket-ball-nerd.jpg',
        date: 'aug 2, 2022',
        headerText: 'the story',
        bodyText: "My name is LazyCode i'm eighteen years old, i'm a web developer, i had a preety rough childhood <span> Read more...</span>"
    },
]


const loadPOstYouMaylike = (postYouMayLike) => {
    postYouMayLike.forEach(e =>{
        let blog = `
        <div class="box">
            <div class="img-container"></div>
            <div class="date">${e.date}</div>
            <div class="header-text">${e.headerText}</div>
            <div class="body-text">${e.bodyText} </div>
        </div>`
        blogContainer.insertAdjacentHTML('beforeend', blog)
    })
}

loadPOstYouMaylike(postYouMayLike)