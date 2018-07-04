let SceneManager = new (class
{
    changeScene(newScene)
    {
        if (this.currentScene) this.currentScene.unload();
        this.currentScene = newScene;
        this.currentScene.load();
    }
})();