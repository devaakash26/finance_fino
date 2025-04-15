import { getUserAccounts } from "@/actions/dashboard";
import { defaultCategories } from "@/data/categories";
import { Suspense } from "react";
import AddTransactionForm from "../_components/AdTransactionform";
import { getTransaction } from "@/actions/transaction";
// Loading Component
function LoadingPlaceholder() {
  return (
    <div className="space-y-6 animate-pulse">
      <div className="space-y-2 w-full">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="w-full h-10 bg-gray-200 rounded"></div>
        <div className="h-4 bg-red-200 rounded w-3/4"></div>
      </div>

      <div className="space-y-2 mt-2 gap-6 grid md:grid-cols-2">
        <div className="space-y-2 mt-2">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-10 bg-gray-200 rounded w-full"></div>
          <div className="h-4 bg-red-200 rounded w-3/4"></div>
        </div>

        <div className="space-y-2 mt-2">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="w-full h-10 bg-gray-200 rounded"></div>
          <div className="h-4 bg-red-200 rounded w-3/4"></div>
        </div>
      </div>

      <div className="space-y-2 mt-2">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-10 bg-gray-200 rounded w-full"></div>
        <div className="h-4 bg-red-200 rounded w-3/4"></div>
      </div>
    </div>
  );
}

export default async function AddTransactionPage({ searchParams }) {
  const accounts = await getUserAccounts();

  // Directly access searchParams without awaiting
  const editId = searchParams?.edit;
  let initialData = null;
  if (editId) {
    const transaction = await getTransaction(editId);
    initialData = transaction;
  }

  return (
    <div className="max-w-3xl mx-auto px-5 mt-8">
      <div className="flex justify-center md:justify-normal mb-8">
        <h1 className="text-4xl gradient-title justify-start md:text-5xl">
          {editId ? "Edit" : "Add"} Transaction
        </h1>
      </div>

      <Suspense fallback={<LoadingPlaceholder />}>
        <AddTransactionForm
          accounts={accounts}
          categories={defaultCategories}
          editMode={!!editId}
          initialData={initialData}
        />
      </Suspense>
    </div>
  );
}
