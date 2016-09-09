import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'
Backbone.$ = $
import Marionette from 'backbone.marionette';
import MainController from './controller/main_controller.js'

var App = {}

var RouteController = {
  main_controller_index: function() {
    MainController.index(App);
  }
};

var TodoRouter = Marionette.AppRouter.extend({
  initialize: function(app) {
    App = app;
  },
  controller: RouteController,
  appRoutes: {
    '': 'main_controller_index'
  }
});

export default TodoRouter;
