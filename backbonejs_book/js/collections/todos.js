var app = app || {};

var TodoList = Backbone.Collection.extend({
    model: app.Todo,

    localStorage: new Backbone.LocalStorage('todos-backbone'), //全てのTodo項目をtodos-backboneという名前空間に保存する

    completed: function(){　//完了済みのTodo項目だけをフィルタリングして返す
        return this.filter(function(todo){ 
            return todo.get('completed');　
        });
    },

    remaining: function(){　//未了のTodo項目だけをフィルタリングして返す
        return this.without.apply(this, this.completed);　
    },

    nextOrder: function(){　//次に作成されるTodo項目の連番を返す
        if(!this.length){
            return 1;
        }
        return this.last().get('order') + 1;
    },

    comparator: function(todo){ //Todo項目を作成順にソートする
        return todo.get('order');
    }
});

app.Todos = new TodoList();

