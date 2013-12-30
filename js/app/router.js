define(function (require) {

    "use strict";

    var $           = require('jquery'),
        Backbone    = require('backbone'),
        PageSlider  = require('app/utils/pageslider'),
        HomeView    = require('app/views/Home'),

        slider = new PageSlider($('body')),

        homeView = new HomeView();

    return Backbone.Router.extend({

        routes: {
            "": "home",
            "places/:id": "placeDetails",
            "places/:id/reports": "reports"
        },

        home: function () {
            homeView.delegateEvents();
            slider.slidePage(homeView.$el);
        },

        placeDetails: function (id) {
            require(["app/models/place", "app/views/Place"], function (models, PlaceView) {
                var place = new models.Place({id: id});
                place.fetch({
                    success: function (data) {
                        slider.slidePage(new PlaceView({model: data}).$el);
                    }
                });
            });
        },

        reports: function (id) {
            require(["app/models/place", "app/views/Reports"], function (models, ReportsView) {
                var place = new models.Place({id: id});
                place.fetch({
                    success: function (data) {
                        slider.slidePage(new ReportsView({model: data}).$el);
                    }
                });
            });
        }

    });

});