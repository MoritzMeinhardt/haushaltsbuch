import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SplitInputToArgService {

  constructor() { }

  splitInputToArg(input: string): string[] {
    return input.split(' ');
  }
}
