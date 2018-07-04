class CreateEntityEvent
{
    constructor(data)
    {
        this.components = [];
        this.prefab;

        Event.populate(this, data);
    }
}