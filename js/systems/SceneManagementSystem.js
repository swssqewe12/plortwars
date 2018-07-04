class SceneManagementSystem extends System
{
    constructor(fps)
    {
        super(fps);
        this.currentScene;
    }

    init()
    {
        this.events = [];
        this.loadScene(MainMenuScene);
        return this.events;
    }

    update(dt)
    {
        this.events = [];
        return this.events;
    }

    loadScene(scene)
    {
        if (this.currentScene) this.events.push(this.currentScene.unload());
        this.events.push(...scene.load());
        this.currentScene = scene;
    }
}