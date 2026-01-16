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
    // Formspree endpoint is hardcoded for immediate functionality
    // Can also be set via NEXT_PUBLIC_FORMSPREE_ENDPOINT environment variable
    const formspreeEndpoint = process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT || 'https://formspree.io/f/xykkkzqe'

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

      const responseData = await response.json().catch(() => ({}))

      if (!response.ok) {
        // Formspree returns specific error messages
        const errorMsg = responseData.error || responseData.message || `Error ${response.status}: ${response.statusText}`
        throw new Error(errorMsg)
      }

      setStatus('success')
      setFormState({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      let errorMsg = 'Failed to send message. Please try again.'
      
      if (error instanceof Error) {
        errorMsg = error.message
        // Provide helpful error messages
        if (error.message.includes('not found') || error.message.includes('404')) {
          errorMsg = 'Form not found. Please check your Formspree endpoint configuration.'
        } else if (error.message.includes('429')) {
          errorMsg = 'Too many requests. Please try again later.'
        }
      }
      
      setErrorMessage(errorMsg)
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
