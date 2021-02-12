import React, { useState } from 'react'
import Card from '../components/Card'
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner";
import { ToastContainer, toast } from 'react-toastify';


function AbonosStolovi() {
  const [isOpen, setIsopen] = useState(false)
  const [name, setName] = useState("")
  const [materijali, setMaterijali] = useState("")
  const [slike, setSlike] = useState("")
  const [opis, setOpis] = useState("")
  const [isDisabled, setIsDisabled] = useState(false)


  const toggleForm = () => setIsopen(!isOpen)


  const sendData = e => {
    e.preventDefault()
    setIsDisabled(!isDisabled)
    const formData = new FormData()
    for (let i = 0; i < slike.length; i++) {
      formData.append("image", slike[i])
    }

    console.log(slike)
    formData.append('name', name)
    formData.append("materijali", materijali)
    formData.append("opis", opis)
    formData.append("kategorija", "abonosStolovi")
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    };
    fetch('http://localhost:5000/products/add', {
      method: 'POST',
      body: formData
    })
      .then(response => response.json())
      .then(result => {
        setIsDisabled(false)
        setName("")
        setOpis("")
        setMaterijali("")
        toast("Dodano ne sekiraj se nista.");
        console.log('Success:', result);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }



  return (
    <>
      <button className="open-btn" onClick={toggleForm}>Dodaj</button>
      {isOpen &&
        <form className="form" onSubmit={sendData} encType="multipart/form-data">
          <button className="close-btn" onClick={toggleForm}>&#10005;</button>
          <div className="all-inputs">
            <input required value={name} className="input" placeholder="Ime proizvoda" onChange={e => setName(e.target.value)} />
            <input required value={materijali} className="input" placeholder="Materijali" onChange={e => setMaterijali(e.target.value)} />
            <input required  className="input" multiple type="file" onChange={(e) => setSlike(e.target.files)} />
            <textarea required value={opis} className="input" placeholder="Opis" onChange={e => setOpis(e.target.value)} />
            <button className="form-button" type="submit" disabled={isDisabled}>{isDisabled ?<Loader type="BallTriangle" color="#00BFFF" height={80} width={80} />: "SPREMI"}</button>
          </div>
        </form>
      }
      <div className="gallery">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </>
  );
}

export default AbonosStolovi;
