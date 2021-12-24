const express = require('express')

const app = express()

app.set('view engine','ejs')

app.get("/", (req, res) => {
    const items = [
        {
            title: "D", 
            message: "Desenvolvimento aplicações/serviços de forma fácil"
        },
        {
            title: "E", 
            message: "EJS usa javascript para renderizar HTML",
        },
        {
            title: "M", 
            message: "Muito fácil de usar"
        },
        {
            title: "A", 
            message: "Amorzinho"
        },
        {
            title: "I", 
            message: "install ejs"
        },
        {
            title: "S", 
            message: "Sintaxe simples"
        },
    ];

    const subtitle = "Uma linguagem de modelagem para criação de página HTML"
    res.render('pages/index', {
        qualitys: items,
        subtitle: subtitle
    })
})

app.get("/sobre", (req, res) => {

    res.render('pages/about')
})

app.listen(8080, () => console.log("rodando"))