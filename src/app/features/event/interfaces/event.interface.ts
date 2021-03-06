export interface IEvent {
  id?: string;
  title: string;
  description: string;
  eventType: eventType;
  eventDate: string;
  allowTicket: boolean;
  tickets?: number;
}

export enum eventType {
  PUBLIC = 'PUB',
  PRIVATE = 'PRIV',
}
