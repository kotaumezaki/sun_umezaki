define(["models/todo","collections/todos","views/todo","backbone"],function(TodoModel, TodoCollection, TodoView){
    var TodoListView = Backbone.View.extend({
        el: "#todoListView",
        events:{
            "click button#addTodo": "addTodo"
        },
        initialize: function() {
            console.dir("[View]TodoListView::initialize()");
            this.collection = new TodoCollection();
            this.collection.on("add", this.render);
            $("#addTodo").show();
        },
        render: function(todo){
            console.dir("[View]TodoListView::render()");
            var view = new TodoView({
                model: todo
            });
            $("#todoList",this.el).append(view.render().el);
        },
        addTodo: function(){
            var todo, input;
            console.dir("[View]TodoListView::addTodo()");

            todo = new TodoModel();
            todo.on("invalid",this.onInvalid);
            input = $("#inputTodo");
            todo.set({
                content: input.val()
            },{
                validate: true
            });

            console.dir('[Model]TodoListModel::isValid()');
            if(todo.isValid()){
                this.collection.add(todo);
            }

            input.val('');
            console.dir("--End--");
        },
        onInvalid: function(model){
            console.dir('[View]TodoListView::onInvalid()');
            alert(model.validationError);
        }
    });
    return TodoListView;
});