import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'
Backbone.$ = $
import Marionette from 'backbone.marionette';
import TodoView from '../view/todo_view.js'
import Todos from '../collection/todos.js'

var MainController = {
  index: function(app) {
    var todos = new Todos();
    todos.fetch();
    app.showView(new TodoView({collection: todos}));
  }
};

export default MainController;
