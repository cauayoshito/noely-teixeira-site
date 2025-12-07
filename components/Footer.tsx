/**
 * Footer component with contact information, opening hours and legal notice.
 */
export default function Footer() {
  return (
    <footer className="mt-16 bg-slate-900 text-white">
      <div className="content-wrapper grid grid-cols-1 gap-10 py-14 md:grid-cols-3">
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-[0.1em] text-amber-300">
            Noely Teixeira
          </p>
          <h3 className="text-2xl font-bold">Corretora de Seguros</h3>
          <p className="text-sm text-slate-200">
            Consultoria humanizada e premium para saúde, seguros e benefícios em
            Salvador e Região Metropolitana.
          </p>
          <div className="flex flex-wrap gap-2 text-xs text-amber-200">
            <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">
              +1000 clientes
            </span>
            <span className="rounded-full bg-white/10 px-3 py-1 ring-1 ring-white/15">
              10 anos de mercado
            </span>
          </div>
        </div>
        <div className="space-y-3">
          <h4 className="text-lg font-semibold">Contato</h4>
          <a
            href="https://api.whatsapp.com/send?phone=5571996290118"
            className="block text-amber-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp: (71) 99629-0118
          </a>
          <a
            href="mailto:contato@planodesaudebahia.com.br"
            className="block hover:text-white"
          >
            contato@planodesaudebahia.com.br
          </a>
          <p className="text-sm text-slate-200">
            Horário: 07h às 19h – Segunda à sexta
          </p>
        </div>
        <div className="space-y-3">
          <h4 className="text-lg font-semibold">Endereço</h4>
          <p className="text-sm text-slate-200">
            Av. Estados Unidos, 397 – Comércio
          </p>
          <p className="text-sm text-slate-200">
            Ed. Cidade Salvador, Salvador – BA
          </p>
          <p className="text-sm text-slate-200">CEP 40010-020</p>
          <div className="flex items-center gap-3 text-sm text-slate-200">
            <a href="https://www.instagram.com" className="hover:text-white">
              Instagram
            </a>
            <span className="h-1 w-1 rounded-full bg-slate-500" />
            <a
              href="https://api.whatsapp.com/send?phone=5571996290118"
              className="hover:text-white"
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="content-wrapper border-t border-white/10 px-0 py-4 text-center text-xs text-slate-300">
        © 2025 Noely Teixeira – Planos de Saúde e Seguros em Salvador/BA. Todos
        os direitos reservados.
      </div>
    </footer>
  );
}
