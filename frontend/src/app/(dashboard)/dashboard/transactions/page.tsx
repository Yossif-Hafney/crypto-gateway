import TransactionsTable from "./Components/table";

export default function TransactionsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-1 text-white tracking-tight">
        Users Transactions
      </h1>
      <p className="text-md mb-3 text-gray-300">
        Here you can view all transactions made by users for all merchants
      </p>
      <TransactionsTable />
    </div>
  );
}
