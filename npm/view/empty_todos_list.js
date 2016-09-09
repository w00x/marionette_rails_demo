import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'
Backbone.$ = $
import Marionette from 'backbone.marionette';
import todo_item_view from './template/empty_todos_template.html'

var EmptyTodosList = Marionette.View.extend({
  template: _.template(todo_item_view)
});

export default EmptyTodosList;
