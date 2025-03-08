import express from "express";
import bodyParser from "body-parser";


const app = express();
const port = 3000;
let list = [];


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/", (req, res) => {
    list.push({title: req.body['title'], des: req.body['des']});
    res.render('index.ejs', {listy: list,})
});

app.post('/delete', (req, res) => {
    list.splice(req.body['index'],1);
    res.render('index.ejs', {listy: list})
})

app.post('/update', (req, res) =>{
    let index = req.body['index'];
    list[index] = {title: req.body['title'], des: req.body['des']};
    res.render('index.ejs', {listy: list});
})

app.listen(port, () => {
  console.log(`listening at port ${port}`);
});
