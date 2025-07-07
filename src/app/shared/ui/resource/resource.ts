import {Component, computed, input} from '@angular/core';
import {ResourceType} from './resource.type';
import {DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-resource',
  imports: [
    DecimalPipe
  ],
  templateUrl: './resource.html',
  styleUrl: './resource.scss'
})
export class Resource {
  resourceType = input<ResourceType>();
  value = input<number>();

  iconUrl = computed(() => {
    return 'resources/' + this.resourceType()?.toString().toLowerCase() + '.png'
  })
}
