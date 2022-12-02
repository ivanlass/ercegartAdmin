import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { toast } from "react-toastify";
import "../App.css";

function AkrilNaPlatnu() {
  const [products, setProducts] = useState(null);
  const [isOpen, setIsopen] = useState(false);
  const [name, setName] = useState("");
  const [materijali, setMaterijali] = useState("");
  const [slike, setSlike] = useState("");
  const [opis, setOpis] = useState("");
  const [nameEn, setNameEn] = useState("");
  const [materijaliEn, setMaterijaliEn] = useState("");
  const [opisEn, setOpisEn] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const toggleForm = () => setIsopen(!isOpen);

  const deleteProduct = (e) => {
    fetch("https://ercegbackend-c42jv.ondigitalocean.app/products/delete", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: e.currentTarget.dataset.id }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
        toast("Obrisano");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  useEffect(() => {
    fetch("https://ercegbackend-c42jv.ondigitalocean.app/products", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: "akrilNaPlatnu" }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setProducts(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const sendData = (e) => {
    e.preventDefault();
    setIsDisabled(!isDisabled);
    const formData = new FormData();
    for (let i = 0; i < slike.length; i++) {
      formData.append("image", slike[i]);
    }

    console.log(slike);
    formData.append("name", name);
    formData.append("materijali", materijali);
    formData.append("opis", opis);
    formData.append("kategorija", "akrilNaPlatnu");
    formData.append("nameEn", nameEn);
    formData.append("materijaliEn", materijaliEn);
    formData.append("opisEn", opisEn);

    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    fetch("https://ercegbackend-c42jv.ondigitalocean.app/products/add", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((result) => {
        setIsDisabled(false);
        setName("");
        setNameEn("");
        setOpis("");
        setOpisEn("");
        setMaterijali("");
        setMaterijaliEn("");
        toast("Dodano ne sekiraj se nista.");
        console.log("Success:", result);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <button className="open-btn" onClick={toggleForm}>
        Dodaj
      </button>
      {isOpen && (
        <form
          className="form"
          onSubmit={sendData}
          encType="multipart/form-data"
        >
          <button className="close-btn" onClick={toggleForm}>
            &#10005;
          </button>
          <div className="all-inputs">
            <input
              required
              value={name}
              className="input"
              placeholder="Ime proizvoda"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              required
              value={nameEn}
              className="input"
              placeholder="Ime na engleski"
              onChange={(e) => setNameEn(e.target.value)}
            />
            <input
              required
              value={materijali}
              className="input"
              placeholder="Materijali"
              onChange={(e) => setMaterijali(e.target.value)}
            />
            <input
              required
              value={materijaliEn}
              className="input"
              placeholder="Materijali ENG"
              onChange={(e) => setMaterijaliEn(e.target.value)}
            />
            <input
              required
              className="input"
              multiple
              type="file"
              onChange={(e) => setSlike(e.target.files)}
            />
            <textarea
              required
              value={opis}
              className="input"
              placeholder="Opis"
              onChange={(e) => setOpis(e.target.value)}
            />
            <textarea
              required
              value={opisEn}
              className="input"
              placeholder="Opis na ENG"
              onChange={(e) => setOpisEn(e.target.value)}
            />
            <button className="form-button" type="submit" disabled={isDisabled}>
              {isDisabled ? (
                <Loader
                  type="BallTriangle"
                  color="#00BFFF"
                  height={80}
                  width={80}
                />
              ) : (
                "SPREMI"
              )}
            </button>
          </div>
        </form>
      )}
      <div className="gallery">
        {products &&
          products.map((product) => {
            return (
              <div className="card-wrapper">
                <button
                  className="delete-btn"
                  onClick={deleteProduct}
                  data-id={product._id}
                >
                  X
                </button>
                <Card product={product} key={product._id} />
              </div>
            );
          })}
      </div>
    </>
  );
}

export default AkrilNaPlatnu;
