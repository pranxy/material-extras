import { ConnectionPositionPair, Overlay, OverlayRef } from '@angular/cdk/overlay';
import { TemplatePortal } from '@angular/cdk/portal';
import {
    Component,
    Directive,
    ElementRef,
    HostListener,
    Input,
    OnDestroy,
    OnInit,
    TemplateRef,
    ViewContainerRef,
} from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Directive({
    selector: '[popoverTrigger]',
})
export class PmePopover implements OnInit, OnDestroy {
    @Input() popoverTrigger!: TemplateRef<object>;

    @HostListener('click') clicked() {
        console.log('hello');

        this.attachOverlay();
    }

    private unsubscribe = new Subject();
    private overlayRef!: OverlayRef;

    constructor(
        private elementRef: ElementRef,
        private overlay: Overlay,
        private vcr: ViewContainerRef
    ) {}

    ngOnInit() {
        this.createOverlay();
    }

    ngOnDestroy(): void {
        this.detachOverlay();
        this.unsubscribe.next();
        this.unsubscribe.complete();
    }

    private createOverlay(): void {
        const scrollStrategy = this.overlay.scrollStrategies.block();
        const positionStrategy = this.overlay
            .position()
            .flexibleConnectedTo(this.elementRef)
            .withPositions([
                new ConnectionPositionPair(
                    { originX: 'start', originY: 'bottom' },
                    { overlayX: 'start', overlayY: 'top' }
                ),
                new ConnectionPositionPair(
                    { originX: 'start', originY: 'bottom' },
                    { overlayX: 'start', overlayY: 'bottom' }
                ),
            ]);

        this.overlayRef = this.overlay.create({
            positionStrategy,
            scrollStrategy,
            hasBackdrop: true,
            backdropClass: '',
        });

        this.overlayRef
            .backdropClick()
            .pipe(takeUntil(this.unsubscribe))
            .subscribe(() => {
                this.detachOverlay();
            });
    }

    private attachOverlay(): void {
        if (!this.overlayRef.hasAttached()) {
            const periodSelectorPortal = new TemplatePortal(this.popoverTrigger, this.vcr);

            this.overlayRef.attach(periodSelectorPortal);
        }
    }

    private detachOverlay(): void {
        if (this.overlayRef.hasAttached()) {
            this.overlayRef.detach();
        }
    }
}
