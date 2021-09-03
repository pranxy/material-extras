import { Overlay, OverlayConfig, OverlayRef } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
import { ComponentRef, Injectable, Injector, TemplateRef } from '@angular/core';
import { DrawerContent, PmeDrawerRef } from './drawer-ref';
import { PmeDrawerComponent } from './drawer.component';
import { PME_DRAWER_DATA } from './drawer.tokens';

export type PmeDrawerParams<T> = {
    hasBackdrop?: boolean;
    backdropClass?: 'string';
    maxWidth?: string | number;
    width?: string | number;
    data?: T;
};

const DEFAULT_CONFIG = {
    hasBackdrop: true,
    backdropClass: 'drawer-overlay',
    maxWidth: '100%',
    width: '54em',
    height: '100%',
};

@Injectable()
export class PmeDrawerService {
    constructor(private injector: Injector, private overlay: Overlay) {}

    open<T = any>(content: DrawerContent, config?: PmeDrawerParams<T>): PmeDrawerRef<T> {
        const dialogConfig = { ...DEFAULT_CONFIG, ...config };

        const overlayRef = this.createOverlay(dialogConfig);

        const drawerRef = new PmeDrawerRef(overlayRef, content, dialogConfig.data);

        if (content instanceof TemplateRef) {
            throw Error(`This feature is not supported yet. (Component built from TemplateRef)`);
        } else {
            const overlayComponent = this.attachDialogContainer<T>(
                overlayRef,
                drawerRef,
                dialogConfig
            );

            // Pass the instance of the overlay component to the remote control
            drawerRef.componentInstance = overlayComponent;
        }

        overlayRef.backdropClick().subscribe(_ => drawerRef.close());

        return drawerRef;
    }

    private createOverlay(config: any): OverlayRef {
        const overlayConfig = this.getOverlayConfig(config);

        return this.overlay.create(overlayConfig);
    }

    private attachDialogContainer<T>(
        overlayRef: OverlayRef,
        drawerRef: PmeDrawerRef,
        dialogConfig
    ): PmeDrawerComponent {
        const injector = this.createInjector(drawerRef, dialogConfig);

        const containerPortal = new ComponentPortal(PmeDrawerComponent, null, injector);
        const containerRef: ComponentRef<PmeDrawerComponent> = overlayRef.attach(containerPortal);

        return containerRef.instance;
    }

    private getOverlayConfig(config: any): OverlayConfig {
        const positionStrategy = this.overlay.position().global().right().top().bottom();

        const overlayConfig = new OverlayConfig({
            hasBackdrop: config.hasBackdrop,
            backdropClass: config.backdropClass,
            maxWidth: config.maxWidth,
            width: config.width,
            height: config.height,
            //   panelClass: config.panelClass,
            scrollStrategy: this.overlay.scrollStrategies.block(),
            positionStrategy,
        });

        return overlayConfig;
    }

    private createInjector(drawerRef: PmeDrawerRef, config): Injector {
        const providers = [
            { provide: PmeDrawerRef, useValue: drawerRef },
            {
                provide: PME_DRAWER_DATA,
                useValue: config,
            },
        ];

        return Injector.create({
            parent: this.injector,
            providers,
        });
    }
}
