import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Layout from "../components/Layout";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "What is your return policy?",
      answer: "We offer a 30-day return policy on all items. If you're not satisfied with your purchase, simply return the item in its original condition with the receipt for a full refund or exchange."
    },
    {
      question: "How long does shipping take?",
      answer: "Standard shipping takes 5-7 business days. We also offer express shipping (2-3 days) and overnight delivery options at checkout. All orders are tracked and you'll receive a tracking number via email."
    },
    {
      question: "Do you offer international shipping?",
      answer: "Yes, we ship to most countries worldwide. International shipping rates vary by destination. You can calculate your shipping cost at checkout before placing your order."
    },
    {
      question: "How can I track my order?",
      answer: "Once your order is shipped, you'll receive a tracking number via email. You can use this number to track your package on the carrier's website or through your account on our site."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, Apple Pay, and Google Pay. All transactions are secure and encrypted."
    },
    {
      question: "Are your products authentic?",
      answer: "Yes, all our products are 100% authentic. We work directly with manufacturers and authorized distributors to ensure quality and authenticity."
    },
    {
      question: "Do you offer gift cards?",
      answer: "Yes! Gift cards are available in any denomination from $25 to $500. They make perfect gifts and never expire."
    },
    {
      question: "How do I use a coupon code?",
      answer: "During checkout, there's a 'Promo Code' field where you can enter your coupon code. The discount will be applied automatically to your order total."
    },
    {
      question: "What's your size chart?",
      answer: "Each product page includes a detailed size chart. We recommend checking the specific chart for each item, as sizing may vary by manufacturer."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach us via email at support@smartwear.com, call us at +1 (555) 123-4567, or use the contact form on our Contact page. We respond within 24 hours."
    }
  ];

  return (
    <Layout>
      <div className="bg-gray-50">
        <div className="bg-gradient-to-br from-blue-600 via-cyan-600 to-teal-600 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
              <p className="text-xl text-gray-100 max-w-3xl mx-auto">
                Find answers to common questions about our products, shipping, returns, and more.
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full bg-white rounded-lg shadow-sm p-6 text-left hover:shadow-md transition"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">{faq.question}</h3>
                    <ChevronDown
                      className={`h-5 w-5 text-gray-500 transition ${
                        openIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {openIndex === index && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-4 text-gray-600 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.p>
                  )}
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 bg-white rounded-lg shadow-sm p-8 text-center"
          >
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Didn't find an answer?</h2>
            <p className="text-gray-600 mb-6">
              Our support team is here to help. Reach out to us and we'll get back to you as soon as possible.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-lg font-semibold hover:from-blue-700 hover:to-cyan-700 transition"
            >
              Contact Us
            </a>
          </motion.div>
        </div>
      </div>
    </Layout>
  );
}