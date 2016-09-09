import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'
Backbone.$ = $
import Marionette from 'backbone.marionette';
import mainTodo from './template/todo_template.html'
import FormView from './form_view.js'
import ListTodos from './list_todos_collection_view.js'

var TodoView = Marionette.View.extend({
  template: _.template(mainTodo),
  regions: {
    formTodo: '#formTodo',
    listTodo: '#listTodo'
  },
  onRender: function() {
    this.showChildView('formTodo', new FormView({collection: this.collection}));
    this.showChildView('listTodo', new ListTodos({collection: this.collection}));
  }
});

export default TodoView;
