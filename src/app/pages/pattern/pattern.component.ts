import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pattern',
  templateUrl: './pattern.component.html',
  styleUrls: ['./pattern.component.css'],
})
export class PatternComponent implements OnInit {
  value = 0;

  // 3.1
  patternI(value:string) {
    const n = Number(value);
    let star: string = '';
    for (let i = 0; i <= n; i++) {
      for (let j = 0; j < i; j++){
        star += '*';
      }
      star += '\n';
    }
    window.alert(star);
  }

  // 3.2
  patternII(value:string) {
    const n = Number(value);
    let star: string = '';
    for (let i = 1; i <= n; i++) {
      for (let j = 0; j < n - i; j++) {
        star += ' ';
      }
      for (let k = 0; k < i; k++) {
        star += '*';
      }
      star += '\n';
    }
    window.alert(star);
  }

  // 3.3
  patternIII(value:string) {
    const n = Number(value);
    let star: string = '';
    for (let i = 0; i < n; i++) {
      for (let j = 1; j <= n - i; j++) {
        star += ' ';
      }
      for (let k = 0; k < 2 * i - 1; k++) {
        if (i === 1) {
          star += '*';
        } else {
          if (k === 0 || k === 2 * i - 2) {
            star += '*';
          } else {
            star += ' ';
          }
        }
      }
      star += '\n';
    }
    window.alert(star);
  }

  //3.4
  patternIV(value:string) {
    const n = Number(value);
    let star: string = '';
    for (let i = 0; i <= n + 1; i++) {
      for (let j = 0; j <= n + 1; j++) {
        if (i == j || i + j == n + 1) {
          star += '*';
        } else {
          star += ' ';
        }
      }
      star += '\n';
    }
    window.alert(star);
  }

  // 3.5
  patternV(value:string) {
    const n = Number(value);
    let star: string = '';
    for (let i = 1; i <= n; i++) {
      for (let j = n; j > i; j--) {
        star += ' ';
      }
      for (let k = 0; k < i * 2 - 1; k++) {
        star += '*';
      }
      star += '\n';
    }
    for (let i = 1; i <= n - 1; i++) {
      for (let j = 0; j < i; j++) {
        star += ' ';
      }
      for (let k = (n - i) * 2 - 1; k > 0; k--) {
        star += '*';
      }
      star += '\n';
    }
    window.alert(star);
  }

  //3.6
  patternVI(value:string) {
    const n = Number(value);
    let star: string = '';
    let k: number = n;
    let p: number = 1;
    if (n == 1) {
      star += '+';
    } else {
      for (let i: number = 0; i < n; i++) {
        for (let a: number = 1; a < k; a++) {
          star += 'A';
        }
        if (i == 0) {
          star += '+';
        } else {
          star += '+';
          for (let e: number = 0; e < p; e++) {
            star += 'E';
          }
          p += 2;
          star += '+';
        }
        for (let b: number = 1; b < k; b++) {
          star += 'B';
        }
        star += '\n';
        k -= 1;
      }
      for (let j: number = 1; j < n; j++) {
        for (let c: number = -2; c < k - 1; c++) {
          star += 'C';
        }
        if (j == n - 1) {
          star += '+';
        } else {
          p -= 2;
          star += '+';
          for (let e: number = 1; e < p - 1; e++) {
            star += 'E';
          }
          star += '+';
          k += 1;
        }
        for (let d: number = 0; d < j; d++) {
          star += 'D';
        }
        star += '\n';
      }
    }
    window.alert(star);
  }

  constructor() {}

  ngOnInit(): void {}
}
