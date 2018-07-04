let EntityManager = new (class
{
    constructor()
    {
        this.entities = [];
    }

    newEntity(components, prefab)
    {
        let entity = new Entity(components, prefab);
        this.entities.push(entity);
    }
    
    destroyAllEntities()
    {
        this.entities = [];
    }
})();