import { useNavigate } from "@remix-run/react";
import ExpenseForm from "../../../components/expenses/ExpenseForm";
import Modal from "../../../components/util/Modal";

const ExpensesAddPage = () => {
  const navigate = useNavigate();
  const onCloseHandler = () => {
    navigate("..");
  };
  return (
    <Modal onClose={onCloseHandler}>
      <ExpenseForm />;
    </Modal>
  );
};

export default ExpensesAddPage;
