import { useState, useContext } from "react";
import { CognitoUserAttribute } from "amazon-cognito-identity-js";
import { AccountContext } from "../auth/Accounts";

const ChangeEmail = () => {
  const [newEmail, setNewEmail] = useState("");
  const [password, setPassword] = useState("");

  const { getSession, authenticate } = useContext(AccountContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    getSession().then(({ user, email }) => {
      authenticate(email, password).then(() => {
        const attributes = [
          new CognitoUserAttribute({ Name: "email", Value: newEmail }),
        ];

        user.updateAttributes(attributes, (err, results) => {
            if (err) console.error(err);
            console.log(results);
        })
      });
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={newEmail} onChange={(e) => setNewEmail(e.target.value)} />
        <input value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Change Email</button>
      </form>
    </div>
  );
};

export default ChangeEmail;
