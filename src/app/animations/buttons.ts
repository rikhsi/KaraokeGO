import { animate, state, style, transition, trigger } from "@angular/animations";

export const Pulse = trigger('pulse', [
    state('normal', style({ transform: 'scale(1)' })),
    state('pulse', style({ transform: 'scale(1.05)' })),
    transition('normal <=> pulse', animate('0.2s ease-in-out')),
]);

export const plus = trigger('plus', [
    state('void', style({ transform: 'rotate(-360deg)' })),
    transition('void <=> *', animate('400ms ease-out')),
])

export const minus = trigger('minus', [
    transition(':enter', [
        style({ display: 'none' }),
        animate('400ms', style({ display: 'inline-block' }))
    ]),
    transition(':leave', [
        animate('0ms', style({ display: 'none' }))
    ])
]);