import { inject, Pipe, PipeTransform } from '@angular/core';
import { DestinationType } from 'src/app/core/models/destination.model';
import { DestinationService } from 'src/app/core/services/destination.service';

@Pipe({
  name: 'destinationType',
  standalone: true,
})
export class DestinationTypePipe implements PipeTransform {

  private readonly _destinationService = inject(DestinationService);

  transform(value: DestinationType): string {
    const destinationTypes = this._destinationService.getDestinationTypes();
    const type = destinationTypes.find(type => type.value === value);
    return type ? type.key : '';
  }

}
