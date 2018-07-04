class SystemManager
{
    constructor()
    {
        this.systems = [
            new SceneManagementSystem(1),
            new EntityPopulationSystem(0)
        ]

        this.initEvents();
        this.initSystems();
    }

    initEvents()
    {
        this.subscribedEventTypes = {};
        for (let system of this.systems)
            this.initSystemEvents(system);
    }

    initSystems()
    {
        this.events = [];
        for (let system of this.systems)
            this.events.push(...(system.init() || []));
        
        this.updateEvents();
    }

    initSystemEvents(system)
    {
        for (let eventType of system.subscribedEventTypes)
        {
            eventType = eventType.name;
            if (!this.subscribedEventTypes[eventType]) this.subscribedEventTypes[eventType] = [];
            this.subscribedEventTypes[eventType].push(system);
        }
    }

    update(dt)
    {
        this.updateSystems(dt);
        this.updateEvents();
    }

    updateSystems(dt)
    {
        this.events = [];
        for (let system of this.systems)
            this.events.push(...((system.requestUpdate(dt)) || []));
    }

    updateEvents()
    {
        for (let event of this.events)
        {
            for (let system of (this.subscribedEventTypes[event.constructor.name] || []))
                system["handle" + Utilities.capitilizeFirstLetter(event.constructor.name)](event);
        }
    }
};