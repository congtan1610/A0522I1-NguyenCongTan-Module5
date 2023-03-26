export interface Facility {
  id:number,
  name: string,
  area:number,
  cost:number,
  maxPeople:number,
  rentType:string,
  standardRoom?:string,
  descriptionOtherConvenience?:string,
  poolArea?:number,
  numberOfFloors?:number,
  facilityFree?:string,
  image:string
}
