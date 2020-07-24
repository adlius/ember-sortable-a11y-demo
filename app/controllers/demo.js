import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class DemoController extends Controller {
    @action
    reorder(newOrder, item) {
        console.log(newOrder);
        console.log(item);
    }
}
