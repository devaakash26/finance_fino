import { getAccountWithTransactions } from "@/actions/accounts";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import TransactionTable from "../components/transaction-table";
import { BarLoader, DotLoader } from "react-spinners";
import AccountChart from "../components/account-chart";


const AccountPage = async ({ params }) => {
    if (!params || !params.id) {
        notFound();
    }
    const accountData = await getAccountWithTransactions(params.id);

    if (!accountData) {
        notFound();
    }

    const { transactions, ...account } = accountData;

    return (
        <div className="space-y-8 px-12 mt-4">
            <div className="flex gap-4 items-end justify-between">
                <div>
                    <h1 className="text-5xl sm:text-6xl font-bold tracking-tight gradient-title capitalize ">
                        {account.name}
                    </h1>
                    <p className="text-muted-foreground px-2">
                        {account.type.charAt(0).toUpperCase() + account.type.slice(1).toLowerCase()} Account
                    </p>
                </div>

                <div className="text-right pb-2">
                    <div className="text-xl sm:text-2xl font-bold">
                        ₹ {parseFloat(account.balance || 0).toFixed(2)}
                    </div>
                    <p className="text-sm text-muted-foreground">
                        {account._count?.transactions || 0} Transactions
                    </p>
                </div>
            </div>

            {/* Transaction Bar Chart */}
            <Suspense fallback={<div className="animate-pulse">
                <div className="h-6 bg-gray-200 rounded w-1/2 mb-2"></div>
                <div className="h-6 bg-gray-200 rounded w-1/3 mb-2"></div>
                <div className="flex justify-around mb-6 text-sm">
                    <div className="text-center">
                        <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    <div className="text-center">
                        <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                    <div className="text-center">
                        <div className="h-4 bg-gray-200 rounded w-1/2 mb-1"></div>
                        <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                    </div>
                </div>
                <div className="h-64 bg-gray-200 rounded"></div>
            </div>}>
                <AccountChart transactions={transactions} />
            </Suspense>


            {/* Transaction table */}
            <Suspense fallback={<div className="rounded-md border overflow-hidden animate-pulse">
                <div className="h-4 bg-gray-200"></div>
                <div className="h-4 bg-gray-200"></div>
                <div className="h-4 bg-gray-200"></div>
                <div className="h-4 bg-gray-200"></div>
                <div className="h-4 bg-gray-200"></div>
                <div className="h-4 bg-gray-200"></div>
                <div className="h-4 bg-gray-200"></div>
                <div className="h-4 bg-gray-200"></div>
                <div className="h-4 bg-gray-200"></div>
                <div className="h-3 bg-gray-200 mt-2 mb-4"></div>
                <div className="grid grid-cols-7 gap-2">
                    <div className="h-6 bg-gray-200 rounded"></div>
                    <div className="h-6 bg-gray-200 rounded"></div>
                    <div className="h-6 bg-gray-200 rounded"></div>
                    <div className="h-6 bg-gray-200 rounded"></div>
                    <div className="h-6 bg-gray-200 rounded"></div>
                    <div className="h-6 bg-gray-200 rounded"></div>
                    <div className="h-6 bg-gray-200 rounded"></div>
                </div>
            </div>}>
                <TransactionTable transactions={transactions} />
            </Suspense>
        </div>
    );
}

export default AccountPage;
