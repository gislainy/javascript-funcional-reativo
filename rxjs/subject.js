const { Observable, Subject } = require('rxjs')

function getObservable() {
    return new Observable(subscriber => {
        setTimeout(() => {
            console.log('Obs #1')
            subscriber.next(Math.random())
            subscriber.complete();
        }, 100);
    })
}
function getSubject() {
    const sub = new Subject();
    setTimeout(() => {
        console.log('Sub #1')
        sub.next(Math.random());
        sub.complete();
    }, 100);
    return sub;
}

const obs = getObservable();
obs.subscribe(console.log)
obs.subscribe(console.log)

const sub = getSubject();
sub.subscribe(console.log)
sub.subscribe(console.log)