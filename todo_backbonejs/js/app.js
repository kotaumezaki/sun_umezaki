(function(){

var Task = Backbone.Model.extend({
    //Modelのデフォルト値を定義
    defaults:{
        title: 'do something',
        completed: false
    }
});
var Tasks = Backbone.Collection.extend({ model: Task });

var TaskView = Backbone.View.extend({
    tagName: 'li', //HTML表示させたいタグ
    template: _.template($('#task-template').html()),　 //対象となるHTMLのid属性をtemplateに設定
    render: function(){
        var template = this.template(this.model.toJSON());　//Model（JSON形式）を渡してtemplateメソッドを実行
        this.$el.html(template);　//$el要素にtemplateの実行結果(HTML形式）を渡す
        return this; 
    }

});
var TasksView = Backbone.View.extend({
    tagName: 'ul',
    render: function(){
        this.collection.each(function(task){　//collectionは複数形なのでeachで回す
            var taskView = new TaskView({model: task});　//Viewオブジェクト（単体）の生成
            this.$el.append(taskView.render().el);　//$el要素にオブジェクトをrender(描画)したel要素を渡す
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
        title: 'task2'
    },
    {
        title: 'task3'
    }
]);

var tasksView = new TasksView({collection: tasks}); //Viewオブジェクト（複数）の生成
$('#tasks').html(tasksView.render().el); //id属性にHTML（オブジェクトをrender(描画)したel要素）を渡す

})();