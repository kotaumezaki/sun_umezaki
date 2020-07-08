(function(){

// Model (データ)

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

var task = new Task({
    completed: true
});

// task.set('title','test2');
// var title = task.get('title');
// console.log(title);

console.log(task.toJSON());
task.set({title: ''},{validate: true});
// task.toggle();
console.log(task.toJSON());


// View (表示)

var TaskView = Backbone.View.extend({
    tagName: 'li',
    // className: 'liClass',
    // id: 'liId',
    events: {
        "click .command" : "sayHello"
    },
    sayHello: function(){
        alert('hello!');
    },
    // template: _.template("<%- title %>"),
    template: _.template($('#task-template').html()),
    render: function(){
        var template = this.template(this.model.toJSON());
        this.$el.html(template);
        return this;
    }
});
var taskView = new TaskView({
    model: task
});
console.log(taskView);
console.log(taskView.render().el);
$('body').append(taskView.render().el);

// Collection (Modelの複数形)

var Tasks = Backbone.Collection.extend({
    model: Task
});

var TasksView = Backbone.View.extend({
    tagName: 'ul',
    render: function(){
        this.collection.each(function(task){
            var taskView = new TaskView({model: task});
            this.$el.append(taskView.render().el);
        }, this);
        return this;
    }
});

var tasks = new Tasks([
    {
        title: 'task1',
        completed: true
    },
    {
        title: 'task2',
    },
    {
        title: 'task3',
    },
]);
//console.log(tasks.toJSON());
var tasksView = new TasksView({collection: tasks});
$('#tasks').html(tasksView.render().el);

})();