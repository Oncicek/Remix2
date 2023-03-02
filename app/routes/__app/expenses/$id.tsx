import { useNavigate } from "@remix-run/react";
import ExpenseForm from "../../../components/expenses/ExpenseForm";
import Modal from "../../../components/util/Modal";

const UpdateExpensesPage = () => {
  const navigate = useNavigate();
  const onCloseHandler = () => {
    navigate("..");
  };

  return (
    <Modal onClose={onCloseHandler}>
      <ExpenseForm />
    </Modal>
  );
};

export default UpdateExpensesPage;
