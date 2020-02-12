import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appScroll]'
})
export class ScrollDirective {

  @HostBinding('style.display') display='none';

  @HostListener('click') onClick() {
    console.log('click')
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 300;
  }
  // @HostListener('scroll') onScroll() {
  //   console.log('scroll')
  // }
  @HostListener('window:scroll', ['$event']) onScroll($event:Event):void {
    // console.log(document.body.scrollTop);
    // console.log(document.body.scroll);

    console.log(document.documentElement.scrollTop);
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 645) {
      this.display = "block";
    } else {
      this.display = "none";
    }
  };
@HostBinding('style.border') border;
  constructor(
    elementRef:ElementRef
  ) { 
    this.border = '10px solid green';
    console.log("scroll")
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.display = 'block';

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      this.display = "block";
    } else {
      this.display = "none";
    }
  }



}
