class EntityPopulationSystem extends System
{
    constructor(fps)
    {
        super(fps, [
            CreateEntityEvent,
            DestroyAllEntitiesEvent
        ]);
    }

    update()
    {

    }

    handleCreateEntityEvent(event)
    {
        console.log("creating entity")
    }

    handleDestroyAllEntitiesEvent(event)
    {
        console.log("destroying entities");
    }
}