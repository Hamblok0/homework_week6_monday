var postCollection = Backbone.Collection.extend({
  model: postModel,
  url: 'http://tiny-starburst.herokuapp.com/collections/posts'
});

var postModel = Backbone.Model.extend({
  url: 'http://tiny-starburst.herokuapp.com/collections/posts'
});

var siteRouter = Backbone.Router.extend({
  
})
var postsView = Backbone.View.extend({

})

var postView = Backbone.View.extend({

})
