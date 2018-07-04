class Entity
{
    constructor(components, prefab)
    {
        this.components = {};

        for (let component of components)
            this.components[component.type] = component;
    }
}