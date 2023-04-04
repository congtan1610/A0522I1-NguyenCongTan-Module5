import {Type} from "./type";
import {RentType} from "./rent-type";

export interface Facility {
  id:number,
  name: string,
  type:Type,
  area:number,
  cost:number,
  maxPeople:number,
  rentType:RentType,
  standardRoom?:string,
  descriptionOtherConvenience?:string,
  poolArea?:number,
  numberOfFloors?:number,
  facilityFree?:string,
  image:string
}
