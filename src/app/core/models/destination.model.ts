export interface DestinationTypes {
  key: string,
  value: DestinationType
};

export enum DestinationType {
  Country,
  City
}

export type ColumnKeys<T> = Array<keyof T>;

export interface Destination {
  Id: number;
  Name: string;
  Description: string;
  CountryCode: string;
  Type: DestinationType;
  LastModify: Date;
  action?: string;
}
