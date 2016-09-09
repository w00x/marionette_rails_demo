import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'
Backbone.$ = $
import Marionette from 'backbone.marionette';
import TodoItemView from './todo_item_view.js'
import EmptyTodosList from './empty_todos_list.js'

var ListTodos = Marionette.CollectionView.extend({
  childView: TodoItemView,
  emptyView: EmptyTodosList
});

export default ListTodos;
