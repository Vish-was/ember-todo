import Component from '@glimmer/component';
import { action } from '@ember/object'
import { tracked } from '@glimmer/tracking';


export default class TodoListComponent extends Component {
    @tracked todos = [];
    @tracked todo = "";

    @action
    addTodo(todo) {
        this.todos.addObject({task: todo, is_completed: false});
        this.todo = "";
    }

    @action
    taskDone(todo){
        
    }
}