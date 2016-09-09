import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'
Backbone.$ = $
import Marionette from 'backbone.marionette';
import form from './template/form_template.html'

var FormView = Marionette.View.extend({
  template: _.template(form),
  events: {
    'click #send': 'createTodo',
    'keypress #todo': 'createTodoTyped'
  },
  ui: {
    todo: '#todo'
  },
  createTodo: function() {
    this.collection.create({
      todo: this.ui.todo.val(),
      doit: false
    });

    this.ui.todo.val('');
    this.ui.todo.focus();
  },
  createTodoTyped: function(e){
    if(e.which == 13) {
        this.createTodo();
    }
  }
});

export default FormView;
