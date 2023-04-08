import { animate, state, style, transition, trigger } from "@angular/animations";

export const Pulse = trigger('pulse', [
    state('normal', style({ transform: 'scale(1)' })),
    state('pulse', style({ transform: 'scale(1.05)' })),
    transition('normal <=> pulse', animate('0.2s ease-in-out')),
]);