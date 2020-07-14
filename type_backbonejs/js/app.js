var Thumbnail = Backbone.View.extend({
    el: ".img-thumbnail",

    events: {
        'click img': 'onClickThumbnail'
    },

    initialize: function(){
        alert('初期化');
        return;
    },

    onClickThumbnail: function(e){
        alert('サムネイルがクリックされました。');
        var id = $(e.delegateTarget).attr('data-id');
        document.location.href = "http://it.typeac.jp/article/show/" + id;
        return;
    }
});

$(document).ready(function(){
    new Thumbnail();
    return;
});