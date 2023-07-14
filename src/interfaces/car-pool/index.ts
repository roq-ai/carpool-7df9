import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CarPoolInterface {
  id?: string;
  location: string;
  driver_id: string;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  _count?: {};
}

export interface CarPoolGetQueryInterface extends GetQueryInterface {
  id?: string;
  location?: string;
  driver_id?: string;
}
