import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  @Input()
  photoCover: string =
    'https://blog.iprocess.com.br/wp-content/uploads/2021/11/placeholder.png';
  @Input()
  cardTitle: string = 'PLACE HOLDER TITLE';
  @Input()
  cardDescription: string =
    'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, omnis? Atque tempora facilis eos provident nesciunt saepe, veniam doloribus. Unde officiis obcaecati a atque nam id animi, quo ad facere?';

  constructor(
    private route: ActivatedRoute
  ) {

  }
// pegar o valor do id
  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get('id'))
    )
  }
}
