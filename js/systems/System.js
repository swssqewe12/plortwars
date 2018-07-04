class System
{
    constructor(fps)
    {
        this.clock = new Clock(fps, this.update.bind(this));
    }

    requestUpdate(dt)
    {
        this.clock.requestTick(dt);
    }
}