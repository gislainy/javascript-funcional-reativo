const { timer, Subscription } = require("rxjs");

const obs = timer(3000, 500);


const sub1 = obs.subscribe(num => {
    console.log(`#1 gerou ${num}`)
});

const sub2 = obs.subscribe(num => {
    console.log(`#2 gerou ${num}`)
});

const sub = new Subscription();
sub.add(sub1)
sub.add(sub2)

setTimeout(() => {
    sub.unsubscribe();
    // sub2.unsubscribe();
}, 5000);