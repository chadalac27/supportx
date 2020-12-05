import Express from "express";



const app = Express();
const port = 3000;
const server = express.createServer(handleRequest)

function handleRequest(req, res) {
    res.end("path Respose" + req.url)
}
app.get ("/", (req,res)=> {
    res.send("balls");
})








