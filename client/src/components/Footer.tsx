import { Phone, Mail, MapPin, Instagram, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Sobre */}
          <div>
            <h3 className="text-lg mb-4 text-yellow-400 font-bold" style={{fontFamily: 'Montserrat, sans-serif'}}>ARPC Soluções</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Especialistas em soluções elétricas profissionais em São Luís/MA. Confiança, qualidade e segurança em cada projeto.
            </p>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-lg mb-4 text-yellow-400 font-bold" style={{fontFamily: 'Montserrat, sans-serif'}}>Serviços</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Instalações Elétricas</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Manutenção Preventiva</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Quadros Elétricos</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Soluções Inteligentes</a></li>
              <li><a href="#" className="hover:text-yellow-400 transition-colors">Instalação de Wallbox</a></li>
            </ul>
          </div>

          {/* Localização */}
          <div>
            <h3 className="text-lg mb-4 text-yellow-400 font-bold" style={{fontFamily: 'Montserrat, sans-serif'}}>Localização</h3>
            <div className="flex items-start gap-2 text-sm text-gray-300">
              <MapPin size={18} className="text-yellow-400 mt-0.5 flex-shrink-0" />
              <span>São Luís, Maranhão<br />Brasil</span>
            </div>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-lg mb-4 text-yellow-400 font-bold" style={{fontFamily: 'Montserrat, sans-serif'}}>Contato</h3>
            <div className="space-y-3">
              <a href="tel:+5598989155614" className="flex items-center gap-2 text-sm text-gray-300 hover:text-yellow-400 transition-colors">
                <Phone size={16} />
                (98) 98915-5614
              </a>
              <a href="https://wa.me/5598989155614" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-yellow-400 transition-colors">
                <MessageCircle size={16} />
                WhatsApp
              </a>
              <a href="https://instagram.com/arpcsolucoeseletricas" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-300 hover:text-yellow-400 transition-colors">
                <Instagram size={16} />
                @arpcsolucoeseletricas
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <p className="text-sm text-gray-400 mb-4 md:mb-0">
              © 2026 ARPC Soluções Elétricas. Todos os direitos reservados.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/arpcsolucoeseletricas" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://wa.me/5598989155614" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-400 transition-colors">
                <MessageCircle size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
