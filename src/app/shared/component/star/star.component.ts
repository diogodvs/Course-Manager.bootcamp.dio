import { Component, Input, OnChanges, SimpleChanges } from "@angular/core";

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges {

  ngOnChanges(changes: SimpleChanges): void {
    try {
      this.starWidth = this.rating * 74 / 5

    } catch {
      throw new Error("Method not implemented.");
    }

  }

  @Input()
  rating: number = 0;

  starWidth!: number;

}
