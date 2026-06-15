import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'
import { HiArrowLeft } from "react-icons/hi";

<HiArrowLeft />
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzW6O2iWbZGDGQDD5Uvn_uPBH7jeKwe2m0-V5zQsh0HskdsnNl-DxtzR0q1vjP7PDq1Uw/exec"

export default function Form() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '', email: '', mobile: '', message: ''
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async () => {
    if (!formData.name || !formData.email || !formData.mobile || !formData.message) {
      setError('Please fill in all fields.')
      return
    }

    setLoading(true)
    setError('')

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      })

      navigate('/thankyou')
    } catch (err) {
      setError('Something went wrong. Please try again.')
      setLoading(false)
    }
  }

  return (
    <div className='form-wrapper'>
      <div className="form-details">
        <div className="form-header">
          <h2>Book a Free Strategy Call</h2>
          <p>Fill in your details and we'll get back to you shortly.</p>
        </div>

        <div className="form-control">
          <label htmlFor="name">Name</label>
          <input id="name" type="text" placeholder="Enter your name"
            value={formData.name} onChange={handleChange} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email Id</label>
          <input id="email" type="email" placeholder="Enter your email id"
            value={formData.email} onChange={handleChange} />
        </div>
        <div className="form-control">
          <label htmlFor="mobile">Mobile</label>
          <input id="mobile" type="tel" placeholder="Enter your phone number"
            value={formData.mobile} onChange={handleChange} />
        </div>
        <div className="form-control">
          <label htmlFor="message">Message</label>
          <textarea id="message" rows={5} placeholder="How can we help you?"
            value={formData.message} onChange={handleChange} />
        </div>

        {error && <p style={{ color: 'red', fontSize: 13, marginBottom: 10 }}>{error}</p>}

        <button className='submit' onClick={handleSubmit} disabled={loading}>
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </div>

      <Link to="/" className='backlink'><HiArrowLeft/><button className='back'>Back to Home</button></Link>
    </div>
  )
}