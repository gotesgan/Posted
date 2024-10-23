import express from 'express'
import bodyParser from "body-parser";
 
const app = express()
const port = 3000;
let check=true
function Post(title, post,id) {
    this.title = title;
    this.post = post;
    this.id = id
    


}

var counter=2;
let output =[];

const post1 = new Post(
    "The Journey of a Thousand Miles: A Personal Reflection",
    "A journey of a thousand miles begins with a single step. I remember the day I decided to embark on my first solo backpacking trip across the mountains, filled with excitement and a bit of apprehension. Every step took me further from my comfort zone and deeper into nature's embrace. The fresh air, towering peaks, and the sense of freedom were intoxicating...",
    1
);

const post2 = new Post(
    "Embracing Change: Navigating Life’s Uncertainties",
    "Change is the only constant in life, yet it remains one of the most challenging aspects of our existence. Throughout my life, I've experienced several significant changes that have shaped who I am today. From moving to new cities, changing jobs, to transitioning through different stages of relationships, each change brought its own set of challenges and opportunities for growth...",
    2
);

// Push the Post objects into the output array
output.push(post1);
output.push(post2);

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"))

app.get('/', (req, res) => {
    res.render("index.ejs",{output})});

    app.get('/post', (req, res) => {
        check = false; // or use the variable you've declared above
        res.render("from.ejs",{check}  )});

        app.post("/submit", (req, res) => {
            counter++
       
            let postData=new Post(req.body.title,req.body.posted);
             if (postData.title && postData.post) {
               
                postData.id=counter;
                output.push(postData);}
                console.log(output)
                res.redirect("/")});
                app.get('/read/:id', (req, res) => {
                    console.log(req.params.id.replace(":",""))
                   var id = req.params.id.replace(":","")-1;
                    
                    res.render("read.ejs",{output,id})});

       

app.listen(port, () => {
    console.log(` listening on port ${port}`)
  })