import { useState } from "react";
import styles from "../styles/Pages/signup.module.scss";
import Image from "next/image";
import Link from "next/link";

function Signup() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    // You can send the form data to your API here to verify the user's credentials
    // and log them in if the credentials are correct
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <div className={styles.signup}>
      <div className={styles.gif1}>
            <Image
            alt="svg"
              className={styles.img_signup1}
              src="/img/floating.svg"
              width={300}
              height={800}
            />
          
        </div>
        <div className={styles.signup_main} >
         <h1 className={styles.heading}>Sign In</h1>
          <form onSubmit={handleSubmit}>
            <label className={styles.label}>
              Email:
              <input 
                className={styles.input}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className={styles.label}>
              Password:
              <input
                className={styles.input}
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
              />
            </label>
            <br />
            <Link className={styles.label} href='/signin'>forget your password?</Link>
            <button className={styles.btn} type="submit">Login  &#x2197;</button>
           <Link href="/signup"> <button className={styles.btn2} type="submit">Signup </button> </Link>
          </form>
        </div>
        
         

        <div className={styles.gif2}>
            <Image
            alt="svg"
              className={styles.img_signup2}
              src="/img/tree3.svg"
              width={100}
              height={200}
            />
          
        </div>
      </div>
    </>
  );
}

export default Signup
