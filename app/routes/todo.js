import Route from '@ember/routing/route';

export default class TodoRoute extends Route {
    model() {
        return [
            { task: "Study Ember JS", is_completed: false },
            { task: "Rest", is_completed: false },
            { task: "Revise", is_completed: false }
        ]
    }
}
