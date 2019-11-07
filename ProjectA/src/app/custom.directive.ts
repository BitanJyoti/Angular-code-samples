import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private elRef : ElementRef) {

    this.elRef.nativeElement.style.backgroundColor = "orange";
    this.elRef.nativeElement.style.padding = "100px";
    this.elRef.nativeElement.style.margin = "100px"

   }

   @HostListener('mouseenter') a(){
     this.elRef.nativeElement.style.background = "pink";
     this.elRef.nativeElement.style.color = "green";
   }
   @HostListener('mouseleave') b(){
    this.elRef.nativeElement.style.background = "skyblue";
    this.elRef.nativeElement.style.color = "purple";
   }

}
