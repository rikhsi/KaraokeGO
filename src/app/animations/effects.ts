import { trigger, style, transition, animate} from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [
        style({ opacity: 0, height: 0 }),
        animate('700ms', style({ height: '*', opacity: 1 }))
    ]),
    transition(':leave', [
        animate('300ms', style({ height: 0 , opacity: 0}))
    ])
]);