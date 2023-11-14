import useTransaction from "../hooks/useTransaction";
import DataTable, { createTheme } from "react-data-table-component";
import { AiOutlinePlusSquare } from "react-icons/ai";
import useTransactionModal from "../hooks/useTransactionModal";
import TransactionModal from "../components/modals/TransactionModal";

export default function TransactionPage() {
  const currentDate = new Date().toDateString();
  const { transactions } = useTransaction();
  const transactionModal = useTransactionModal();
  const columns = [
    {
      name: "Produkt",
      selector: (row) => row.product,
    },
    {
      name: "Till/Från",
      selector: (row) => row.destination,
    },
    {
      name: "Antal",
      selector: (row) => row.quantity,
    },
    {
      name: "Datum",
      selector: (row) => row.createdAt,
    },
  ];

  // createTheme creates a new theme named solarized that overrides the build in dark theme
  createTheme("customTheme", {
    text: {
      primary: "#f2f2f2",
      secondary: "#f2f2f2",
    },
    background: {
      default: "#302C37",
    },
    divider: {
      default: "#6F6B76",
    },
    action: {
      button: "#f2f2f2",
      hover: "#f2f2f2",
      disabled: "#f2f2f2",
    },
    button: {
      default: "#f2f2f2",
      focus: "rgba(0,0,0,.12)",
      hover: "#696868",
      disabled: "#e0dddd2c",
    },
  });

  return (
    <main className="mx-8 h-full w-full">
      <section className="mt-16 ">
        <div className="flex flex-row gap-2 items-baseline">
          <h1 className="text-2xl font-semibold">In- och utleverans</h1>
          <p className="text-sm text-neutral-300">{currentDate}</p>
        </div>
      </section>
      <section className="mt-16">
        <div className="w-full  flex flex-row justify-between">
          <h1 className="text-2xl font-medium mb-8">Leveranser</h1>
          <AiOutlinePlusSquare
            size={36}
            className="hover:cursor-pointer hover:opacity-80"
            onClick={transactionModal.onOpen}
          />
        </div>
        <div>
          <DataTable
            columns={columns}
            data={transactions}
            fixedHeader
            highlightOnHover
            pagination
            responsive
            subHeaderWrap
            theme="customTheme"
          />
        </div>
      </section>
      <TransactionModal />
    </main>
  );
}
