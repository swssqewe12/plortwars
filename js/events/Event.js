class Event
{
    static populate(event, data={})
    {
        for (let prop of Object.keys(event))
            if (event[prop] === null && !data.hasOwnProperty(prop)) throw "[Event population] " + event.constructor.name + " requires property '" + prop + "'"

        for (let prop of Object.keys(data))
            event[prop] = data[prop];
    }
}