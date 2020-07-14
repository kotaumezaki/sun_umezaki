var app = app || {};
app.collection = app.collection || {};

app.collection.thumbnail = Backbone.Collection.extend({
    model: app.model.thumbnail
});

