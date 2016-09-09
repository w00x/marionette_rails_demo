import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'
Backbone.$ = $
import Marionette from 'backbone.marionette';
import Todo from '../model/todo.js'

var Todos = Backbone.Collection.extend({
  model: Todo,
  url: '/tasks'
});

export default Todos;
