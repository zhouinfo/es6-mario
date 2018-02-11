import Timer from './Timer.js';
import Camera from './Camera.js';
// import Entity from './Entity.js'
// import PlayerController from './traits/PlayerController.js'
import {createLevelLoader} from './loaders/level.js';
import {loadEntities} from './entities.js';
import {createCollisionLayer, createCameraLayer} from './layers.js';
import {setupKeyboard} from './input.js';
// import {setupMouseControl} from './debug.js'



async function main(canvas) {
    const context = canvas.getContext('2d');

    const entityFactory = await loadEntities();
    const loadLevel = await createLevelLoader(entityFactory);
    const level = await loadLevel('1-1');

    const camera = new Camera();

    const mario = entityFactory.mario();
    mario.pos.set(64, 100);
    level.entities.add(mario);

    const input = setupKeyboard(mario);
    input.listenTo(window);

    /*Debug Tools : */

    level.comp.layers.push(
        createCollisionLayer(level),
        createCameraLayer(camera));

    // setupMouseControl(canvas, mario, camera);


    const timer = new Timer(1/60);

    timer.update = function update(deltaTime) {
        level.update(deltaTime);

        camera.pos.x = Math.max(0, mario.pos.x - 100);

        level.comp.draw(context, camera);
    };

    timer.start();
}


const canvas = document.getElementById('screen');
main(canvas);

