define([
  "text!resources/templates/home.html",
  "i18n!nls/copy"
  ], function( Template, Copy ){
  
  var Home = Backbone.View.extend({
    
    className: 'home center',
    
    initialize: function(){
      console.log( "Copy.johnwaggener", Copy.johnwaggener );
      this.render();
    },
    
    render: function(){
      var body;
      body = _.template( Template, { copy: Copy } );
      this.$el.html( body );
    }
    
  });
  
  return Home;
  
});