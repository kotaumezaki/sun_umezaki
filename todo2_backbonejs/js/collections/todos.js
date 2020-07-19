define(["models/todo","backbone"],function(TodoModel){
    //TodoのCollection
    var TodoCollection = Backbone.Collection.extend({
        model: TodoModel //collectionではmodelを指定
    });

    return TodoCollection;
});