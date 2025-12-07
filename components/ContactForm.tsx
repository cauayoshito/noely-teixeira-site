"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    // TODO: integrar com API futuramente
    setSubmitted(true);
  }

  return (
    <div className="max-w-3xl mx-auto">
      {submitted ? (
        <div className="bg-green-100 border border-green-300 text-green-800 p-4 rounded">
          Sua mensagem foi enviada com sucesso! Em breve entraremos em contato.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="nome"
              className="block font-medium text-gray-700 mb-1"
            >
              Nome
            </label>
            <input
              type="text"
              id="nome"
              name="nome"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block font-medium text-gray-700 mb-1"
            >
              E-mail
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
            />
          </div>

          <div>
            <label
              htmlFor="telefone"
              className="block font-medium text-gray-700 mb-1"
            >
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              name="telefone"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
            />
          </div>

          <div>
            <label
              htmlFor="assunto"
              className="block font-medium text-gray-700 mb-1"
            >
              Assunto
            </label>
            <select
              id="assunto"
              name="assunto"
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
              defaultValue=""
            >
              <option value="" disabled>
                Selecione
              </option>
              <option value="cotacao">Solicitar cotação</option>
              <option value="duvidas">Dúvidas sobre planos</option>
              <option value="outros">Outros assuntos</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="mensagem"
              className="block font-medium text-gray-700 mb-1"
            >
              Mensagem
            </label>
            <textarea
              id="mensagem"
              name="mensagem"
              rows={4}
              required
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-primary"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-primary text-white font-semibold py-3 px-6 rounded-md hover:opacity-90 transition-opacity"
          >
            Enviar mensagem
          </button>
        </form>
      )}
    </div>
  );
}
