const { Observable } = require("rxjs");

function ofWithDelay (time, ...args) {
    return Observable.create(sub => {
        (args || []).forEach((el, i) => {
            setTimeout(() => {
                sub.next(el);
                if (args.length === i + 1) sub.complete();
            }, time * (i + 1))
        })
    })
}

ofWithDelay(1000, 1,2,3).subscribe(console.log)