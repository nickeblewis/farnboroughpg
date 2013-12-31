define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        PlaceListView    = require('app/views/PlaceList'),
        models              = require('app/models/place'),
        tpl                 = require('text!tpl/Home.html'),

        template = _.template(tpl);


    return Backbone.View.extend({

        initialize: function () {
            this.placeList = new models.PlaceCollection();
            this.render();
            
        },

        render: function () {
            this.$el.html(template());
            this.listView = new PlaceListView({collection: this.placeList, el: $(".scroller", this.el)});
            return this;
        },

        events: {
            "keyup .search-key":    "search",
            "keypress .search-key": "onkeypress",
            "click .slide-menu-button": "onmenuclick"
        },

        onmenuclick: function (event) {
            var cl = document.body.classList;
            if (cl.contains('left-nav')) {
                cl.remove('left-nav');
            } else {
                cl.add('left-nav');
            }
        },

        search: function (event) {
            var key = $('.search-key').val();
            this.placeList.fetch({reset: true, data: {name: key}});
        },

        onkeypress: function (event) {
            if (event.keyCode === 13) { // enter key pressed
                event.preventDefault();
            }
        }

    });

});