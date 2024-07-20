import { Destination, DestinationType } from "./destination.model";

export const sampleDestinations: Destination[] = [
  {
    Id: 1,
    Name: 'Paris',
    Description: 'The capital city of France, known for its art, fashion, and culture.',
    CountryCode: 'FR',
    Type: DestinationType.City,
    LastModify: new Date('2023-06-15')
  },
  {
    Id: 2,
    Name: 'Japan',
    Description: 'An island country in East Asia, known for its unique culture and advanced technology.',
    CountryCode: 'JP',
    Type: DestinationType.Country,
    LastModify: new Date('2023-07-01')
  },
  {
    Id: 3,
    Name: 'New York',
    Description: 'The largest city in the United States, famous for its skyline and cultural landmarks.',
    CountryCode: 'US',
    Type: DestinationType.City,
    LastModify: new Date('2023-06-20')
  },
  {
    Id: 4,
    Name: 'Sydney',
    Description: 'The largest city in Australia, known for its Sydney Opera House and Harbour Bridge.',
    CountryCode: 'AU',
    Type: DestinationType.City,
    LastModify: new Date('2023-05-10')
  },
  {
    Id: 5,
    Name: 'Canada',
    Description: 'A country in North America known for its vast landscapes and multicultural cities.',
    CountryCode: 'CA',
    Type: DestinationType.Country,
    LastModify: new Date('2023-04-22')
  },
  {
    Id: 6,
    Name: 'Berlin',
    Description: 'The capital city of Germany, known for its history, art, and modern landmarks.',
    CountryCode: 'DE',
    Type: DestinationType.City,
    LastModify: new Date('2023-03-18')
  },
  {
    Id: 7,
    Name: 'Brazil',
    Description: 'The largest country in South America, famous for its Carnival festival and Amazon rainforest.',
    CountryCode: 'BR',
    Type: DestinationType.Country,
    LastModify: new Date('2023-02-14')
  },
  {
    Id: 8,
    Name: 'Cape Town',
    Description: 'A coastal city in South Africa, known for its harbor, Table Mountain, and biodiversity.',
    CountryCode: 'ZA',
    Type: DestinationType.City,
    LastModify: new Date('2023-01-30')
  },
  {
    Id: 9,
    Name: 'Italy',
    Description: 'A European country known for its rich history, art, and cuisine.',
    CountryCode: 'IT',
    Type: DestinationType.Country,
    LastModify: new Date('2023-06-12')
  },
  {
    Id: 10,
    Name: 'Beijing',
    Description: 'The capital city of China, known for its modern architecture and ancient sites like the Forbidden City.',
    CountryCode: 'CN',
    Type: DestinationType.City,
    LastModify: new Date('2023-05-25')
  }
];
