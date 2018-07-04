class MainMenuScene
{
    static load()
    {
        return [new CreateEntityEvent()];
    }

    static unload()
    {
        return [new DestroyAllEntitiesEvent()];
    }
}