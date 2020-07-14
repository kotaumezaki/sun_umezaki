var Thumbnail = Backbone.View.extend({
    tagName: 'div',
    attributes: {
        style: 'width: 210px;',
        class: 'col-3 img-thumbnail',
    },
    template: _.template([
        '<div>',
            '<img src="images/229607.jpg">',
            '<div class="text-center"><%= name %></div>',
            '<div class="caption">',
                '<h3><%= worktitle %></h3>',
                '<p><%= workdesc %></p>',
            '</div>',
        '</div>'
    ].join('')),
    render: function(){
        this.$el.html(this.template(this.model.toJSON()));
        return this;
    }
});