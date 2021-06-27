import { AppColors, Modal, AddForm, Button, DeleteUsers } from "app";
import { mdiPlusCircle, mdiMinusCircle } from "@mdi/js";

export default function TableUsersTopBar() {
  return (
    <>
      <div className="table-topbar">
        <div className="title">
          Table <strong>Users</strong>
        </div>
        <div className="actions">
          <Modal
            button={(close) => (
              <Button
                icon={mdiMinusCircle}
                onClick={close}
                text="Delete"
                color={AppColors.error.on}
                backgroundColor={AppColors.error.main}
              />
            )}
            children={(close) => <DeleteUsers close={close} />}
          ></Modal>
          <Modal
            button={(close) => (
              <Button
                icon={mdiPlusCircle}
                onClick={close}
                text="Add new user"
                color={AppColors.success.on}
                backgroundColor={AppColors.success.main}
              />
            )}
            children={(close) => <AddForm close={close} />}
          ></Modal>
        </div>
      </div>
      <style jsx>{`
        .table-topbar {
          display: flex;
          background-color: ${AppColors.primary.main};
          justify-content: space-between;
          align-items: center;
          padding: 10px;
        }
        .title {
          color: ${AppColors.primary.on};
          font-size: 22px;
        }
        .actions {
          display: flex;
        }
      `}</style>
    </>
  );
}
