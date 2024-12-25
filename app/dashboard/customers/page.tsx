import CustomersTable from "@/app/ui/customers/table";
import { lusitana } from "@/app/ui/fonts";
import Search from "@/app/ui/search";
import { Suspense } from "react";

export default async function Page(
  props: {
    searchParams?: Promise<{
      query?: string;
    }>;
  }
) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query ?? '';
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>
          Customers
        </h1>
      </div>
      <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
        <Search placeholder="Search customers..." />
      </div>
      <Suspense key={query}>
        <CustomersTable query={query} />
      </Suspense>
    </div>
  )
}