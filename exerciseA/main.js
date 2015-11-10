var blogPost = Backbone.Model.extend({
  url: 'http://tiny-starburst.herokuapp.com/collections/posts'
});

var BlogPost = new blogPost();

BlogPost.set({
    "title": "Coding Rulez",
    "body": "Why sleep when you can code dewd"
});
