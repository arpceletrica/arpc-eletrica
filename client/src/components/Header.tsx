import { Phone, MessageCircle } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <svg className="w-6 h-6" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#FFC107" strokeWidth="3"/>
              <path d="M 50 20 L 45 35 L 55 35 L 45 50 L 55 50 L 45 65 L 50 80" 
                    fill="none" stroke="#FFC107" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-black" style={{fontFamily: 'Montserrat, sans-serif'}}>ARPC</h1>
            <p className="text-xs text-gray-600">Soluções Elétricas</p>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#servicos" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
            Serviços
          </a>
          <a href="#wallbox" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
            Wallbox
          </a>
          <a href="#sobre" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
            Sobre
          </a>
          <a href="#contato" className="text-gray-700 hover:text-yellow-500 transition-colors font-medium">
            Contato
          </a>
        </nav>

        {/* Contact CTA */}
        <div className="flex items-center gap-3">
          <a 
            href="tel:+5598989155614"
            className="hidden sm:flex items-center gap-2 text-gray-700 hover:text-yellow-500 transition-colors"
          >
            <Phone size={18} />
            <span className="text-sm font-medium">(98) 98915-5614</span>
          </a>
          <a 
            href="https://wa.me/5598989155614"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex items-center gap-2"
          >
            <MessageCircle size={18} />
            <span className="hidden sm:inline">WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
