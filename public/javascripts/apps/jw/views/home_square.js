define([
  "text!resources/templates/square.html"
  ], function( Template ){
  
  var HomeSquare = Backbone.View.extend({
    
    className: "homesquare",
    
    initialize: function(){
      this.render();
    },
    
    render: function(){
      var body;
      body = _.template( Template );
      this.$el.html( body );
    }
    
  });
  
  return HomeSquare;
  
} );
