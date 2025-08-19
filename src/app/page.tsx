'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { 
  MapPin, 
  Star, 
  Users, 
  TrendingUp, 
  CheckCircle, 
  MessageCircle,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Linkedin,
  Search,
  Camera,
  Calendar,
  BarChart3
} from "lucide-react"
import { useState, useEffect, useRef } from "react"

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [logoColor, setLogoColor] = useState('colorful') // 'colorful', 'white', 'black'
  
  const heroRef = useRef<HTMLDivElement>(null)
  const beneficiosRef = useRef<HTMLDivElement>(null)
  const comoFuncionaRef = useRef<HTMLDivElement>(null)
  const planosRef = useRef<HTMLDivElement>(null)
  const depoimentosRef = useRef<HTMLDivElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Detect which section is in view to change logo color
      const sections = [
        { ref: heroRef, color: 'colorful' },
        { ref: beneficiosRef, color: 'black' },
        { ref: comoFuncionaRef, color: 'black' },
        { ref: planosRef, color: 'black' },
        { ref: depoimentosRef, color: 'black' },
        { ref: ctaRef, color: 'white' },
        { ref: footerRef, color: 'white' }
      ]

      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        if (section.ref.current) {
          const { offsetTop, offsetHeight } = section.ref.current
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setLogoColor(section.color)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    handleScroll() // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getLogoSrc = () => {
    switch (logoColor) {
      case 'white':
        return '/google-logo-white.png'
      case 'black':
        return '/google-logo-black.png'
      default:
        return '/google-logo.png'
    }
  }

  const whatsappLink = "https://wa.me/5561998039141"
  const whatsappMessage = "Olá! Tenho interesse na otimização do meu Google Meu Negócio. Podem me ajudar?"

  const beneficios = [
    {
      icon: <Search className="w-8 h-8 text-blue-600" />,
      title: "Seja encontrado facilmente",
      description: "Por quem procura seus serviços na sua região"
    },
    {
      icon: <Star className="w-8 h-8 text-yellow-600" />,
      title: "Aumente sua credibilidade",
      description: "Com fotos, avaliações e descrição persuasiva"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "Atraia clientes locais",
      description: "Prontos para comprar seus produtos ou serviços"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-600" />,
      title: "Relatórios claros",
      description: "Acompanhe seu crescimento em tempo real"
    }
  ]

  const passos = [
    {
      numero: "01",
      titulo: "Diagnóstico gratuito",
      descricao: "Análise completa do seu perfil atual e identificação de oportunidades",
      icon: <Search className="w-6 h-6" />
    },
    {
      numero: "02", 
      titulo: "Otimização completa",
      descricao: "Descrição, fotos, categorias, produtos/serviços e informações de contato",
      icon: <Camera className="w-6 h-6" />
    },
    {
      numero: "03",
      titulo: "Estratégia de conteúdo",
      descricao: "Posts semanais e estratégia para coletar avaliações positivas",
      icon: <Calendar className="w-6 h-6" />
    },
    {
      numero: "04",
      titulo: "Relatórios e acompanhamento",
      descricao: "Métricas detalhadas e ajustes para melhorar seus resultados",
      icon: <BarChart3 className="w-6 h-6" />
    }
  ]

  const planos = [
    {
      nome: "Plano Inicial",
      preco: "R$ 350",
      periodo: "único",
      descricao: "Otimização completa do seu perfil",
      recursos: [
        "Diagnóstico gratuito",
        "Otimização de perfil completa",
        "Até 10 fotos profissionais",
        "Descrição persuasiva",
        "Categorias corretas",
        "Suporte por 30 dias"
      ],
      destaque: false
    },
    {
      nome: "Plano Mensal",
      preco: "R$ 450",
      periodo: "/mês",
      descricao: "Gestão completa com resultados contínuos",
      recursos: [
        "Tudo do Plano Inicial",
        "Postagens semanais",
        "Gestão de avaliações",
        "Relatórios mensais",
        "Ajustes estratégicos",
        "Suporte prioritário",
        "Cancelamento a qualquer momento"
      ],
      destaque: true
    }
  ]

  const depoimentos = [
    {
      nome: "Maria Silva",
      empresa: "Salão Beleza Pura",
      texto: "Depois da otimização, meu salão apareceu no topo das pesquisas. As ligações de clientes aumentaram 70%!",
      avaliacao: 5
    },
    {
      nome: "João Santos",
      empresa: "Restaurante Sabor Caseiro",
      texto: "Excelente serviço! Meu restaurante está sempre lotado nos fins de semana. Vale muito cada centavo.",
      avaliacao: 5
    },
    {
      nome: "Ana Costa",
      empresa: "Clínica Bem-Estar",
      texto: "Profissionais capacitados e resultados reais. Minha clínica agora é referência na região.",
      avaliacao: 5
    }
  ]

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Fixo */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="w-12 h-12 flex items-center justify-center">
                <img 
                  src={getLogoSrc()} 
                  alt="Google Logo" 
                  className="w-full h-full object-contain"
                />
              </div>
              <span className={`text-xl font-bold ${logoColor === 'white' ? 'text-white' : 'text-gray-900'}`}>GMN Pro</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <button 
                onClick={() => scrollToSection('beneficios')}
                className={`${logoColor === 'white' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors`}
              >
                Benefícios
              </button>
              <button 
                onClick={() => scrollToSection('como-funciona')}
                className={`${logoColor === 'white' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors`}
              >
                Como Funciona
              </button>
              <button 
                onClick={() => scrollToSection('planos')}
                className={`${logoColor === 'white' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors`}
              >
                Planos
              </button>
              <button 
                onClick={() => scrollToSection('depoimentos')}
                className={`${logoColor === 'white' ? 'text-gray-300 hover:text-white' : 'text-gray-700 hover:text-blue-600'} transition-colors`}
              >
                Depoimentos
              </button>
            </nav>
            <Button 
              onClick={() => window.open(`${whatsappLink}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
              className="bg-green-600 hover:bg-green-700 text-white font-semibold"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              Fale no WhatsApp
            </Button>
          </div>
        </div>
      </header>

      {/* Seção Hero */}
      <section ref={heroRef} className="pt-32 pb-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                #1 em Otimização Local
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Coloque sua empresa no topo do Google e atraia mais clientes todos os dias
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Otimização profissional do seu Google Meu Negócio — visibilidade rápida e resultados reais
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  onClick={() => window.open(`${whatsappLink}?text=${encodeURIComponent(whatsappMessage)}`, '_blank')}
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg px-8 py-4"
                >
                  Quero aparecer no Google agora
                </Button>
                <Button 
                  onClick={() => scrollToSection('planos')}
                  variant="outline"
                  size="lg"
                  className="border-2 border-gray-300 text-gray-700 hover:bg-gray-50 font-semibold text-lg px-8 py-4"
                >
                  Ver planos
                </Button>
              </div>
              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                  <span>Diagnóstico gratuito</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                  <span>Resultados em 7 dias</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 text-green-600 mr-1" />
                  <span>Suporte dedicado</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6">
                <div className="bg-gray-100 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Google Maps</div>
                      <div className="text-sm text-gray-600">Sua empresa aqui</div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 bg-blue-200 rounded-full w-full"></div>
                    <div className="h-2 bg-green-200 rounded-full w-4/5"></div>
                    <div className="h-2 bg-yellow-200 rounded-full w-3/5"></div>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-lg p-4 text-white text-center">
                  <div className="text-2xl font-bold mb-2">Seu Negócio #1</div>
                  <div className="text-sm opacity-90">Nas pesquisas locais</div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center">
                <Star className="w-8 h-8 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section ref={beneficiosRef} id="beneficios" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Por que otimizar seu Google Meu Negócio?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transforme a forma como clientes encontram seu negócio local
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {beneficios.map((beneficio, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
                <CardHeader>
                  <div className="flex justify-center mb-4">
                    {beneficio.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{beneficio.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-600 text-base">
                    {beneficio.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section ref={comoFuncionaRef} id="como-funciona" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Como funciona nosso processo
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Um método simples e eficaz para colocar seu negócio no topo
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {passos.map((passo, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-lg">
                      {passo.numero}
                    </div>
                    <div className="text-blue-600">
                      {passo.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{passo.titulo}</h3>
                  <p className="text-gray-600">{passo.descricao}</p>
                </div>
                {index < passos.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-blue-300">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planos e Preços */}
      <section ref={planosRef} id="planos" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Escolha o plano ideal para seu negócio
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Soluções flexíveis para empresas de todos os tamanhos
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {planos.map((plano, index) => (
              <Card key={index} className={`relative ${plano.destaque ? 'border-2 border-blue-600 shadow-2xl' : 'border border-gray-200 shadow-lg'}`}>
                {plano.destaque && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-blue-600 text-white px-4 py-2">
                      Mais Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-gray-900">{plano.nome}</CardTitle>
                  <CardDescription className="text-gray-600">{plano.descricao}</CardDescription>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-gray-900">{plano.preco}</span>
                    <span className="text-gray-600 ml-2">{plano.periodo}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {plano.recursos.map((recurso, rIndex) => (
                      <li key={rIndex} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{recurso}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    onClick={() => window.open(`${whatsappLink}?text=${encodeURIComponent(`Olá! Tenho interesse no ${plano.nome}. Podem me ajudar?`)}`, '_blank')}
                    className={`w-full mt-6 ${plano.destaque ? 'bg-blue-600 hover:bg-blue-700' : 'bg-gray-900 hover:bg-gray-800'} text-white font-semibold py-3`}
                    size="lg"
                  >
                    Contratar agora
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section ref={depoimentosRef} id="depoimentos" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Mais de 500 empresas já aumentaram sua visibilidade local
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {depoimentos.map((depoimento, index) => (
              <Card key={index} className="border-0 shadow-lg overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {[...Array(depoimento.avaliacao)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">
                    "{depoimento.texto}"
                  </p>
                  <div className="border-t pt-4">
                    <div className="font-semibold text-gray-900">{depoimento.nome}</div>
                    <div className="text-sm text-gray-600">{depoimento.empresa}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section ref={ctaRef} className="py-20 px-4 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Sua empresa merece ser encontrada no Google. Vamos colocar você no topo?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Comece com um diagnóstico gratuito e descubra como podemos transformar sua presença digital
          </p>
          <Button 
            onClick={() => window.open(`${whatsappLink}?text=${encodeURIComponent("Olá! Gostaria de fazer o diagnóstico gratuito do meu Google Meu Negócio.")}`, '_blank')}
            size="lg"
            className="bg-white text-blue-600 hover:bg-gray-100 font-semibold text-lg px-8 py-4"
          >
            Quero meu diagnóstico gratuito
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer ref={footerRef} className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img 
                    src="/google-logo-white.png" 
                    alt="Google Logo" 
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-xl font-bold">GMN Pro</span>
              </div>
              <p className="text-gray-400">
                Especialistas em otimização do Google Meu Negócio para empresas locais.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contato</h3>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-2" />
                  <a href={`tel:61998039141`} className="hover:text-white">(61) 99803-9141</a>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="hover:text-white">WhatsApp</a>
                </div>
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  <a href="mailto:contato@gmnpro.com.br" className="hover:text-white">contato@gmnpro.com.br</a>
                </div>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Links Rápidos</h3>
              <div className="space-y-2 text-gray-400">
                <button 
                  onClick={() => scrollToSection('beneficios')}
                  className="block hover:text-white transition-colors"
                >
                  Benefícios
                </button>
                <button 
                  onClick={() => scrollToSection('como-funciona')}
                  className="block hover:text-white transition-colors"
                >
                  Como Funciona
                </button>
                <button 
                  onClick={() => scrollToSection('planos')}
                  className="block hover:text-white transition-colors"
                >
                  Planos
                </button>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Siga-nos</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          <Separator className="bg-gray-700 mb-8" />
          <div className="text-center text-gray-400 text-sm">
            <p className="mb-2">
              Não somos Google. Somos especialistas em otimização de perfis no Google Meu Negócio.
            </p>
            <p>
              © 2024 GMN Pro. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}