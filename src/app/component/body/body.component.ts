import { Component , Input} from '@angular/core';
import { Products } from 'src/app/model/products';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  @Input() productsChild:Products[]|undefined; // il valore proviene dal componente padre

}
