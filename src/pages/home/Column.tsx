import { ColumnDef } from '@tanstack/react-table';

export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  gender: 'Female' | 'Male';
  ip_address: string;
};

export const columns: ColumnDef<User>[] = [
  {
    accessorKey: 'id',
    header: 'Id',
  },
  {
    accessorKey: 'first_name',
    header: 'First name',
  },
  {
    accessorKey: 'last_name',
    header: 'Last name',
  },
  {
    accessorKey: 'email',
    header: 'Email',
  },
  {
    accessorKey: 'gender',
    header: 'Gender',
  },
  {
    accessorKey: 'ip_address',
    header: 'Ip address',
  },
];
