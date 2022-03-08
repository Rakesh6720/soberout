import { useRef } from "react";

export default function CreateMemberPage() {
  const emailRef = useRef();
  const password1Ref = useRef();
  const password2Ref = useRef();

  async function onSubmitHandler(event) {
    event.preventDefault();
    const email = emailRef.current.value;
    const password1 = password1Ref.current.value;
    const password2 = password2Ref.current.value;

    const isValid = checkPasswords(password1, password2);

    if (!email || !email.includes("@")) {
      console.log("Please enter a valid email address");
      return;
    }

    if (!password1 || !password2) {
      console.log("Please enter a valid password");
      return;
    }

    if (!isValid) {
      console.log("Passwords do not match");
      return;
    }

    const response = await fetch("/api/users/create", {
      method: "POST",
      body: JSON.stringify({ email: email, password: password1 }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.text();

    console.log(data);
  }

  return (
    <section>
      <form onSubmit={onSubmitHandler}>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" ref={password1Ref} />
        </div>
        <div>
          <label htmlFor="password2">Verify Password</label>
          <input type="password" id="password2" ref={password2Ref} />
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

function checkPasswords(password1, password2) {
  const isValid = password1.normalize() === password2.normalize();
  return isValid;
}
