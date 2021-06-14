import { trigger, animate, style, transition, state } from '@angular/animations';

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

const openAnalysisAnimation = trigger(
    'openAnalysisAnimation', [
    state('open', style({ 'grid-template-columns': '3fr 1fr' })),
    state('close', style({ 'grid-template-columns': '1fr' })),
    transition('close => open', animate('500ms')),
    transition('open => close', animate('300ms'))
]);

const dashboardAnimation = trigger(
    'dashboardAnimation', [
    state('small', style({ /* transform: 'translateX(0)' */ })),
    transition('small => full', [
        animate('300ms', style({ transform: 'translateX(-110%)', opacity: 1 }))
    ]),
    state('full', style({ /* transform: 'translateX(0)'  */ })),
    transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 1 }),
        animate('300ms', style({ transform: 'translateY(0)', opacity: 0 }))
    ])
]);

export const newspaperDetailAnimations = [
    analysisAnimation,
    dashboardAnimation,
    openAnalysisAnimation,
];
