class Game
{
    constructor(canvas)
    {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.systemManager = new SystemManager();
        this.gameLoop = new GameLoop(this.update.bind(this));
        this.gameLoop.start();
    }

    update(dt)
    {
        this.systemManager.update(dt);
    }
}