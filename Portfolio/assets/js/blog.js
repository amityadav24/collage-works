"use strict"
let container = document.querySelector('[data-container]')
let tamplate = document.querySelector('[data-tamplate]')

const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "vinit17") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                }
            }
        }
    }
`;
async function gql(query, variables = {}) {
    const data = await fetch('https://api.hashnode.com/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query,
            variables
        })
    });
    return data;
}

gql(GET_USER_ARTICLES, { page: 0 })
    .then(result => result.json())
    .then(data => {
        let articles = data.data.user.publication.posts
        articles.map(a => {
            const card = tamplate.content.cloneNode(true).children[0]
            const url = card.querySelector('[data-url]')
            const title = card.querySelector('[data-title]')
            const description = card.querySelector('[data-description]')
            title.textContent = a.title 
            url.setAttribute('href', `https://blog.vinitparekh.rocks/${a.slug}`)
            url.setAttribute('target', '_blank')
            description.textContent = a.brief.slice(0,100) + ' ...'
            container.append(card)
        })
        console.log(articles);
    })