const { User } = require('../models');

const userData = [
    {
        username: "mikeholland",
        twitter: "mmikeyh",
        github: "mikeyjh",
        email: "mikeyhkj@gmail.com",
        password: "p@asswordsarecool1"
    },
    {
        username: "matt_b",
        twitter: "mathewb",
        github: "mathewb",
        email: "mathew_b@gmail.com",
        password: "p@ssword2"
    },
    {
        username: "shaun_c",
        twitter: "shaun",
        github: "shaun",
        email: "shaun_c@gmail.com",
        password: "p@ssword3"
    },
    {
        username: "lee_n",
        twitter: "leenorris",
        github: "leenorris",
        email: "lee_n@gmail.com",
        password: "p@ssword4"
    },
    {
        username: "riya_r",
        twitter: "riyaravi23",
        github: "riyaravi23",
        email: "riya_r@gmail.com",
        password: "p@ssword5"
    },
    {
        username: "hiras",
        twitter: "hiraas",
        github: "hirasoo",
        email: "phiraasa@gmail.com",
        password: "p@sswordarecool6"
    }
]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;