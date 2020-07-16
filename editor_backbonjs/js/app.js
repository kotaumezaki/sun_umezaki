var app = app || {};
app.model = app.model || {};
app.collection = app.collection || {};
app.view = app.view || {};

app.model.paragraph = Backbone.Model.extend({
    defaults:{
        id: null,
        type: 'text',
        value: null
    },
    validate: function(attr,options){
        switch(attr.type){
            case 'text':
                break;

            default:
                return '指定されてない型です';
                break;
        }
        if(attr.length >= 100){
            return '段落の文字数は100文字以下である必要があります'
        }
    }
});

app.collection.paragraph = Backbone.Collection.extend({
    model: app.model.paragraph,
    url: 'data.json',
    // url: function(){
    //     return app.config.apiurl + '/data.json';
    // },
    parse: function(res){
        return res.result;
    }
});

app.view.editor = Backbone.View.extend({
    el: '#editor',
    events: {
        'click #add-btn': 'onAdd'
    }, 
    onAdd: function(){
        console.log('onAdd');
        var paragraph = new app.model.paragraph();
        this.collection.add(paragraph);
    }
});

app.view.paragraph = Backbone.View.extend({
    tagName: 'div',
    attributes: {
        class: 'col'
    },
    template: _.template(
        '<textarea id="<%= id %>" cols="120" rows="4"><%= text %></textarea>'
    ),
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});

app.view.addparagraph = Backbone.View.extend({
    intialize: function(){
        this.collection.on('add',this.render,this);
    },
    render: function(){
        this.collection.each(function(p){　
            var paragraphView = new app.view.paragraph({model: p});
            this.$el.append(paragraphView.render().el);　
        }, this);
        return this;
    }
})

var m = new app.collection.paragraph;
m.fetch({
    reset: true,
    // success: function(){
    //     var res = m.create({
    //         text: "新しい段落を追加しました",
    //         type: "text"
    //     });
    success: function(m){
        _.each(m.models,function(v){
            $('#paragraph').append(new app.view.paragraph({model: v}).render().$el);
        },this);
        return;
    }
});

var v = new app.view.editor({collection: m});
var a = new app.view.addparagraph({collection: m});
$('#paragraph').html(a.render().el); 