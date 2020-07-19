define(["models/todo","collections/todos","views/todo","backbone"],function(TodoModel, TodoCollection, TodoView){
    //Todoリストを表示するためのView
    var TodoListView = Backbone.View.extend({
        el: "#todoListView", // このViewで管理する要素を指定する。
        events:{ //"el"で指定した要素内に対してイベントを行う。
            "click button#addTodo": "addTodo" 
        },
        initialize: function() { // インスタンス生成時に実行
            console.dir("[View]TodoListView::initialize()");
            this.collection = new TodoCollection(); // Collectionのインスタンスを生成
            this.collection.on("add", this.render); // collectionに対し、addイベントが発生したらrenderを実行するよう設定
            $("#addTodo").show();
        },
        render: function(todo){
            console.dir("[View]TodoListView::render()");
            var view = new TodoView({ // １つのTodoを表すViewのインスタンスを生成
                model: todo
            });
            $("#todoList",this.el).append(view.render().el);
        },
        addTodo: function(){　// 「登録」ボタンがクリックされた時に実行
            var todo;
            console.dir("[View]TodoListView::addTodo()");

            todo = new TodoModel();　// modelのインスタンスを生成
            todo.on("invalid",this.onInvalid);　// バリデーション失敗時に"invalid"イベントが発生したらonInvalidを実行するよう設定
            todo.set({
                content: $("#inputTodo").val() //入力内容をmodelにセット
            },{
                validate: true　//{options}の指定でvalidateを有効に設定
            });

            console.dir('[Model]TodoListModel::isValid()');
            if(todo.isValid()){
                this.collection.add(todo); // collectionにmodelを追加
            }

            $("#inputTodo").val(''); // 入力内容をリセット
            console.dir("--End--");
        },
        onInvalid: function(model){ // バリデーションエラー
            console.dir('[View]TodoListView::onInvalid()');
            alert(model.validationError);
        }
    });
    return TodoListView;
});