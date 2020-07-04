(function(){

// Model

var Task = Backbone.Model.extend({
    defaults: {
        title: "test1",
        completed: false
    },
    validate: function(attrs){
        if( _.isEmpty(attrs.title)){
            return "title must not be empty!";
        }
    },
    toggle: function(){
        this.set('completed', !this.get('completed'));
    }
});

var task1 = new Task({
    completed: true
});

// task1.set('title','test2');
// var title = task1.get('title');
// console.log(title);

console.log(task1.toJSON());
task1.set({title: ''},{validate: true});
// task1.toggle();
console.log(task1.toJSON());


// View

var TaskView = Backbone.View.extend({
    tagName: 'li',
    className: 'liClass',
    id: 'liId',
    template: _.template("<%- title %>"),
    render: function(){
        var template = this.template(this.model.toJSON());
        this.$el.html(template);
        return this;
    }
});
var taskView = new TaskView({
    model: task1
});
console.log(taskView);
console.log(taskView.render().el);

})();