# Noely Teixeira – Corretora de Seguros

Este projeto implementa o novo site da Noely Teixeira – Corretora de Seguros utilizando **Next.js 14** (App Router), **TypeScript** e **Tailwind CSS**. O foco é oferecer uma experiência moderna, responsiva e com alta performance, seguindo as estratégias de UX e SEO definidas nas fases anteriores.

## Como rodar localmente

1. **Instale as dependências**: Certifique‑se de ter o Node.js (>=16) e o npm instalados. Navegue até a pasta do projeto e execute:

   ```bash
   npm install
   ```

2. **Inicie o servidor de desenvolvimento**:

   ```bash
   npm run dev
   ```

   O site ficará disponível em `http://localhost:3000`.

3. **Build para produção** (opcional):

   ```bash
   npm run build
   npm start
   ```

## Estrutura do projeto

```
noely-site/
├─ app/                # Páginas e layout principal usando App Router
│  ├─ layout.tsx       # Layout global com header, footer e metadata
│  ├─ page.tsx         # Página inicial (Home)
│  ├─ sobre-nos/       # Página Sobre Nós
│  ├─ saude/           # Página de Planos de Saúde
│  ├─ automoveis/      # Página de Seguro Automotivo
│  ├─ odontologico/    # Página de Planos Odontológicos
│  ├─ patrimonial/     # Página de Seguro Patrimonial
│  ├─ residencial/     # Página de Seguro Residencial
│  ├─ vida/            # Página de Seguro de Vida
│  └─ contato/         # Página de Contato
├─ components/         # Componentes reutilizáveis (Header, Footer, Hero, etc.)
├─ tailwind.config.js  # Configurações de tema Tailwind (cores e fontes)
├─ postcss.config.js   # Configuração do PostCSS
├─ tsconfig.json       # Configuração do TypeScript
├─ next.config.js      # Configurações do Next.js
├─ package.json        # Dependências e scripts
└─ README.md           # Este arquivo
```

## Personalização

Alguns valores podem ser facilmente alterados para ajustar o site:

- **Links de WhatsApp**: os links dos botões estão definidos nos componentes `FloatingWhatsAppButton` e `CTASection`, bem como nos botões da página inicial e do contato. Para alterar o número ou a mensagem, edite o atributo `href` nesses componentes.
- **Links de Instagram**: substitua `#` pelo link real no `Header.tsx` e `Footer.tsx`.
- **Textos principais**: as mensagens, títulos e descrições estão nos arquivos de página (por exemplo, `app/page.tsx`, `app/sobre-nos/page.tsx`) e podem ser ajustados conforme necessário.

## Observações

- Este projeto utiliza imagens de placeholder hospedadas no domínio `via.placeholder.com` e `picsum.photos`. Substitua por fotos reais na pasta `public/` ou por links das seguradoras parceiras.
- A validação de formulários é básica e deve ser complementada com integração a um backend ou serviço de CRM para armazenamento dos leads.
- Para otimizar ainda mais a performance, evite adicionar bibliotecas pesadas e aproveite o carregamento automático de imagens com `next/image`.