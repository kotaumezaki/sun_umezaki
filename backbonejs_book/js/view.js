(function(){
    var TodoView = Backbone.View.extend({
        tagName: 'li',
        template: _.template($('#item_template').html()),
        events: {
            'dblclick label': 'edit',
            'keypress .edit': 'updateOnEnter',
            'blur .edit': 'close'
        },
        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
            this.input = this.$('.edit');
            return this;
        },
        // initialize: function(){
        //     this.model.bind('change', _.bind(this.render, this));
        // },
        edit: function(){

        },
        close: function(){

        },
        updateOnEnter: function(){

        }
    });
    var todoView = new TodoView({el: $('#todo_complete')});
    console.log(todoView.$el);
})();

