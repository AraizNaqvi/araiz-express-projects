let express = require('express');
let app = express();
require('dotenv').config();

let githubInfo = {
    "login": "AraizNaqvi",
    "id": 138990039,
    "node_id": "U_kgDOCEjR1w",
    "avatar_url": "https://avatars.githubusercontent.com/u/138990039?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/AraizNaqvi",
    "html_url": "https://github.com/AraizNaqvi",
    "followers_url": "https://api.github.com/users/AraizNaqvi/followers",
    "following_url": "https://api.github.com/users/AraizNaqvi/following{/other_user}",
    "gists_url": "https://api.github.com/users/AraizNaqvi/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/AraizNaqvi/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/AraizNaqvi/subscriptions",
    "organizations_url": "https://api.github.com/users/AraizNaqvi/orgs",
    "repos_url": "https://api.github.com/users/AraizNaqvi/repos",
    "events_url": "https://api.github.com/users/AraizNaqvi/events{/privacy}",
    "received_events_url": "https://api.github.com/users/AraizNaqvi/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Araiz Naqvi",
    "company": null,
    "blog": "",
    "location": "Mumbai, India",
    "email": null,
    "hireable": null,
    "bio": "Passionate Machine Learning Engineer and MERN stack developer focused on building intelligent systems and creating impactful solutions.",
    "twitter_username": null,
    "public_repos": 3,
    "public_gists": 0,
    "followers": 0,
    "following": 0,
    "created_at": "2023-07-08T13:42:13Z",
    "updated_at": "2024-02-26T05:03:22Z"
  }

app.get('/', (req, res) => {
    res.send("Hit blank route!");
})

app.get('/github', (req, res) => {
    res.json(githubInfo);
})

app.listen(process.env.PORT, () => {
    console.log(`Port - ${process.env.PORT} Hit!`);
})