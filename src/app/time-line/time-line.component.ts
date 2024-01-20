import { Component, Input } from '@angular/core'
import { ActivatedRoute, ParamMap } from '@angular/router'

@Component({
  selector: 'app-time-line',
  templateUrl: './time-line.component.html',
  styleUrl: './time-line.component.css'
})
export class TimeLineComponent {
  level?: string;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.level = this.route.snapshot.params['level'];
  }

  monthSelect(monthId: string): void {
    const monthIdDiv =  document.getElementById(monthId);
    if (monthIdDiv != null) {
      document.getElementById('timeLineContainer')?.scrollTo({
          top: monthIdDiv.offsetTop - 30,
          behavior: "smooth"
      });
    }
  }
}
