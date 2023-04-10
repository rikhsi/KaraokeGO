import { trigger, style, transition, animate, keyframes, state} from '@angular/animations';

export const fadeInOut = trigger('fadeInOut', [
    transition(':enter', [
        style({ opacity: 0 }),
        animate('700ms', style({ opacity: 1 }))
    ]),
    transition(':leave', [
        animate('200ms', style({ opacity: 0 }))
    ])
]);
