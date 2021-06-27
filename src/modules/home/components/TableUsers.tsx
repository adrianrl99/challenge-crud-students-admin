import { TableUsersHeader, TableUsersBody, TableUsersTopBar } from "app";

export default function TableUsers() {
  return (
    <>
      <div>
        <TableUsersTopBar />
        <table>
          <TableUsersHeader />
          <TableUsersBody />
        </table>
      </div>
      <style jsx>{`
        div {
          display: flex;
          flex-direction: column;
        }
        table {
          border-spacing: 0;
        }
      `}</style>
    </>
  );
}
