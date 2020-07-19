define(["backbone"],function(){
    var TodoModel = Backbone.Model.extend({
        defaults: {},
        initialize: function(){
            console.dir("[Model]TodoModel::initialize()");
        },
        validate: function(attrs){
            console.dir("[Model]TodoModel::validate()");
            var ret = "";
            if(_.isEmpty(attrs.content)){
                ret = "入力してください。";
            }
            return ret;
        }
    }); 
    return TodoModel;
});