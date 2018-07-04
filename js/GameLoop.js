class GameLoop
{
    constructor(callback)
    {
        this.callback = callback;
        this.tickBound = this.tick.bind(this);
    }

    start()
    {
        this.then = Date.now();
        if (this.animationFrameHandle) this.stop();
        this.animationFrameHandle = requestAnimationFrame(this.tickBound);
    }

    stop()
    {
        if (!this.animationFrameHandle) return;
        cancelAnimationFrame(this.animationFrameHandle);
        this.animationFrameHandle = null;
    }

    tick()
    {
        this.animationFrameHandle = requestAnimationFrame(this.tickBound);
        let now = Date.now();
        let dt = now - this.then;
        this.callback(dt);
        this.then = now;
    }
}