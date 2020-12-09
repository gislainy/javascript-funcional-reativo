const { of, Observable } = require('rxjs');

function terminadoCom(parteFinal) {
    return function (source) {
        return Observable.create(subscriber => {
            source.subscribe({
                next(v) {
                    if (Array.isArray(v)) {
                        subscriber.next(v.filter(
                            el => el.endsWith(parteFinal)
                        ));
                    }
                    else if (v.endsWith(parteFinal)) {
                        subscriber.next(v);
                    }
                },
                error(e) {
                    subscriber.error(e);
                },
                complete() {
                    subscriber.complete()
                }
            })
        })
    }
}

of(['Ana Silva', 'Maria Silva', 'Pedro Rocha'])
    .pipe(
        terminadoCom('Silva')
    )
    .subscribe(console.log)