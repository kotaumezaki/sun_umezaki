define(["backbone"],function(){
    var TodoView = Backbone.View.extend({
        tagName: "li",
        events: {},
        initialize: function(){
            console.log("[View]TodoView::initialize()");
        },
        render: function(){
            $(this.el).html(this.model.get("content"));
            return this; 
            // 呼び出し元でメソッドチェーンが使えるようにthisを返す。
        }
    });
    return TodoView;
});