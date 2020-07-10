(function(){

var Task = Backbone.Model.extend({
    defaults:{ //Modelのデフォルト値を定義
        title: 'do something',
        completed: false
    },
    validate: function(attrs){ //titleが空だった場合にエラーを出す
        if( _.isEmpty(attrs.title)){
            return 'title must not be empty';
        }
    },
    initialize: function(){
        this.on('invalid', function(model, error){
            $('#error').html(error);
        })
    }
});
var Tasks = Backbone.Collection.extend({ model: Task });

var TaskView = Backbone.View.extend({
    tagName: 'li', //HTML表示させたいタグ
    initialize: function(){
      this.model.on('destroy', this.remove, this); //destroyイベントが起きた時にremoveイベントを行う
      this.model.on('change', this.render, this);
    },
    events:{
        'click .delete': 'destroy',
        'click .toggle': 'toggle'
    },
    toggle: function(){
        this.model.set('completed',!this.model.get('completed'));
    },
    destroy: function(){
        if(confirm('are you sure?')){
            this.model.destroy();　//modelを破壊する
        }
    },
    remove: function(){
        this.$el.remove();　//$el要素を削除する
    },
    template: _.template($('#task-template').html()),
    render: function(){
        var template = this.template(this.model.toJSON());　//Model（JSON形式）を渡してtemplateメソッドを実行
        this.$el.html(template);　
        return this; 
    }

});
var TasksView = Backbone.View.extend({
    tagName: 'ul',
    initialize: function(){
        this.collection.on('add', this.addNew, this);
        this.collection.on('change', this.updateCount, this);
        this.collection.on('destroy', this.updateCount, this);
    },
    addNew: function(task){
        var taskView = new TaskView({model: task});
        this.$el.append(taskView.render().el);
        $('#title').val('').focus();
        this.updateCount();
    },
    updateCount: function(){
        var uncompletedTasks = this.collection.filter(function(task){
            return !task.get('completed');
        });
        $('#count').html(uncompletedTasks.length);
    },
    render: function(){
        this.collection.each(function(task){　//collectionは複数形なのでeachで回す
            var taskView = new TaskView({model: task});　//Viewオブジェクト（単体）の生成
            this.$el.append(taskView.render().el);　
        }, this);
        this.updateCount();
        return this;
    }
});

var AddTaskView = Backbone.View.extend({
    el: '#addTask',
    events: {
        'submit': 'submit'
    },
    submit: function(e){
        e.preventDefault();
        //var task = new Task({title: $('#title').val()});
        var task = new Task();
        if(task.set({title: $('#title').val()},{validate: true})){
            this.collection.add(task);
            $('#error').empty();
        }
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
var addTaskView = new AddTaskView({collection: tasks});

$('#tasks').html(tasksView.render().el); 

})();