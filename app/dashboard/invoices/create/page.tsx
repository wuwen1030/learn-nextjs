import { fetchCustomers } from "@/app/lib/data";
import Breadcrumbs from "@/app/ui/invoices/breadcrumbs";
import Form from "@/app/ui/invoices/create-form";

export default async function Page() {
  const comsumers = await fetchCustomers();

  return (
    <main>
      <Breadcrumbs
        breadcrumbs={[
          { label: 'Invoices', href: '/invoices' },
          {
            label: 'Create Invoice',
            href: '/invoices/create',
            active: true,
          },
        ]}
      />
      <Form customers={comsumers} />
    </main>
  )
}