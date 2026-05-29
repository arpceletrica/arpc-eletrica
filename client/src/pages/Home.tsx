import { Zap, Wrench, Lightbulb, Smartphone, CheckCircle, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const montserratStyle = { fontFamily: 'Montserrat, sans-serif' };

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative bg-black text-white overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 opacity-40"
            style={{
              backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310419663030424641/N6PoHyaeNS5ELRHt5yoeN3/hero-background-fRDWrWyVnSqmDDMRmWLR9s.webp)',
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          
          {/* Content */}
          <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
            <div className="max-w-2xl">
              <div className="mb-6 animate-fade-up">
                <span className="service-badge">
                  <Zap size={18} />
                  Soluções Elétricas Profissionais
                </span>
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight" style={montserratStyle}>
                Eletricista em São Luís
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Especialista em instalações elétricas, manutenção preventiva, quadros elétricos, wallbox  e soluções inteligentes. Atendimento 24h com segurança e qualidade garantida.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="https://wa.me/5598989155614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary flex items-center justify-center gap-2 text-lg"
                >
                  Solicitar Orçamento
                  <ArrowRight size={20} />
                </a>
                <a 
                  href="tel:+5598989155614"
                  className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-200 flex items-center justify-center gap-2"
                >
                  Ligar Agora
                  <Zap size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Serviços Section */}
        <section id="servicos" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-4 font-bold" style={montserratStyle}>Nossos Serviços</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Oferecemos soluções elétricas completas para residências e comércios em São Luís
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Service 1 */}
              <div className="service-card">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="text-black" size={24} />
                </div>
                <h3 className="text-lg mb-2 font-bold" style={montserratStyle}>Instalações Elétricas</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Instalação de pontos elétricos, iluminação e fiação com segurança e precisão.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    Pontos elétricos
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    Instalação de Padrão Equatorial.
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    Instalação de Motores Elétricos.
                  </li>
                </ul>
              </div>

              {/* Service 2 */}
              <div className="service-card">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                  <Wrench className="text-black" size={24} />
                </div>
                <h3 className="text-lg mb-2 font-bold" style={montserratStyle}>Manutenção Preventiva</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Inspeções regulares para evitar problemas e garantir segurança elétrica.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    Inspeção de painéis
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    Troca de disjuntores
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    Instalação completa.
                  </li>
                </ul>
              </div>

              {/* Service 3 */}
              <div className="service-card">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                  <Lightbulb className="text-black" size={24} />
                </div>
                <h3 className="text-lg mb-2 font-bold" style={montserratStyle}>Quadros Elétricos</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Instalação, manutenção e modernização de quadros de distribuição elétrica.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    Quadros residenciais
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    Quadros comerciais
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    Modernização de painéis
                  </li>
                </ul>
              </div>

              {/* Service 4 */}
              <div className="service-card">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                  <Smartphone className="text-black" size={24} />
                </div>
                <h3 className="text-lg mb-2 font-bold" style={montserratStyle}>Soluções Inteligentes</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Automação residencial e comercial com tecnologia de ponta.
                </p>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    Iluminação inteligente
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    Automação residencial
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle size={16} className="text-yellow-400 mt-0.5 flex-shrink-0" />
                    Eficiência energética
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Wallbox Section */}
        <section id="wallbox" className="py-20 md:py-32 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Image */}
              <div className="order-2 lg:order-1">
                <img 
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310419663030424641/N6PoHyaeNS5ELRHt5yoeN3/wallbox-installation-KYagRAJeqnnz4CCbqDx9Mv.webp"
                  alt="Instalação de Wallbox para veículos elétricos"
                  className="rounded-lg shadow-lg w-full"
                />
              </div>

              {/* Content */}
              <div className="order-1 lg:order-2">
                <span className="service-badge mb-4">
                  <Zap size={18} />
                  Tecnologia EV
                </span>
                
                <h2 className="text-4xl md:text-5xl mb-6 font-bold" style={montserratStyle}>
                  Instalação de Wallbox
                </h2>
                
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  Especializados em instalação profissional de carregadores para veículos elétricos. Oferecemos soluções seguras, rápidas e eficientes para sua residência ou comércio em São Luís.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-black mb-1" style={montserratStyle}>Instalação Profissional</h4>
                      <p className="text-gray-600 text-sm">Técnicos certificados seguindo todas as normas de segurança</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-black mb-1" style={montserratStyle}>Garantia Completa</h4>
                      <p className="text-gray-600 text-sm">Suporte técnico e garantia em todos os equipamentos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="text-yellow-400 mt-1 flex-shrink-0" size={20} />
                    <div>
                      <h4 className="font-semibold text-black mb-1" style={montserratStyle}>Preço Justo</h4>
                      <p className="text-gray-600 text-sm">Serviço profissional com qualidade.</p>
                    </div>
                  </div>
                </div>

                <a 
                  href="https://wa.me/5598989155614"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary inline-flex items-center gap-2 text-lg"
                >
                  Solicitar Orçamento
                  <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section id="sobre" className="py-20 md:py-32 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl mb-4 font-bold" style={montserratStyle}>Por que nos escolher?</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Somos referência em soluções elétricas em São Luís com experiência comprovada
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-black font-bold" style={montserratStyle}>3+</span>
                </div>
                <h3 className="text-xl mb-2 font-bold" style={montserratStyle}>Anos de Experiência</h3>
                <p className="text-gray-600">Confiança e expertise em soluções elétricas</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-black font-bold" style={montserratStyle}>500+</span>
                </div>
                <h3 className="text-xl mb-2 font-bold" style={montserratStyle}>Clientes Satisfeitos</h3>
                <p className="text-gray-600">Qualidade reconhecida pela comunidade</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-black font-bold" style={montserratStyle}>24/7</span>
                </div>
                <h3 className="text-xl mb-2 font-bold" style={montserratStyle}>Atendimento 24h</h3>
                <p className="text-gray-600">Sempre disponível para emergências</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="contato" className="py-20 md:py-32 bg-black text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl mb-6 font-bold" style={montserratStyle}>Pronto para começar?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Entre em contato conosco hoje mesmo para um orçamento gratuito e sem compromisso
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5598989155614"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary flex items-center justify-center gap-2 text-lg"
              >
                WhatsApp
                <ArrowRight size={20} />
              </a>
              <a 
                href="tel:+5598989155614"
                className="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-400 hover:text-black transition-all duration-200 flex items-center justify-center gap-2"
              >
                Ligar: (98) 98915-5614
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
