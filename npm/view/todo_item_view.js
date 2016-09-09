import $ from 'jquery'
import _ from 'underscore'
import Backbone from 'backbone'
Backbone.$ = $
import Marionette from 'backbone.marionette';
import todo_item_view from './template/todo_item_template.html'

var TodoItemView = Marionette.View.extend({
  template: _.template(todo_item_view),
  ui: {
    todo_item: '#todo_item',
    doit: '#doit'
  },
  events: {
    'change #doit': 'doDoit'
  },
  doDoit: function(){
    if(this.ui.doit.prop( "checked" )){
      this.model.set("doit",true);

    }
    else {
      this.model.set("doit",false);
    }
    this.model.save();
  },
  modelEvents: {
    'change': 'fieldsChanged'
  },
  fieldsChanged: function() {
    this.render();
  }
});

export default TodoItemView;
