import React, { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useTransactionModal from "../../hooks/useTransactionModal";
import Modal from "./Modal";
import Input from "../Input";
import useTransaction from "../../hooks/useTransaction";
import ProductSelect from "../ProductSelect";
import LocationSelect from "../DestinationSelect";
import { useNavigate } from "react-router-dom";

const TransactionModal = () => {
  const transactionModal = useTransactionModal();
  const { addTransaction } = useTransaction();
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      product: "",
      quantity: 0,
      destination: "",
    },
  });

  const product = watch("product");
  const destination = watch("destination");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    try {
      await addTransaction(data);
      transactionModal.onClose();
      navigate(0);
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const body = (
    <div className="flex flex-col gap-4">
      <div className="text-start">
        <div className="text-2xl font-bold">Skapa en ny leverans</div>
        <div className="font-light text-white mt-2">Fyll i formulär</div>
      </div>
      <ProductSelect
        value={product}
        onChange={(value) => setCustomValue("product", value)}
      />
      <LocationSelect
        value={destination}
        onChange={(value) => setCustomValue("destination", value)}
      />
      <Input
        id="quantity"
        label="Antal"
        disabled={isLoading}
        register={register}
        errors={errors}
        type="number"
        required
      />
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={transactionModal.isOpen}
      title="Skapa Leverans"
      actionLabel="Skapa"
      onClose={transactionModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={body}
    />
  );
};

export default TransactionModal;
