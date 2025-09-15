import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Home, CreditCard, Shield, Users, Calculator, CheckCircle, Star, Phone, Mail, ChevronRight, X, Building, MapPin, MessageCircle } from "lucide-react";
import heroCasaImage from "@/assets/hero-casa.jpg";
const Index = () => {
  const handleWhatsAppContact = () => {
    window.open('https://api.whatsapp.com/send?phone=5531996925313&text=Ol%C3%A1%2C+tenho+interesse+em+simular+um+cons%C3%B3rcio+de+casa%2Fapartamento.+Pode+me+ajudar%3F', '_blank');
  };
  const handleSimulationSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const name = formData.get('name');
    const phone = formData.get('phone');
    const property = formData.get('property');
    const value = formData.get('value');
    
    const message = `Olá, gostaria de simular um consórcio de imóvel:
    
👤 Nome: ${name}
📱 WhatsApp: ${phone}
🏠 Tipo de imóvel: ${property}
💰 Valor estimado: R$ ${value}

Aguardo retorno para prosseguir com a simulação!`;
    
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://api.whatsapp.com/send?phone=5531996925313&text=${encodedMessage}`, '_blank');
  };
  return <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/lovable-uploads/c5604e87-e4d6-41ab-b1a7-9b2e28dd53e2.png" alt="Plenus Seguros" className="h-10 w-auto" />
          </div>
          <Button variant="secondary" size="sm" onClick={handleWhatsAppContact}>
            <Phone className="h-4 w-4 mr-2" />
            Contato
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-left">
              <Badge variant="secondary" className="mb-6 bg-plenus-orange/10 text-plenus-orange border-plenus-orange/20">
                Zero Juros • Sem Entrada
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-primary-foreground leading-tight">
                Conquiste sua
                <span className="text-secondary block">casa própria</span>
              </h1>
              <p className="text-xl mb-8 text-primary-foreground/80 max-w-lg">
                Consórcio imobiliário sem juros, sem entrada obrigatória. Casa, apartamento ou lote - simule agora!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" size="lg" onClick={() => document.getElementById('simulacao')?.scrollIntoView({
                behavior: 'smooth'
              })} className="text-lg px-8 py-6">
                  Simule Agora
                  <Calculator className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg" onClick={handleWhatsAppContact} className="text-lg px-8 py-6 border-primary-foreground/20 hover:bg-primary-foreground text-slate-950">
                  Falar com Especialista
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="lg:order-2">
              <img src={heroCasaImage} alt="Casa própria - Consórcio Plenus" className="w-full h-auto rounded-2xl shadow-elegant" />
            </div>
          </div>
        </div>
      </section>

      {/* Simulação */}
      <section id="simulacao" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Simule seu consórcio imobiliário
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Preencha os dados abaixo e receba sua simulação personalizada para casa, apartamento ou lote
            </p>

            <Card className="shadow-elegant">
              <CardContent className="p-8">
                <form onSubmit={handleSimulationSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome completo</Label>
                      <Input id="name" name="name" placeholder="Seu nome completo" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">WhatsApp</Label>
                      <Input id="phone" name="phone" type="tel" placeholder="(11) 99999-9999" required />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="property">Tipo de imóvel</Label>
                    <select id="property" name="property" className="w-full p-3 border border-input rounded-lg bg-background" required>
                      <option value="">Selecione o tipo de imóvel</option>
                      <option value="Casa Popular">Casa Popular (até R$ 200.000)</option>
                      <option value="Casa Média">Casa Média (R$ 200.000 - R$ 500.000)</option>
                      <option value="Casa Premium">Casa Premium (acima de R$ 500.000)</option>
                      <option value="Apartamento">Apartamento</option>
                      <option value="Lote/Terreno">Lote/Terreno</option>
                      <option value="Kitnet/Studio">Kitnet/Studio</option>
                    </select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="value">Valor estimado do imóvel</Label>
                    <Input id="value" name="value" placeholder="Ex: 350.000" required />
                  </div>
                  
                  <Button type="submit" className="w-full" size="lg" variant="secondary">
                    Receber Simulação no WhatsApp
                    <Phone className="ml-2 h-5 w-5" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-plenus-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Por que escolher nosso consórcio imobiliário?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Vantagens exclusivas que fazem toda a diferença na hora de conquistar seu imóvel
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center border-0 shadow-card hover:shadow-elegant transition-all">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-orange rounded-2xl flex items-center justify-center">
                  <CreditCard className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Zero Juros</h3>
                <p className="text-muted-foreground">Sem juros abusivos que inflam sua parcela. Pague apenas o valor real do imóvel.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-card hover:shadow-elegant transition-all">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-orange rounded-2xl flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Sem Entrada</h3>
                <p className="text-muted-foreground">Comece seu consórcio sem precisar dar entrada. Mais acessibilidade para você.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-card hover:shadow-elegant transition-all">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-orange rounded-2xl flex items-center justify-center">
                  <Home className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Casa, Apartamento ou Lote</h3>
                <p className="text-muted-foreground">Escolha entre casa, apartamento ou terreno. Flexibilidade para seu sonho.</p>
              </CardContent>
            </Card>

            <Card className="text-center border-0 shadow-card hover:shadow-elegant transition-all">
              <CardContent className="pt-8 pb-6">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-orange rounded-2xl flex items-center justify-center">
                  <Shield className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-primary">Segurança Garantida</h3>
                <p className="text-muted-foreground">Investimento protegido e regulamentado pelo Banco Central do Brasil.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Comparação */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Consórcio vs Financiamento Imobiliário
            </h2>
            <p className="text-xl text-muted-foreground">
              Veja as diferenças e entenda por que o consórcio é a melhor opção para seu imóvel
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="overflow-hidden shadow-elegant">
              <CardContent className="p-0">
                <div className="grid md:grid-cols-3 gap-0">
                  {/* Header */}
                  <div className="bg-muted p-6 font-semibold text-center border-b md:border-b-0 md:border-r">
                    Características
                  </div>
                  <div className="bg-gradient-orange text-white p-6 font-semibold text-center border-b md:border-b-0 md:border-r">
                    Consórcio Imobiliário
                  </div>
                  <div className="bg-destructive/10 text-destructive p-6 font-semibold text-center">
                    Financiamento Imobiliário
                  </div>

                  {/* Rows */}
                  <div className="p-6 border-b border-r font-medium">Juros</div>
                  <div className="p-6 border-b border-r text-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-1" />
                    <span className="text-green-600 font-semibold">Zero Juros</span>
                  </div>
                  <div className="p-6 border-b text-center">
                    <X className="h-6 w-6 text-destructive mx-auto mb-1" />
                    <span className="text-destructive font-semibold">Até 12% a.a.</span>
                  </div>

                  <div className="p-6 border-b border-r font-medium">Entrada</div>
                  <div className="p-6 border-b border-r text-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-1" />
                    <span className="text-green-600 font-semibold">Não obrigatória</span>
                  </div>
                  <div className="p-6 border-b text-center">
                    <X className="h-6 w-6 text-destructive mx-auto mb-1" />
                    <span className="text-destructive font-semibold">Obrigatória (30-50%)</span>
                  </div>

                  <div className="p-6 border-r font-medium">Valor Total Pago</div>
                  <div className="p-6 border-r text-center">
                    <CheckCircle className="h-6 w-6 text-green-600 mx-auto mb-1" />
                    <span className="text-green-600 font-semibold">Preço negociado</span>
                  </div>
                  <div className="p-6 text-center">
                    <X className="h-6 w-6 text-destructive mx-auto mb-1" />
                    <span className="text-destructive font-semibold">Até 100% mais caro</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Processo */}
      <section className="py-16 bg-plenus-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Como funciona?
            </h2>
            <p className="text-xl text-muted-foreground">
              Apenas 3 passos simples para conquistar seu imóvel
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-orange rounded-full flex items-center justify-center text-white text-2xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Simule</h3>
              <p className="text-muted-foreground">
                Faça sua simulação gratuita para casa, apartamento ou lote que melhor se adapta ao seu perfil.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-orange rounded-full flex items-center justify-center text-white text-2xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Escolha o Imóvel</h3>
              <p className="text-muted-foreground">
                Defina o tipo de imóvel e valor que cabe no seu orçamento. Flexibilidade total para sua realidade.
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 mx-auto mb-6 bg-gradient-orange rounded-full flex items-center justify-center text-white text-2xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-4 text-primary">Conquiste seu Lar</h3>
              <p className="text-muted-foreground">
                Nosso time de especialistas te acompanha em todo o processo até a entrega das chaves do seu novo lar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Autoridade e Prova Social */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge variant="secondary" className="mb-4 bg-plenus-orange/10 text-plenus-orange border-plenus-orange/20">
                Mais de 10 anos de experiência
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">
                Especialistas em consórcio imobiliário há mais de 10 anos
              </h2>
              
              <div className="grid grid-cols-2 gap-6 mb-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-plenus-orange mb-2">10+</div>
                  <p className="text-muted-foreground">Anos de experiência</p>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-plenus-orange mb-2">1000+</div>
                  <p className="text-muted-foreground">Clientes satisfeitos</p>
                </div>
              </div>

              <div className="space-y-4">
                <Card className="border-l-4 border-l-plenus-orange shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex text-plenus-orange">
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-2">
                          "Realizei o sonho da casa própria! Consegui minha casa sem juros e sem entrada. A equipe da Plenus foi fundamental no processo."
                        </p>
                        <p className="font-semibold text-primary">— Maria Silva, São Paulo</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-l-4 border-l-plenus-orange shadow-card">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="flex text-plenus-orange">
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                        <Star className="h-5 w-5 fill-current" />
                      </div>
                      <div>
                        <p className="text-muted-foreground mb-2">
                          "Transparência total e processo super simples. Consegui meu apartamento dos sonhos. Recomendo!"
                        </p>
                        <p className="font-semibold text-primary">— João Santos, Rio de Janeiro</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <Card className="shadow-card">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-primary mb-6 text-center">
                    Sobre a Plenus Seguros
                  </h3>
                  <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                    A Plenus Seguros possui profissionais com mais de 10 anos de experiência no mercado, sendo especialista em oferecer diversas modalidades de seguros, consórcios e benefícios para pessoas físicas e empresas. Conseguimos isso por meio de um processo diferenciado e qualificado de seus profissionais e também pela sólida parceria com as melhores seguradoras e administradoras de consórcio do mercado. A empresa está capacitada e vem identificando quais são os produtos que melhor atendem as necessidades e expectativas de seus clientes.
                  </p>
                  
                  <Button variant="outline" onClick={handleWhatsAppContact} className="w-full">
                    <Phone className="h-4 w-4 mr-2" />
                    Falar com Especialista
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-plenus-gray">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary">
              Perguntas Frequentes
            </h2>
            <p className="text-xl text-muted-foreground">
              Tire suas dúvidas sobre consórcio imobiliário
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="bg-card rounded-lg px-6 shadow-card">
                <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                  Como funciona o consórcio imobiliário?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O consórcio imobiliário é um grupo de pessoas que se reúnem para adquirir imóveis. Mensalmente, através de sorteios e lances, os participantes são contemplados e podem adquirir casa, apartamento ou terreno. É regulamentado pelo Banco Central.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="bg-card rounded-lg px-6 shadow-card">
                <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                  Preciso dar entrada?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Não! No consórcio você não precisa dar entrada obrigatória. Você pode escolher dar um lance para antecipar sua contemplação, mas não é obrigatório.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="bg-card rounded-lg px-6 shadow-card">
                <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                  O que acontece em caso de atraso?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Em caso de atraso, há uma multa de 2% sobre o valor da parcela e juros de mora de 1% ao mês. O importante é manter a comunicação conosco para encontrarmos a melhor solução.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="bg-card rounded-lg px-6 shadow-card">
                <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                  Posso usar o FGTS no consórcio imobiliário?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  Sim! Você pode usar o FGTS para dar lance ou quitar parcelas do seu consórcio imobiliário, seguindo as regras da Caixa Econômica Federal.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="bg-card rounded-lg px-6 shadow-card">
                <AccordionTrigger className="text-left font-semibold text-primary hover:no-underline">
                  Qual a diferença entre sorteio e lance?
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  O sorteio acontece mensalmente e é gratuito. Já o lance é um valor extra que você pode oferecer para aumentar suas chances de contemplação imediata.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <img src="/lovable-uploads/c5604e87-e4d6-41ab-b1a7-9b2e28dd53e2.png" alt="Plenus Seguros - logo" className="h-12 w-auto mx-auto mb-6" loading="lazy" />
            <p className="mb-4">
              Sua parceria de confiança para realizar o sonho da casa própria
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <span>© 2025 Plenus Seguros</span>
              <span>CNPJ: XX.XXX.XXX/XXXX-XX</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Botão Flutuante WhatsApp */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button 
          size="lg" 
          onClick={handleWhatsAppContact}
          className="rounded-full w-16 h-16 bg-green-500 hover:bg-green-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
        >
          <MessageCircle className="h-8 w-8" />
        </Button>
      </div>
    </div>;
  };
export default Index;