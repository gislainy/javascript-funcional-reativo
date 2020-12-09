const { from, Observable } = require("rxjs");

function createPipeableOperator (operatorFn) {
    return function (source) {
        return Observable.create(subscriber => {
            const sub = operatorFn(subscriber);
            source.subscribe({
                next: sub.next,
                error: sub.error || (e => subscriber.error(e)),
                complete: sub.complete || (() => subscriber.complete())
            });
        });
    }
}

function first () {
    return createPipeableOperator(subscriber => (
        {
            next (v) {
                subscriber.next(v);
                subscriber.complete();
            }
        }
    ));
}

function last () {
    let lastValue = null;
    return createPipeableOperator(subscriber => (
        {
            next (v) {
                lastValue = v;
            },
            complete (v) {
                if (lastValue) {
                    subscriber.next(lastValue);
                }
                subscriber.complete();
            }
        }
    ));
}


from([1, 2, 3, 4, 5, 6])
    .pipe(
        // first(),
        last()
    )
    .subscribe(console.log)