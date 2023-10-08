import { Component, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

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
  private id: string | null = '0'

  constructor(
    private route: ActivatedRoute
  ) {

  }
// pegar o valor do id
  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      this.id = value.get('id')
      // console.log(value.get('id'))
    )
    this.setValuesToComponent(this.id)
  }

  setValuesToComponent(id: string | null){
    const result = dataFake.filter(article => article.id === id)[0];

    this.cardTitle = result.title;
    this.cardDescription = result.description;
    this.photoCover = result.photo;
  }
}
