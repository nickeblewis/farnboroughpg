define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        _                   = require('underscore'),
        Backbone            = require('backbone'),
        PlaceListView    = require('app/views/PlaceList'),
        tpl                 = require('text!tpl/Reports.html'),

        template = _.template(tpl);

    return Backbone.View.extend({

        initialize: function () {
            this.render();
        },

        render: function () {
            this.$el.html(template(this.model.attributes));
            this.model.reports.fetch();
            this.listView = new PlaceListView({collection: this.model.reports, el: $(".scroller", this.el)});
            return this;
        }

    });

});