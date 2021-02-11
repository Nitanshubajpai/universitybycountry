import { Component, OnInit, Pipe, PipeTransform } from '@angular/core';
import { university } from 'src/app/classes/university';
import { UniversitiesService } from './../../services/universities.service';

@Component({
  selector: 'app-university',
  templateUrl: './university.component.html',
  styleUrls: ['./university.component.css']
})
export class UniversityComponent implements OnInit {

  constructor(private _UniversitiesService: UniversitiesService) { 

  }
  
  lstuniversity: university[] | undefined;
  countryselected: string | undefined;
  lstunis: university[] | undefined;

  ngOnInit() {
  this._UniversitiesService.getcountry()
  .subscribe
  (
    data=>
    {
      this.lstuniversity = data;
    }
  )

}
  oncountryselected(countryselect: any): void{
    this._UniversitiesService.getuniversitybycountry(countryselect)
    .subscribe(
      data=>
      {
        this.lstunis = data;
      }
    )
  }


}

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {

    // Remove the duplicate elements
    let uniqueArray = value.filter(function (el: any, index: any, array: string | any[]) { 
      return array.indexOf (el) == index;
    });

    return uniqueArray;
  }
}
