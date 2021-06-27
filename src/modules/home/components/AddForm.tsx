import { AppColors, UserContext, Config, Message } from "app";
import { ChangeEvent, FormEvent, useContext, useEffect, useState } from "react";
import { AddFormProps } from "./AddForm.interface";

export default function AddForm({ close }: AddFormProps) {
  const [message, setMessage] = useState("");
  const { addUser } = useContext(UserContext);

  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: 0,
    grade: 0,
  });

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const res = await fetch(Config.api.routes.users, {
      method: "POST",
      body: JSON.stringify(state),
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    if (data.message) {
      setMessage(data.message);
    } else if (res.status === 200) {
      addUser(data);

      close();
    }
  };

  const onFirstName = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      firstName: e.target.value,
    });
  };
  const onLastName = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      lastName: e.target.value,
    });
  };
  const onEmail = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      email: e.target.value,
    });
  };
  const onAge = (e: ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      age: Number(e.target.value),
    });
  };
  const onGrade = (e: ChangeEvent<HTMLSelectElement>) => {
    setState({
      ...state,
      grade: Number(e.target.value),
    });
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <Message message={message} />
        <div>
          <label htmlFor="firstname">First name:</label>
          <input
            type="text"
            name="firstname"
            onChange={onFirstName}
            required
            pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
          />
          <span className="validity"></span>
        </div>
        <div>
          <label htmlFor="lastname">Last name:</label>
          <input
            type="text"
            name="lastname"
            onChange={onLastName}
            required
            pattern="^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$"
          />
          <span className="validity"></span>
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            name="email"
            onChange={onEmail}
            required
          />
          <span className="validity"></span>
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            name="age"
            onChange={onAge}
            required
            min={1}
            max={150}
          />
          <span className="validity"></span>
        </div>
        <div>
          <label htmlFor="grade">Grade:</label>
          <select name="grade" onChange={onGrade} required>
            <option value="" defaultChecked>
              Select grade
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
        <div>
          <input type="submit" name="submit" />
        </div>
      </form>
      <style jsx>{`
        form {
          display: flex;
          flex-direction: column;
          align-items: start;
        }
        input {
          font-size: 22px;
          margin: 10px;
        }
        input[type="submit"] {
          border-radius: 2px;
          border: none;
          padding: 5px 10px;
          background-color: ${AppColors.success.main};
          color: ${AppColors.success.on};
        }
        div {
          margin-bottom: 10px;
          position: relative;
        }
        label {
          display: flex;
        }

        input + span {
          padding-right: 30px;
        }

        input:invalid {
          border: 1px solid ${AppColors.error.main};
        }
        input:valid {
          border: 1px solid ${AppColors.success.main};
        }

        input:invalid + span:after {
          position: absolute;
          content: "✖";
          color: ${AppColors.error.main};
          padding-left: 5px;
          padding-top: 10px;
        }

        input:valid + span:after {
          position: absolute;
          color: ${AppColors.success.main};
          content: "✓";
          padding-left: 5px;
          padding-top: 10px;
        }
      `}</style>
    </>
  );
}
