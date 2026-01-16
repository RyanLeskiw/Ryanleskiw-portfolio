'use client'

import { useState } from 'react'

export default function ContactForm() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')
    setErrorMessage('')

    // Use Formspree for static site hosting (GitHub Pages)
    // Replace 'YOUR_FORM_ID' below with your actual Formspree form ID
    // Get your Formspree endpoint from https://formspree.io
    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/YOUR_FORM_ID'
    
    // If you want to hardcode it directly, replace the line above with:
    // const formspreeEndpoint = 'https://formspree.io/f/YOUR_ACTUAL_FORM_ID'

    try {
      const response = await fetch(formspreeEndpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          name: formState.name,
          email: formState.email,
          message: formState.message,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}))
        throw new Error(errorData.error || 'Failed to send message')
      }

      setStatus('success')
      setFormState({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      setErrorMessage(
        error instanceof Error 
          ? error.message 
          : 'Failed to send message. Please try again.'
      )
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-text-light mb-2">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formState.name}
          onChange={handleChange}
          required
          minLength={2}
          className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded text-text-light placeholder-gray-600 focus:outline-none focus:border-accent-green transition-colors"
          placeholder="Your name"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-text-light mb-2">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
          required
          className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded text-text-light placeholder-gray-600 focus:outline-none focus:border-accent-green transition-colors"
          placeholder="your@email.com"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-text-light mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formState.message}
          onChange={handleChange}
          required
          minLength={10}
          maxLength={2000}
          rows={6}
          className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded text-text-light placeholder-gray-600 focus:outline-none focus:border-accent-green transition-colors resize-none"
          placeholder="Tell me about your project or collaboration idea..."
        />
      </div>

      {/* Status Messages */}
      {status === 'success' && (
        <div className="p-4 bg-green-900 border border-accent-green rounded text-text-light">
          Thank you! I've received your message and will get back to you soon.
        </div>
      )}

      {status === 'error' && (
        <div className="p-4 bg-red-900 border border-red-700 rounded text-text-light">
          {errorMessage}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full px-6 py-3 bg-green-500 text-white font-bold rounded hover:bg-green-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  )
}
