const { from, Observable } = require("rxjs");


function first() {
    return function (source) {
        return Observable.create(subscriber => {
            source.subscribe({
                next(v) {
                    subscriber.next(v);
                    subscriber.complete();
                }
            });
        });
    }
}

function last() {
    return function (source) {
        return Observable.create(subscriber => {
            let lastValue = null;
            source.subscribe({
                next(v) {
                    lastValue = v;
                },
                complete (v) {
                    if (lastValue) {
                        subscriber.next(lastValue);
                    }
                    subscriber.complete();
                }
            })
        });
    }
}

from([1,2,3,4,5,6])
    .pipe(
        last()
    )
    .subscribe(console.log)