define(["models/todo","backbone"],function(TodoModel){

    var TodoCollection = Backbone.Collection.extend({
        model: TodoModel
    });

    return TodoCollection;
});