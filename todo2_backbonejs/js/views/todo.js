define(["backbone"],function(){
    //Todoを表示するためのView
    var TodoView = Backbone.View.extend({
        tagName: "li", // レンダリングの際に自動で挿入されるタグ（デフォルトは<div>）
        events: {},
        initialize: function(){ // インスタンス生成時に実行
            console.log("[View]TodoView::initialize().7");
        },
        render: function(){ // この時点ではまだ画面には描画されない。
            console.log("[View]TodoView::render().8");
            this.$el.html(this.model.get("content"));
            return this; // 呼び出し元でメソッドチェーンが使えるようにthisを返す。
        }
    });
    return TodoView;
});