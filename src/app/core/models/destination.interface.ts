export enum DestinationType {
  Country,
  City
}

export interface Destination {
  Id: number;
  Name: string;
  Description: string;
  CountryCode: string;
  Type: DestinationType;
  LastModify: Date;
}
