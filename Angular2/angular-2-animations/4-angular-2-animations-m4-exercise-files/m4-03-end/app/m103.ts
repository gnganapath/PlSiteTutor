import { Component,
      trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
Input } from '@angular/core';

@Component({
    selector: 'my-app',
    template: `<button [@myTrigger]='state' (click)='toggleState()'>My Button</button>`,
    styles: [],
    animations: [
    trigger('myTrigger', [
        state('small', style({
            transform: 'scale(1)'
        })),
        state('large',   style({
            transform: 'scale(1.2)'
        })),
        transition('small => large', animate('500ms ease-in')),
        transition('large => small', animate('500ms ease-out'))
        ])
    ]
})
export class AppComponent { 
    state: string = 'small';

    toggleState() {
        this.state = (this.state === 'small' ? 'large' : 'small');
    }
}
