import { animate, AnimationEvent, state, style, transition, trigger } from '@angular/animations';
import { ConfigurableFocusTrapFactory, FocusTrap } from '@angular/cdk/a11y';
import {
    AfterViewInit,
    Component,
    ElementRef,
    EventEmitter,
    HostBinding,
    HostListener,
    OnDestroy,
    OnInit,
    TemplateRef,
} from '@angular/core';
import { DrawerContent, PmeDrawerRef } from './drawer-ref';
import { NgSwitch, NgSwitchCase, NgTemplateOutlet, NgComponentOutlet } from '@angular/common';

const ANIMATION_TIMINGS = '400ms cubic-bezier(0.25, 0.8, 0.25, 1)';

@Component({
    templateUrl: './drawer.component.html',
    styleUrls: ['./drawer.component.scss'],
    animations: [
        trigger('slideContent', [
            // We remove the `transform` here completely, rather than setting it to zero, because:
            // 1. Having a transform can cause elements with ripples or an animated
            //    transform to shift around in Chrome with an RTL layout (see #10023).
            // 2. 3d transforms causes text to appear blurry on IE and Edge.
            state('enter', style({
                transform: 'none',
                visibility: 'visible',
            })),
            state('leave, void', style({
                // Avoids the shadow showing up when closed in SSR.
                transform: 'translate3d(100%, 0, 0)',
                visibility: 'hidden',
            })),
            transition('* => *', animate(ANIMATION_TIMINGS)),
        ]),
    ],
    standalone: true,
    imports: [
        NgSwitch,
        NgSwitchCase,
        NgTemplateOutlet,
        NgComponentOutlet,
    ],
})
export class PmeDrawerComponent implements OnInit, AfterViewInit, OnDestroy {
    @HostBinding('@slideContent') animationState: 'void' | 'enter' | 'leave' = 'enter';

    @HostListener('@slideContent.start', ['$event']) onAnimationStart(event: AnimationEvent) {
        this.animationStateChanged.emit(event);
    }

    @HostListener('@slideContent.done', ['$event']) onAnimationDone(event: AnimationEvent) {
        this.animationStateChanged.emit(event);
    }

    renderMethod: 'template' | 'component' = 'component';
    content: DrawerContent | any;
    context: any;
    animationStateChanged = new EventEmitter<AnimationEvent>();

    private focusTrap: FocusTrap;

    constructor(
        private ref: PmeDrawerRef,
        private elementRef: ElementRef<HTMLElement>,
        private focusTrapFactory: ConfigurableFocusTrapFactory
    ) {}

    ngOnInit() {
        this.content = this.ref.content;

        if (this.content instanceof TemplateRef) {
            this.renderMethod = 'template';
            this.context = {
                close: this.ref.close.bind(this.ref),
            };
        }
    }

    ngAfterViewInit() {
        this.focusTrap = this.focusTrapFactory.create(this.elementRef.nativeElement);
        this.takeFocus();
    }

    startExitAnimation() {
        this.animationState = 'leave';
    }

    ngOnDestroy() {
        if (this.focusTrap) {
            this.focusTrap.destroy();
        }
    }

    private takeFocus() {
        if (!this.focusTrap) {
            return;
        }

        this.focusTrap.focusInitialElementWhenReady().then((hasMovedFocus) => {
            // If there were no focusable elements, focus the sidenav itself so the keyboard navigation
            // still works. We need to check that `focus` is a function due to Universal.
            if (!hasMovedFocus && typeof this.elementRef.nativeElement.focus === 'function') {
                this.elementRef.nativeElement.focus();
            }
        });
    }
}
