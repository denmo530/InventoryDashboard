import { useState, useCallback, useEffect } from "react";

export default function useTransaction() {
  const [transactions, setTransactions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getTransactions = useCallback(async () => {
    const res = await fetch("http://localhost:8000/transactions");
    const fetchedTransactions = await res.json();
    fetchedTransactions.sort(
      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
    );

    const formattedData = fetchedTransactions.map((transaction: any) => {
      return {
        ...transaction,
        createdAt: new Date(transaction.createdAt).toLocaleDateString("sv-SE", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
        }),
      };
    });
    setTransactions(formattedData);
  }, []);

  const addTransaction = useCallback(
    async (transaction: any) => {
      setIsLoading(true);
      try {
        const data = {
          product: transaction.product.name,
          destination: transaction.destination.city,
          quantity: transaction.quantity,
        };
        const res = await fetch("http://localhost:8000/transactions", {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        });
        const success = res.ok;
        if (success) {
          getTransactions();
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    },
    [getTransactions]
  );

  useEffect(() => {
    getTransactions();
  }, [getTransactions]);

  return { transactions, addTransaction, isLoading };
}
