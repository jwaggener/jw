define([
  "views/home",
  "views/resume",
  "text!resources/templates/index.html"
  ], function( Home, Resume, Template ){
    
    var Index = Backbone.View.extend({
      
      initialize: function(){
        this.home = new Home();
        this.resume = new Resume();
        this.render();
      },
      
      render: function(){
        var body;
        body = _.template( Template );
        this.$el.html( body );
        this.$el.append( this.home.el );
        this.$el.append( this.resume.el );
      }
      
    });
    
    return Index;
} )