import type { Metadata } from 'next'
import ContactForm from '@/components/ContactForm'

export const metadata: Metadata = {
  title: 'Contact — Ryan Leskiw',
  description: 'Get in touch with Ryan Leskiw for collaboration opportunities, project inquiries, or to discuss UX research and design.',
  openGraph: {
    title: 'Contact — Ryan Leskiw',
    description: 'Get in touch with Ryan Leskiw for collaboration opportunities or project inquiries.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div className="relative">
      <div className="stipple-bg" aria-hidden="true"></div>
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-bg-dark">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl sm:text-5xl font-bold font-futuristic tracking-futuristic text-text-light mb-8">Get in Touch</h1>

          <p className="text-gray-400 text-lg mb-12">
          Have a project idea or want to collaborate? I'd love to hear from you. Fill out the form below and I'll get back to you as soon as possible.
        </p>

        <ContactForm />
        </div>
      </section>
    </div>
  )
}
