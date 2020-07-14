var app = app || {};
app.model = app.model || {};

app.model.thumbnail = Backbone.Model.extend({
    defaults:{
        id: null,
        name: null,
        profile: null,
        favorite: false,
        worktitle: null,
        workdesc: null,
        publish: null,
        gender: null
    }
});