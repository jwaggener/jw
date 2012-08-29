define([
  ], function(){
  
  var Routes = Backbone.Router.extend({
    routes:{
      '': 'index',
      'resume': 'resume',
    },
    
    initialize: function(){
      console.log( "here in the router" );
    },
    
    index: function(){
      window.location = "#";
    },
    
    resume: function(){
      window.location = "#resume";
    }
  });
  
  return Routes;
  
})