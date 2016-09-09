import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'
Backbone.$ = $
import Marionette from 'backbone.marionette';
import TodoRouter from './route.js';

$(document).ready(function(){
  var TodoApp = new Marionette.Application({
    region: '#container',
    onStart: function() {
      new TodoRouter(this);
    }
  });
  TodoApp.start()
  Backbone.history.start();
});
