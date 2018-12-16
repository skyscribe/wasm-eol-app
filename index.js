import { get_universe } from "wasm-game-of-life";

const pre = document.getElementById("game-of-life-canvas");
const universe = get_universe();

const renderLoop = () => {
    pre.textContent = universe.render();
    universe.tick();
    requestAnimationFrame(renderLoop);
}

requestAnimationFrame(renderLoop);
