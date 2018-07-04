class Game
{
    constructor(canvas)
    {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
        this.gameLoop = new GameLoop(this.update.bind(this));
        setTimeout(()=>this.gameLoop.start(), 1000);

        SceneManager.loadScene(MainMenuScene);
    }

    update(dt)
    {
        SystemManager.update(dt);
    }
}