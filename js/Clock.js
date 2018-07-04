class Clock
{
    constructor(fps, callback)
    {
        this.target_dt = 1000 / fps;
        this.target_dt_offset = 0;
        this.callback = callback;
        this.dt = 0;
    }

    requestTick(dt)
    {
        dt = this.dt += dt;

        if (dt >= (this.target_dt - this.target_dt_offset))
        {
            this.dt = 0;
            this.target_dt_offset = dt % this.target_dt;
            return this.callback(dt);
        }
    }
}