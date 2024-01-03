

import { useState } from 'react';
import styles from '../styles/Pages/signin.module.scss';
import Image from 'next/image';
import axios from 'axios';
import { useRouter } from 'next/router';
import signin from './signin';


function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    age: '',
    typeOfBook: '',
    email: '',
    phone: '',
    city: '',
    state: '',
    country: '',
    password: ''
  });

  const [isloading, setIsLoading] = useState(false);
  const [erroro, setError] = useState(null);

  const router = useRouter();
  
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsLoading(true);
  try {
    console.log("Form Data:", formData);
    const response = await axios.post("/api/user/adduser", formData);

    if (response) {
      router.push("/signin");
    }
    console.log("Working perfectly");
  } catch (error) {
    // console.error("Found error: ", error);
    // console.error("Error response data:", error.response.data);
    // console.error("Error response status:", error.response.status);
     setError(
       error.response ? error.response.data : "An unexpected error occurred"
     );
    // Update the way error is set
    setIsLoading(false);
  }
  console.log("Here is working: " + formData);
};

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  }

  return (
    <>
      <div className={styles.signin}>
        <div className={styles.gif2}>
          <Image
            className={styles.img_signin2}
            alt="svg"
            src="/img/tree3.svg"
            width={300}
            height={800}
          />
        </div>

        <div className={styles.signin_main}>
          <h1 className={styles.heading}>Create Account </h1>
          <form onSubmit={handleSubmit}>
            <label className={styles.label}>
              Name:
              <input
                className={styles.input}
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            {/* <br />
        <label className={styles.label}>
          Gender:
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Please select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </label> */}
            <br />
            <label className={styles.label}>
              Age:
              <input
                className={styles.input}
                type="text"
                name="age"
                value={formData.age}
                onChange={handleChange}
                required
              />
            </label>
            <br />

            <label className={styles.label}>
              Email:
              <input
                className={styles.input}
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label className={styles.label}>
              Phone Number:
              <input
                className={styles.input}
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </label>
            <br />
            <label className={styles.label}>
              City:
              <input
                className={styles.input}
                type="text"
                name="city"
                value={formData.city}
                onChange={handleChange}
              />
            </label>
            <br />
            <label className={styles.label}>
              State:
              <input
                className={styles.input}
                type="text"
                name="state"
                value={formData.state}
                onChange={handleChange}
              />
            </label>
            {/* <br />
        <label className={styles.label}>
          Country:
          <input className={styles.input} type="text" name="country" value={formData.country} onChange={handleChange} />
        </label> */}
            <br />
            <label className={styles.label}>
              Type of book you like to read:
              <input
                className={styles.input}
                type="text"
                name="typeOfBook"
                value={formData.typeOfBook}
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
                required
              />
            </label>
            <br />

            <p className={styles.label}>{erroro && erroro.msg}</p>
            <button className={styles.btn_submit} type="submit">
              {isloading ? "Adding user..." : "Submit"} &#x2197;
            </button>
          </form>
        </div>

        <div className={styles.gif}>
          <Image
            className={styles.img_signin}
            alt="svg"
            src="/img/boy2.svg"
            width={300}
            height={800}
          />
        </div>
      </div>
    </>
  );
}

export default Signup
