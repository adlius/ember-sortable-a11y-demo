import Route from '@ember/routing/route';

export default class DemoRoute extends Route {
    model() {
        return [
            'item1',
            'item2',
            'item3',
        ]
    }
}
