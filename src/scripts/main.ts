import { Observable } from 'rxjs';

export const CONTAINER_ID = 'full-image-background';
export const HIDE_CLASS = 'hide';
export const IMAGE_URL = 'http://lorempixel.com/400/400/';
export const TIME_OUT = 7500;

export class Main {
  private container: HTMLElement;
  private elements: HTMLElement[];

  constructor() {
    this.container = document.getElementById(CONTAINER_ID);
    this.elements = [];

    this.createImageElements();

    Observable.interval((TIME_OUT / 2)).subscribe(x => {
      (x % 2 === 0) ? this.setBackgroundImage() : this.swapImages();
    });
  }

  private createImageElements(): void {
    const ele1 = document.createElement('div');
    ele1.classList.add(HIDE_CLASS);
    this.container.appendChild(ele1);
    this.elements.push(ele1);
    const ele2  = document.createElement('div');
    this.container.appendChild(ele2);
    this.elements.push(ele2);
  }

  private swapImages(): void {
    this.elements.forEach(ele => {
      ele.classList.contains(HIDE_CLASS) ? ele.classList.remove(HIDE_CLASS) : ele.classList.add(HIDE_CLASS);
    });
  }

  private setBackgroundImage(): void {
    this.elements.filter(ele => ele.classList.contains(HIDE_CLASS))
      .forEach(ele => {
        ele.style.backgroundImage = `url("${IMAGE_URL}?${(new Date()).getTime()}")`;
      });
  }
}
