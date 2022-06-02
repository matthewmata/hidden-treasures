import { useState, useContext } from "react";
import { AccountContext } from "../auth/Accounts";

const ChangePassword = () => {
  const [password, setPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const { getSession, authenticate } = useContext(AccountContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    getSession().then(({ user, email }) => {
      authenticate(email, password).then(() => {
        user.changePassword(password, newPassword, (err, result) => {
          if (err) console.error(err);
          console.log(result);
        });
      });
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <input
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <button type="submit">Change Password</button>
      </form>
    </div>
  );
};

export default ChangePassword;
