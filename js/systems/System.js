class System
{
    constructor(fps, events = [])
    {
        this.fps = fps;
        this.subscribedEventTypes = events;
        if (this.fps > 0) this.clock = new Clock(fps, this.update.bind(this));
    }

    init() {}

    requestUpdate(dt)
    {
        if (this.fps > 0) return this.clock.requestTick(dt);
    }
}