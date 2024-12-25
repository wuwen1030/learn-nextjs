import Image from 'next/image';
import { fetchFilteredCustomers } from '@/app/lib/data';

export default async function CustomersTable({
  query,
}: {
  query: string;
}) {
  const customers = await fetchFilteredCustomers(query);

  return (
    <div className="mt-6 flow-root">
      <div className="overflow-x-auto">
        <div className="inline-block min-w-full align-middle">
          <div className="overflow-hidden rounded-md bg-gray-50 dark:bg-gray-900 p-2 md:pt-0">
            <div className="md:hidden">
              {customers?.map((customer) => (
                <div
                  key={customer.id}
                  className="mb-2 w-full rounded-md bg-white dark:bg-black p-4"
                >
                  <div className="flex items-center justify-between border-b dark:border-gray-800 pb-4">
                    <div>
                      <div className="mb-2 flex items-center">
                        <div className="flex items-center gap-3">
                          <Image
                            src={customer.image_url}
                            className="rounded-full"
                            alt={`${customer.name}'s profile picture`}
                            width={28}
                            height={28}
                          />
                          <p className="dark:text-white">{customer.name}</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-500 dark:text-gray-400">
                        {customer.email}
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full items-center justify-between border-b dark:border-gray-800 py-5">
                    <div className="flex w-1/2 flex-col">
                      <p className="text-xs dark:text-gray-400">Pending</p>
                      <p className="font-medium dark:text-white">{customer.total_pending}</p>
                    </div>
                    <div className="flex w-1/2 flex-col">
                      <p className="text-xs dark:text-gray-400">Paid</p>
                      <p className="font-medium dark:text-white">{customer.total_paid}</p>
                    </div>
                  </div>
                  <div className="pt-4 text-sm dark:text-gray-400">
                    <p>{customer.total_invoices} invoices</p>
                  </div>
                </div>
              ))}
            </div>
            <table className="hidden min-w-full rounded-md text-gray-900 dark:text-white md:table">
              <thead className="rounded-md bg-gray-50 dark:bg-gray-900 text-left text-sm font-normal">
                <tr>
                  <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Total Invoices
                  </th>
                  <th scope="col" className="px-3 py-5 font-medium">
                    Total Pending
                  </th>
                  <th scope="col" className="px-4 py-5 font-medium">
                    Total Paid
                  </th>
                </tr>
              </thead>

              <tbody className="divide-y divide-gray-200 dark:divide-gray-800 text-gray-900 dark:text-white">
                {customers.map((customer) => (
                  <tr key={customer.id} className="group">
                    <td className="whitespace-nowrap bg-white dark:bg-black py-5 pl-4 pr-3 text-sm text-black dark:text-white group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
                      <div className="flex items-center gap-3">
                        <Image
                          src={customer.image_url}
                          className="rounded-full"
                          alt={`${customer.name}'s profile picture`}
                          width={28}
                          height={28}
                        />
                        <p>{customer.name}</p>
                      </div>
                    </td>
                    <td className="whitespace-nowrap bg-white dark:bg-black px-4 py-5 text-sm">
                      {customer.email}
                    </td>
                    <td className="whitespace-nowrap bg-white dark:bg-black px-4 py-5 text-sm">
                      {customer.total_invoices}
                    </td>
                    <td className="whitespace-nowrap bg-white dark:bg-black px-4 py-5 text-sm">
                      {customer.total_pending}
                    </td>
                    <td className="whitespace-nowrap bg-white dark:bg-black px-4 py-5 text-sm group-first-of-type:rounded-md group-last-of-type:rounded-md">
                      {customer.total_paid}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
