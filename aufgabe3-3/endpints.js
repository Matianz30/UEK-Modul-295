const express = require("express")
const fs = require("fs")
const { get } = require("request")
const app = express()
const names = ["Matian", "Jonas", "Mischa", "Leo", "Leon", "Lucas", "Sophia", "Emma", "Oliver", "Liam", "Isabella", "Mia", "Elena", "Nathan", "Ava", "Ethan", "Aiden", "Hannah", "Lila", "Noah"];


function addHours(date, hours) {
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
  
    return date;
  }

app.get("/now", (request, response) => {
    const time = addHours(new Date(), 1);
    response.send(`Gerade im Moment ist es ${time} Uhr`)
})

app.get("/zli", (request, response) => {
    const zli = "https://www.zli.ch/"
    response.redirect(zli)

})

app.get("/name", (request, response) => {
    const Name = names[Math.floor(Math.random() * names.length)];  
    response.send(Name)
})

app.get('/html', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get("/image", (request, response) => {
    response.sendFile(__dirname + '/Download.jpg');
})

app.get("/teapot", (request, response) => {
    response.sendStatus(418)
})

app.get("/user-agent", (request, response) => {
    response.send(request.get('user-agent'));
})

app.get("/secret", (request, response) => {
    response.sendStatus(403)
})

app.get("/xml", (request, response) => {
    response.sendFile(__dirname + '/beispiel.xml');
})
app.listen(3000)