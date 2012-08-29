define([
  "views/index",
  "routes/routes"
  ], function( Index, Router ){
  
  function initialize(){
    console.log( "initialize the app" );
    var index = new Index( );
    $( "#jw" ).append( index.el );
    //the entire view is this Index view
    //i'm using the router to navigate to parts of the view
    //#resume to scroll to the resume for example
    new Router();
    Backbone.history.start();
  }
  
  return {
    init: initialize
  }
} )