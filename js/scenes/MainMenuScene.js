let MainMenuScene = new (class
{
    load()
    {
        EntityManager.newEntity([
            new TransformComponent({
                "pos": new Vector(0, 0),
                "posMode": "absolute"
            }),
            new ButtonComponent({
                "text": "Play"
            })
        ]);
    }

    unload()
    {
        EntityManager.destroyAllEntities();
    }
})();