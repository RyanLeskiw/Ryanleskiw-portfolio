'use client'

import { useState } from 'react'
import type { Metadata } from 'next'

export const metadata = {
  title: 'Contact — Ryan Leskiw',
  description: 'Get in touch with me.',
} satisfies Metadata

export default function ContactPage() {
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

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formState),
      })

      if (!response.ok) {
        throw new Error('Failed to send message')
      }

      setStatus('success')
      setFormState({ name: '', email: '', message: '' })
      setTimeout(() => setStatus('idle'), 5000)
    } catch (error) {
      setStatus('error')
      setErrorMessage('Failed to send message. Please try again.')
      setTimeout(() => setStatus('idle'), 5000)
    }
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-dark">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-bold text-text-light mb-8">Get in Touch</h1>

        <p className="text-gray-400 text-lg mb-12">
          Have a project idea or want to collaborate? I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
        </p>

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
            className="w-full px-6 py-3 bg-accent-green text-bg-dark font-bold rounded hover:bg-green-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  )
}
