import { consola } from "consola";
import pm from './pm';

consola.start('Hello World!')
consola.start('I love UNjs!');

const yarn = pm.yarn;

(async () => {

    const response = await yarn.install();

    if (response) {
        consola.success('yarn installed!');
    } else {
        consola.error('error installing yarn!');
    }

})();
