import { Observable } from 'rxjs';
import { Constants } from './constants';

export class Main {
  private static CONTAINER_ID = 'full-image-background';
  private static HIDE_CLASS = 'hide';
  private static IMAGE_URL = Constants.API_URL + Constants.IMAGE_PATH;

  private container: HTMLElement;
  private elements: HTMLElement[];

  constructor() {
    this.container = document.getElementById(Main.CONTAINER_ID);
    this.elements = [];

    this.createImageElements();

    Observable.timer(0, (Constants.TIME_OUT / 2)).subscribe(x => {
      (x % 2 === 0) ? this.setBackgroundImage() : this.swapImages();
    });
  }

  private createImageElements(): void {
    const ele1 = document.createElement('div');
    ele1.style.backgroundImage = `url("${Main.IMAGE_URL}?${(new Date()).getTime()}")`;
    ele1.classList.add(Main.HIDE_CLASS);
    this.container.appendChild(ele1);
    this.elements.push(ele1);
    const ele2  = document.createElement('div');
    ele2.style.backgroundImage = `url("${Main.IMAGE_URL}?${(new Date()).getTime()}")`;
    this.container.appendChild(ele2);
    this.elements.push(ele2);
  }

  private swapImages(): void {
    this.elements.forEach(ele => {
      ele.classList.contains(Main.HIDE_CLASS) ?
        ele.classList.remove(Main.HIDE_CLASS) :
        ele.classList.add(Main.HIDE_CLASS);
    });
  }

  private setBackgroundImage(): void {
    this.elements.filter(ele => ele.classList.contains(Main.HIDE_CLASS))
      .forEach(ele => {
        ele.style.backgroundImage = `url("${Main.IMAGE_URL}?${(new Date()).getTime()}")`;
      });
  }
}
