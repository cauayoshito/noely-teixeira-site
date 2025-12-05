/**
 * Footer component with contact information, opening hours and legal notice.
 */
export default function Footer() {
  return (
    <footer className="bg-secondary text-white py-8 px-4 mt-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h3 className="font-bold mb-2">Contato</h3>
          <p>Telefone/WhatsApp: <a href="https://api.whatsapp.com/send?phone=5571996290118" className="underline">(71) 99629-0118</a></p>
          <p>Horário: 07h às 19h – Segunda à sexta</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Endereço</h3>
          <p>Av. Estados Unidos, 397 – Comércio</p>
          <p>Ed. Cidade Salvador, Salvador – BA</p>
          <p>CEP 40010-020</p>
        </div>
        <div>
          <h3 className="font-bold mb-2">Redes sociais</h3>
          <p><a href="#" className="underline">WhatsApp</a> | <a href="#" className="underline">Instagram</a></p>
        </div>
      </div>
      <div className="text-center text-sm mt-6">
        © 2025 Planos de Saúde em Salvador Bahia. Todos os direitos reservados.
      </div>
    </footer>
  );
}