define(["backbone"],function(){
    //TodoのModel
    var TodoModel = Backbone.Model.extend({
        defaults: {}, // 初期値の設定
        initialize: function(){ // インスタンス生成時に実行
            console.dir("[Model]TodoModel::initialize().3");
        },
        validate: function(attrs){ // バリデーションを定義
            console.dir("[Model]TodoModel::validate().4");
            var ret = "";
            if(_.isEmpty(attrs.content)){
                ret = "入力してください。";
            }
            return ret;
        }
    }); 
    return TodoModel;
});