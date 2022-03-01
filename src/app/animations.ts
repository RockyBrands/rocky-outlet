import { animate, AnimationTriggerMetadata, state, style, transition, trigger } from '@angular/animations';

// Component transition animations
export const slideInDownAnimation: AnimationTriggerMetadata =
  trigger('routeAnimation', [
    state('*',
      style({
        opacity: 1
      })
    ),
    transition(':enter', [
      style({
        opacity: 0
      }),
      animate('0.5s linear')
    ]),
    transition(':leave', [
      animate('0.2s linear', style({
        opacity: 0
      }))
    ])
  ]);
