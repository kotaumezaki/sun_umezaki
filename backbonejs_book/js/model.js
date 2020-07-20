(function(){
    var Todo = Backbone.Model.extend({
    initialize: function(){
        console.log('initializeは初期化です');
    },
    defaults: { //デフォルト値
        title: '',　
        completed: false
    }
});

var todo1 = new Todo();
console.log(todo1.get('title')); //結果は空
console.log(todo1.get('completed')); //結果はfalse

todo1.set('title','タイトルにセッターです');
todo1.set('completed',true);
console.log(todo1.get('title')); //結果はsetした値
console.log(todo1.get('completed')); //結果はsetした値


var todo2 = new Todo({
    title: 'テストです',　//デフォルト値が書き換えられる
    completed: true
});

})();