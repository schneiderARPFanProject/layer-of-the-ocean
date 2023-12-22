import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-tmp-project1',
  templateUrl: './tmp-project1.component.html',
  styleUrl: './tmp-project1.component.css'
})
export class TmpProject1Component {
  @Input() level?: string;

  constructor(
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.level = this.route.snapshot.params['level'];
  }
}
