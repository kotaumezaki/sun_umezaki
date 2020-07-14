var app = app || {};
app.view = app.view || {};
 
app.view.thumblist = Backbone.View.extend({
    tagName: 'div',
    attributes: {
        class: 'row'
    },
 
    render: function(){
        this.collection.each(function(v){
            this.$el.append(
                new Thumbnail({model: v}).render().el
            );
        }, this);
        return this;
    }
 
 
});