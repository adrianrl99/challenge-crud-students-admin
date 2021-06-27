import { useContext, useEffect, useRef } from "react";
import { UserContext } from "app";

export default function TableUsersHeader() {
  const { selected, users, addAllSelected } = useContext(UserContext);
  const checkRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (checkRef.current) {
      if (!selected.length) {
        checkRef.current.checked = false;
        checkRef.current.indeterminate = false;
      } else if (selected.length === users.length) {
        checkRef.current.checked = true;
        checkRef.current.indeterminate = false;
      } else if (selected.length !== users.length)
        checkRef.current.indeterminate = true;
    }
  }, [selected]);

  return (
    <>
      <thead>
        <tr>
          <td>
            <input type="checkbox" ref={checkRef} onChange={addAllSelected} />
          </td>
          <td>FirstName</td>
          <td>LastName</td>
          <td>Email</td>
          <td>Age</td>
          <td>Grade</td>
          <td>Actions</td>
        </tr>
      </thead>
      <style jsx>{`
        input {
          transform: scale(1.5);
        }
        thead {
          border-bottom: 1px solid rgba(0, 0, 0, 0.5);
        }
        td {
          font-size: 20px;
          padding: 10px 15px;
        }
      `}</style>
    </>
  );
}
