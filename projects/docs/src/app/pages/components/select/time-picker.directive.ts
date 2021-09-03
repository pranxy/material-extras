import { Directive, HostListener, ViewContainerRef } from '@angular/core';

@Directive({
    selector: '[appTimePicker]',
})
export class TimePickerDirective {
    constructor(public viewContainerRef: ViewContainerRef) {}

    @HostListener('click', ['$event'])
    onClick(e) {
        console.log(e);

        const ele = this.viewContainerRef.element.nativeElement;
        const time = ele.value;
        const theme = ele.getAttribute('theme');
        const start = ele.getAttribute('start');
        const end = ele.getAttribute('end');
        const locale = ele.getAttribute('locale') || 'en';
        const changeToMinutes = ele.getAttribute('changeToMinutes') === 'true';
        const animation = ele.getAttribute('animation');
        const preference = ele.getAttribute('preference') || null;
        const onlyHour = ele.getAttribute('onlyHour') === 'true';
        const onlyMinute = ele.getAttribute('onlyMinute') === 'true';
        const onlyAM = ele.getAttribute('onlyAM') === 'true';
        const onlyPM = ele.getAttribute('onlyPM') === 'true';
    }
}
