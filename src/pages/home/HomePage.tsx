import data from '@/MOCK_DATA.json';
import { DataTable } from './DataTable';
import { User, columns } from './Column';

export function HomePage() {
  return (
    <main className='h-screen'>
      <div className='container mx-auto py-10'>
        <DataTable columns={columns} data={data as unknown as User[]} />
      </div>
    </main>
  );
}
