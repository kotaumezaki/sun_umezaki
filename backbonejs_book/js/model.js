(function(){
    var Todo = Backbone.Model.extend({
    initialize: function(){
        console.log('initializeは初期化です');
        this.on('change:title',function(){
            console.log('タイトル変更されました');
        });
        this.on('invalid',function(model,error){
            console.log(error);
        });
    },
    defaults: { //デフォルト値
        title: 'aaa',　
        completed: false
    },
    validate: function(attrs){　//データの検証
        if(!attrs.name){　 //nameがなかったら走る
            return '名前が必要です';
        }
    }
});

var TodosCollection = Backbone.Collection.extend({model: Todo});

var todo1 = new Todo();
console.log(todo1.get('title')); //結果は空
console.log(todo1.get('completed')); //結果はfalse

todo1.set('title','タイトルにセッターです');
todo1.set('completed',true, {validate: true}); //validateが走る
console.log(todo1.get('title')); //結果はsetした値
console.log(todo1.get('completed')); //結果はsetした値

var todo2 = new Todo({
    title: 'テストです',　//デフォルト値が書き換えられる
    completed: true,
    name: 'ケン'
});
todo2.set('completed',false, {validate: true});
console.log(todo2);

var todos = new TodosCollection([todo1]);
console.log(todos.length);
todos.add(todo2);
console.log(todos.length);
todos.remove(todo1);
console.log(todos.length);

todos.on('add',function(todo){ //イベント(add)の監視
    console.log(todo.get('title') + (todo.get('completed') ? '○':'×'));
});
todos.add({　
    title: '追加',
    completed: false
});

})();