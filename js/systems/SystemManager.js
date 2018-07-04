let SystemManager = new (class
{
    constructor()
    {
        this.systems = [
            new RenderSystem(60)
        ]
    }

    update(dt)
    {
        for (let system of this.systems)
            system.requestUpdate(dt);
    }
})();