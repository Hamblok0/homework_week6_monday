var formModel = Backbone.Model.extend({
  url: "http://tiny-starburst.herokuapp.com/collections/people"
});

var formCollection = Backbone.Collection.extend({
  model: formModel,
  url: "http://tiny-starburst.herokuapp.com/collections/people"
})

var formRouter = Backbone.Router.extend({
  routes: {
    '' : 'form'
  },

  form: function(){
    var view = new formView();
    $('main').html(view.render().$el);
  }
});

var formView = Backbone.View.extend({
  tagName: 'section',
  className: 'form',
  template: _.template($('#formTemplate').html()),
  render: function() {
    this.$el.html(this.template());
    return this
  },
  events: {
    'click #submitBtn' : 'submit'
  },

  submit: function(event) {
    event.preventDefault();
    var firstName = $('.firstName').val();
    var lastName = $('.lastName').val();
    var address = $('.address').val();
    var phoneNumber = $('.phoneNumber').val();

    if (firstName.trim() === '' || lastName.trim() === '' || address.trim() === ''
  || phoneNumber.trim() === '') {
      alert("Please complete form before submitting")
    } else if (phoneNumber.length > 10) {
      alert("Invalid phone number")
    } else {
      var send = new formCollection();
      send.create({
        "firstName": firstName,
        "lastName": lastName,
        "address": address,
        "phone": phoneNumber
      });
      $('.firstName').val('');
      $('.lastName').val('');
      $('.address').val('');
      $('.phoneNumber').val('');
      alert("Form submitted")

    }
  }

});

var router = new formRouter();
Backbone.history.start();
