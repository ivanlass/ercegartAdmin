import React, { useState } from 'react'
import Card from '../components/Card'
import axios from 'axios'

function AbonosStolovi() {
  const [isOpen, setIsopen] = useState(false)
  const [name, setName] = useState("")
  const [materijali, setMaterijali] = useState("")
  const [slike, setSlike] = useState("")
  const [opis, setOpis] = useState("")


  const toggleForm = () => setIsopen(!isOpen)

console.log(slike)

  const sendData = e => {
    e.preventDefault()
    const formData = new FormData()
    for (let i = 0; i < slike.length; i++) {
      formData.append("image", slike[i])
    }

    console.log(slike)
    formData.append('name', name)
    formData.append("materijali", materijali)
    formData.append("opis", opis)
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
        <form className="form" onSubmit={sendData} >
          <button className="close-btn" onClick={toggleForm}>&#10005;</button>
          <div className="all-inputs">
            <input className="input" placeholder="Ime proizvoda" onChange={e => setName(e.target.value)} />
            <input className="input" placeholder="Materijali" onChange={e => setMaterijali(e.target.value)} />
            <input className="input" multiple type="file" onChange={(e) => setSlike(e.target.files)} />
            <textarea className="input" placeholder="Opis" onChange={e => setOpis(e.target.value)} />
            <button className="form-button" type="submit">SPREMI</button>
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
