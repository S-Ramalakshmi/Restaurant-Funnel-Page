import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import 'animate.css'

export default function ThankYou() {
  const navigate = useNavigate()

  useEffect(() => {
    Swal.fire({
      icon: 'success',
      title: 'Thank You!!!',
      html: `
        <p style="color:#666; font-size:15px; line-height:1.6">
          We've received your details.<br/>
          Our team will reach out to you <strong>shortly</strong>.
        </p>
      `,
      confirmButtonColor: '#10156c',
      confirmButtonText: 'Back to Home',
      allowOutsideClick: false,
      showClass: {
        popup: 'animate__animated animate__fadeInDown'
      },
      hideClass: {
        popup: 'animate__animated animate__fadeOutUp'
      },
      customClass: {
        popup: 'thankyou-popup',
        title: 'thankyou-title',
        confirmButton: 'thankyou-btn'
      }
    }).then((result) => {
      if (result.isConfirmed) {
        navigate('/')
      }
    })
  }, [])

  return (
    <div style={{
      minHeight: '100vh',
      background: '#10156c',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'

    }}>
    </div>
  )
}