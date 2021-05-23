const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");

const homeStartContent = "Something that I have wanted to do for a long time is take a look at the web’s best About Us pages. Why? Because a good About Us page is very hard to come by."
+ "Normally they are a boring, self-serving mix of me me me and us us us. But a they are so vital to your business. In fact, its usually the first place people look before they start to take you seriously. Get it wrong and you could be turning people off without even knowing it. Designing a good about us page should be at the top of your list when you plan to start a blog."
+ "In this post I am going to show you what I consider to be 12 of the best About Us pages on the internet. I’m going to go through them all, one by one, and show you what makes them so good.";

const aboutContent = "Something that I have wanted to do for a long time is take a look at the web’s best About Us pages. Why? Because a good About Us page is very hard to come by."
+ "Normally they are a boring, self-serving mix of me me me and us us us. But a they are so vital to your business. In fact, its usually the first place people look before they start to take you seriously. Get it wrong and you could be turning people off without even knowing it. Designing a good about us page should be at the top of your list when you plan to start a blog."
+ "In this post I am going to show you what I consider to be 12 of the best About Us pages on the internet. I’m going to go through them all, one by one, and show you what makes them so good.";

const contactContent = "Something that I have wanted to do for a long time is take a look at the web’s best About Us pages. Why? Because a good About Us page is very hard to come by."
+ "Normally they are a boring, self-serving mix of me me me and us us us. But a they are so vital to your business. In fact, its usually the first place people look before they start to take you seriously. Get it wrong and you could be turning people off without even knowing it. Designing a good about us page should be at the top of your list when you plan to start a blog."
+ "In this post I am going to show you what I consider to be 12 of the best About Us pages on the internet. I’m going to go through them all, one by one, and show you what makes them so good.";

const posts=[];

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req,res){
    res.render("Home", {homeContent: homeStartContent, allPosts: posts});
})

app.get("/about", function(req,res){
    res.render("About", {aboutContent: aboutContent});
})

app.get("/contact", function(req,res){
    res.render("Contact", {contactContent: contactContent});
})

app.get("/compose", function(req,res){
    res.render("Compose");
})

app.post("/compose", function(req,res){

    const data = {
        title : req.body.postTitle,
        body : req.body.postBody
    }
    posts.push(data);
    res.redirect("/");
})

app.get("/posts/:title", function(req,res){

    const title = _.lowerCase(req.params.title);
    posts.forEach((i) => {
        if(_.lowerCase(i.title) === title){
            res.render("Posts", {post: i})
        }
    });
})

app.listen(3000, function(){
    console.log("server started on port 3000");
});