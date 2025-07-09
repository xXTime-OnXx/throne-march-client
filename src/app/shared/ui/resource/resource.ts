import {Component, computed, input} from '@angular/core';
import {ResourceType} from './resource.type';
import {DecimalPipe, NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-resource',
  imports: [
    DecimalPipe,
    NgOptimizedImage
  ],
  templateUrl: './resource.html',
  styleUrl: './resource.scss'
})
export class Resource {
  resourceType = input<ResourceType>();
  value = input<number>();

  iconUrl = computed(() => {
    return 'icons/resources/' + this.resourceType()?.toString().toLowerCase() + '.png'
  })
}
