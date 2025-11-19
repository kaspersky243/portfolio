"use client";

import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Contact Me
        </h2>
        <ContactForm />
      </div>
    </section>
  );
}
