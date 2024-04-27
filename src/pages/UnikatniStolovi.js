import React, { useEffect, useState } from "react";
import Card from "../components/Card";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { toast } from "react-toastify";
import "../App.css";

function UnikatniStolovi() {
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
    fetch("https://ercegartapi.ew.r.appspot.com/products/delete", {
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
    fetch("https://ercegartapi.ew.r.appspot.com/products", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query: "unikatniStolovi" }),
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
    const promises = [];
  
    for (let i = 0; i < slike.length; i++) {
      const reader = new FileReader();
      const file = slike[i];
      promises.push(
        new Promise((resolve, reject) => {
          reader.onload = (event) => {
            const buffer = event.target.result;
            const contentType = file.type; // Get the content type from the file
            const blob = new Blob([buffer], { type: contentType });
            formData.append(`image${i}`, blob, file.name); // Use blob instead of buffer
            resolve();
          };
          reader.onerror = (error) => reject(error);
          reader.readAsArrayBuffer(file);
        })
      );
    }
  
    Promise.all(promises)
      .then(() => {
        formData.append("name", name);
        formData.append("materijali", materijali);
        formData.append("opis", opis);
        formData.append("kategorija", "unikatniStolovi");
        formData.append("nameEn", nameEn);
        formData.append("materijaliEn", materijaliEn);
        formData.append("opisEn", opisEn);
  
        fetch("https://ercegartapi.ew.r.appspot.com/products/add", {
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
      })
      .catch((error) => {
        console.error("Error reading file:", error);
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

export default UnikatniStolovi;
