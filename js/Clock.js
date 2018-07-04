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
        this.dt += dt;

        if (this.dt >= (this.target_dt - this.target_dt_offset))
        {
            let dt = this.dt
            this.target_dt_offset = this.dt % this.target_dt;
            this.dt = 0;
            this.callback(dt);
        }
    }
}