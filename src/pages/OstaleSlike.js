import React, { useState } from 'react'
import '../App.css'




function OstaleSlike() {
    const [isOpen, setIsopen] = useState(false)
    const [name, setName] = useState("")
    const [materijali, setMaterijali] = useState("")
    const [slike, setSlike] = useState("")
    const [opis, setOpis] = useState("")


    const toggleForm = () => setIsopen(!isOpen)



    const sendData = e => {
        e.preventDefault()
        const formData = new FormData()
        for (let i = 0; i < slike.length; i++) {
            formData.append("images", slike[i])
        }
        formData.append("name", name)
        formData.append("materijali", materijali)
        formData.append("opis", opis)
        console.log(formData)
        // const res = axios.post('http://localhost:5000/posts/add', formData, {
        //     headers: {
        //         'Content-Type': 'multipart/form/data'
        //     }
        // }).then(response => setPosts(response.data))
        //     .catch(error => console.log(error))

    }


    return (
        <>
            <div className="minus-padding">
                ostale slike
        </div>
            <button className="open-btn" onClick={toggleForm}>Dodaj</button>
            {isOpen &&
                <form className="form" onSubmit={sendData}>
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
        </>
    );
}

export default OstaleSlike;
