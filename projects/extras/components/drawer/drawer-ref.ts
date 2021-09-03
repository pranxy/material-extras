import { AnimationEvent } from '@angular/animations';
import { OverlayRef } from '@angular/cdk/overlay';
import { TemplateRef, Type } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { filter, take } from 'rxjs/operators';
import { PmeDrawerComponent } from './drawer.component';

export interface OverlayCloseEvent<R> {
    type: 'backdropClick' | 'close';
    data: R;
}

export type DrawerContent = TemplateRef<any> | Type<any> | string;

// R = Response Data Type
export class PmeDrawerRef<R = any> {
    componentInstance: PmeDrawerComponent;

    private beforeClose$ = new Subject<void>();
    private afterClosed$ = new Subject<OverlayCloseEvent<R>>();

    constructor(public overlayRef: OverlayRef, public content: DrawerContent, public data: R) {}

    afterClosed(): Observable<OverlayCloseEvent<R>> {
        return this.afterClosed$.asObservable();
    }

    beforeClose(): Observable<void> {
        return this.beforeClose$.asObservable();
    }

    close(data?: R) {
        this.componentInstance.animationStateChanged
            .pipe(
                filter(event => event.phaseName === 'start'),
                take(1)
            )
            .subscribe(() => {
                this.beforeClose$.next();
                this.beforeClose$.complete();
                this.overlayRef.detachBackdrop();
            });
        // Listen for animation 'done' events
        this.componentInstance.animationStateChanged
            .pipe(
                filter(
                    (event: AnimationEvent) =>
                        event.phaseName === 'done' && event.toState === 'leave'
                ),
                take(1)
            )
            .subscribe(() => {
                this.emitClose('close', data);

                // Make sure to also clear the reference to the
                // component instance to avoid memory leaks
                this.componentInstance = null;
            });

        this.componentInstance.startExitAnimation();
    }

    private emitClose(type: 'backdropClick' | 'close', data: R) {
        this.overlayRef.dispose();
        this.afterClosed$.next({
            type,
            data,
        });

        this.afterClosed$.complete();
    }
}
