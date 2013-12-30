define(function (require) {

    "use strict";

    var $                   = require('jquery'),
        Backbone            = require('backbone'),

        Place = Backbone.Model.extend({

            urlRoot: "http://localhost:3000/places",

            initialize: function () {
                this.reports = new PlaceCollection();
                this.reports.url = this.urlRoot + "/" + this.id + "/reports";
            }

        }),

        PlaceCollection = Backbone.Collection.extend({

            model: Place,

            url: "http://localhost:3000/places"

        });

    return {
        Place: Place,
        PlaceCollection: PlaceCollection
    };

});