import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tmp-project2',
  templateUrl: './tmp-project2.component.html',
  styleUrl: './tmp-project2.component.css'
})
export class TmpProject2Component {
  @Input() level?: string;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.level = this.route.snapshot.params['level'];
  }
}
