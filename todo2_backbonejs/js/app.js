requirejs.config({
    baseUrl: "js",
    paths: {
        "jquery": "jquery-3.5.1",
        "underscore": "underscore",
        "backbone": "backbone"
    },
    shim: {
        "underscore": {
            exports: "_"
        },
        "backbone": {
            deps: ["jquery","underscore"],
            exports: "Backbone"
        }
    }
});

require(["views/todos","backbone"],function(TodoListView){
    console.dir("--Start--");
    var app = new TodoListView(); // 最初にTodoリストのViewインスタンスを生成
});