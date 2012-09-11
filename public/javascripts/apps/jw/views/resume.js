define([
  "text!resources/templates/resume.html"
  ], function( Template ){
  
  var Resume = Backbone.View.extend({
    
	className: "resume center clearfix",
	
    initialize: function(){
      this.render();
    },
    
    render: function(){
      var body;
      body = _.template( Template );
      this.$el.html( body );
    }
    
  });
  
  return Resume;
  
} );