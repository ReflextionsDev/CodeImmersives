import { React, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'

export default function Form() {

  let navigate = useNavigate()

  const [searchParams, setSearchParams] = useSearchParams()
  const [contactName, setContactName] = useState(searchParams.get('name'))
  const [contactPhone, setContactPhone] = useState(searchParams.get('phone'))
  const [contactAge, setContactAge] = useState(searchParams.get('age'))
  const [contactEmail, setContactEmail] = useState(searchParams.get('email'))

  return (
    <div>
      <h1>Contact Form</h1>
      <div className="field">
        <label>Name: </label>
        <input
          onChange={(e) => setContactName(e.target.value)}
          value={contactName}
        />
      </div>
      <div className="field">
        <label>Phone: </label>
        <input
          onChange={(e) => setContactPhone(e.target.value)}
          value={contactPhone}
        />
      </div>
      <div className="field">
        <label>Age: </label>
        <input
          type='number'
          onChange={(e) => setContactAge(e.target.value)}
          value={contactAge}
        />
      </div>
      <div className="field">
        <label>Email: </label>
        <input
          onChange={(e) => setContactEmail(e.target.value)}
          value={contactEmail}
        />
      </div>

      <button
        onClick={() => { navigate('submitted') }}>Submit
      </button>

      <div>
        http://localhost:3000/contact?name={contactName}{"&phone="}{contactPhone}{"&age="}{contactAge}{"&email="}{contactEmail}
      </div>
    </div>
  )
}
