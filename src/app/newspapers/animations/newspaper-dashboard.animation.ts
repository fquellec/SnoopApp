import { trigger, animate, style, transition } from '@angular/animations';

const analysisAnimation = trigger(
    'analysisAnimation', [
    transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('300ms', style({ transform: 'translateX(-100%)', opacity: 0 }))
    ])
]);

const dashboardAnimation = trigger(
    'dashboardAnimation', [
    transition(':enter', [
        style({ transform: 'translateX(100%)', opacity: 0 }),
        animate('500ms', style({ transform: 'translateX(0)', opacity: 1 }))
    ]),
    transition(':leave', [
        style({ transform: 'translateX(0)', opacity: 1 }),
        animate('300ms', style({ transform: 'translateX(100%)', opacity: 0 }))
    ])
]);

export const newspaperDetailAnimations = [
    analysisAnimation,
    dashboardAnimation,
];
