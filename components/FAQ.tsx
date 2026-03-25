'use client'

import { useState } from 'react'

interface FAQItem {
  question: string
  answer: string
}

function FAQAccordion({ question, answer }: FAQItem) {
  const [open, setOpen] = useState(false)

  return (
    <div className="border border-gray-200 rounded-lg">
      <button
        className="w-full flex items-center justify-between px-6 py-4 text-left"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
      >
        <span className="font-semibold text-navy pr-4">{question}</span>
        <svg
          className={`w-5 h-5 text-orange shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {open && (
        <div className="px-6 pb-4 text-gray-600">
          {answer}
        </div>
      )}
    </div>
  )
}

interface FAQProps {
  items: FAQItem[]
}

export default function FAQ({ items }: FAQProps) {
  return (
    <div className="space-y-3">
      {items.map((item) => (
        <FAQAccordion key={item.question} question={item.question} answer={item.answer} />
      ))}
    </div>
  )
}
