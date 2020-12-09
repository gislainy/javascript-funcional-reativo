const { Observable } = require(`rxjs`)

const promise = new Promise(resolve => {
    resolve(`Promise`)
})

promise.then(console.log)

const obs = new Observable(subscribe => {
    subscribe.next(`Observer 1`)
    subscribe.next(`Observer 2`)
    subscribe.complete()
})

obs.subscribe(console.log)
obs.subscribe((text) => console.log(text.toUpperCase()))

const obs$ = Observable.create((subscriber) => {
    subscriber.next(`Observer Create`)

    if(Math.random() > 0.5) {
        subscriber.complete()
    } else {
        subscriber.error(`Que problema?`)
    }
})

obs$.subscribe