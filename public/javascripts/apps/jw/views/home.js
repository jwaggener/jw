define([
  "views/home_square",
  "text!resources/templates/home.html"
  ], function( HomeSquare, Template ){
  
  var Home = Backbone.View.extend({
    
    className: 'home center',
    
    initialize: function(){
      this.home1 = new HomeSquare();
      this.home2 = new HomeSquare();
      this.home3 = new HomeSquare();
      this.home4 = new HomeSquare();
      this.render();
    },
    
    render: function(){
      var body;
      body = _.template( Template );
      this.$el.html( body );
      this.$el.find(".row1" ).append( this.home1.el );
      this.$el.find(".row1" ).append( this.home2.el );
      this.$el.find(".row2" ).append( this.home3.el );
      this.$el.find(".row2" ).append( this.home4.el );
    }
    
  });
  
  return Home;
  
});