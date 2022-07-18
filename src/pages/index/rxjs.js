import { Observable, of, pipe, map, merge } from 'rxjs'

export default () => {
    // const observable$ = Observable.create(subscriber=>{
    //     setTimeout(() => {
    //         subscriber.next(1)
    //     }, 2000);
    //     setTimeout(() => {
    //         subscriber.next(2)
    //     }, 4000);
    // })

    // const subscribtion1 = observable$.subscribe({
    //     next(e){
    //         console.log('next '+e);
    //     },
    // })

    const a = of(1,2,3)
        // .pipe(
        //     // map((e) => e*2),
        //     // map((e) => e+100),
        //     // merge(of(3, 1), of(4, 1))
            
        // )
    // .subscribe(data=>{
    //     console.log('subscribe:');
    //     console.log(data)
    // })
    // const ob2$ = of(2)
    // const ob3$ = of(3)
    // const obMerge$ = merge()
    // merge(of(3,1),of(4,1)).subscribe(e=>console.log(e))
}

