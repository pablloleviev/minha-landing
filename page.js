"use client"

import { CheckCircle, Clock, Heart, Zap, Star, Shield, Gift, Play } from "lucide-react"

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header/Headline Section */}
      <section className="bg-gradient-to-r from-green-600 to-emerald-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            🍃 Cansado de Dietas Sem Graça? 
            <br />
            <span className="text-yellow-300">Descubra o Segredo dos Smoothies</span>
            <br />
            Que Queimam Gordura em 30 Dias!
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-green-100">
            Emagreça de forma prazerosa e eficaz, sem sacrifícios ou horas na cozinha
          </p>
        </div>
      </section>

      {/* VSL Section */}
      <section className="py-12 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
            <div className="aspect-video bg-gray-800 rounded-xl flex items-center justify-center mb-4">
              <div className="text-center text-white">
                <Play className="w-16 h-16 mx-auto mb-4 text-green-400" />
                <p className="text-lg">🎥 Assista ao Vídeo Revelador</p>
                <p className="text-sm text-gray-300 mt-2">
                  Descubra como milhares de pessoas estão transformando seus corpos
                </p>
              </div>
            </div>
            <p className="text-white text-sm">
              ⚡ <strong>ATENÇÃO:</strong> Este vídeo pode sair do ar a qualquer momento
            </p>
          </div>
        </div>
      </section>

      {/* Storytelling/Introduction */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Você Já Sonhou em Transformar Seu Corpo e Se Sentir Incrível?
            </h2>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
              Agora é o momento de potencializar essa transformação com o 
              <span className="font-bold text-green-600"> Desafio da Queima Mágica</span>. 
              Imagine acordar todos os dias se sentindo mais leve, mais energizado e 
              vendo seu corpo se transformar de forma natural e prazerosa.
            </p>
          </div>
        </div>
      </section>

      {/* Problem/Pain Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            Você Já Se Sentiu Assim? 😔
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-red-50 p-8 rounded-2xl border-l-4 border-red-400">
              <h3 className="text-xl font-bold text-red-700 mb-4">❌ Frustração Constante</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Dietas restritivas que deixam você com fome e irritado</li>
                <li>• Resultados que não aparecem, mesmo com tanto esforço</li>
                <li>• Sensação de fracasso a cada tentativa</li>
                <li>• Efeito sanfona que destrói sua autoestima</li>
              </ul>
            </div>
            
            <div className="bg-orange-50 p-8 rounded-2xl border-l-4 border-orange-400">
              <h3 className="text-xl font-bold text-orange-700 mb-4">⏰ Falta de Tempo</h3>
              <ul className="space-y-3 text-gray-700">
                <li>• Rotina corrida que não permite cozinhar direito</li>
                <li>• Horas perdidas preparando refeições complicadas</li>
                <li>• Ingredientes caros e difíceis de encontrar</li>
                <li>• Receitas que ninguém da família quer comer</li>
              </ul>
            </div>
          </div>

          <div className="text-center bg-gray-100 p-8 rounded-2xl">
            <p className="text-xl text-gray-700 font-medium">
              <strong>Se você se identificou com pelo menos um desses pontos, 
              continue lendo...</strong> 👇
            </p>
          </div>
        </div>
      </section>

      {/* Solution Presentation */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            🌟 Apresento a Você: O Desafio da Queima Mágica
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl mb-8">
            <h3 className="text-2xl font-bold mb-6 text-yellow-300">
              A Única Abordagem que Transforma Emagrecimento em Prazer
            </h3>
            <p className="text-lg leading-relaxed mb-6">
              Esqueça tudo que você sabe sobre dietas. O <strong>Desafio da Queima Mágica</strong> 
              é um método revolucionário que usa o poder dos smoothies para acelerar seu 
              metabolismo e queimar gordura de forma natural e deliciosa.
            </p>
            <p className="text-xl font-bold text-yellow-300">
              ✨ 30 dias para uma nova versão de você!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-xl">
              <Zap className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h4 className="font-bold mb-2">Resultados Rápidos</h4>
              <p className="text-sm">Veja mudanças já na primeira semana</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <Heart className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h4 className="font-bold mb-2">100% Prazeroso</h4>
              <p className="text-sm">Sabores irresistíveis que você vai amar</p>
            </div>
            <div className="bg-white/10 p-6 rounded-xl">
              <Clock className="w-12 h-12 mx-auto mb-4 text-yellow-300" />
              <h4 className="font-bold mb-2">Máximo 5 Minutos</h4>
              <p className="text-sm">Preparo super rápido e prático</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            🎯 O Que Você Vai Conquistar
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-start space-x-4 p-6 bg-green-50 rounded-xl">
              <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Receitas de Smoothies Irresistíveis
                </h3>
                <p className="text-gray-600">
                  30+ receitas deliciosas que aceleram seu metabolismo e queimam gordura
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl">
              <CheckCircle className="w-8 h-8 text-blue-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Resultados Visíveis em 30 Dias
                </h3>
                <p className="text-gray-600">
                  Método comprovado que entrega transformação real e duradoura
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-purple-50 rounded-xl">
              <CheckCircle className="w-8 h-8 text-purple-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Sem Passar Horas na Cozinha
                </h3>
                <p className="text-gray-600">
                  Preparo rápido e prático que se encaixa na sua rotina corrida
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-orange-50 rounded-xl">
              <CheckCircle className="w-8 h-8 text-orange-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Emagrecimento Prazeroso
                </h3>
                <p className="text-gray-600">
                  Sem sofrimento, sem fome, sem abrir mão do que você gosta
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-yellow-50 rounded-xl">
              <CheckCircle className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Aumento de Energia e Vitalidade
                </h3>
                <p className="text-gray-600">
                  Sinta-se mais disposto e energizado desde o primeiro dia
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 bg-pink-50 rounded-xl">
              <CheckCircle className="w-8 h-8 text-pink-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  Autoestima Renovada
                </h3>
                <p className="text-gray-600">
                  Recupere sua confiança e se apaixone novamente pelo seu corpo
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* E-book Content */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-green-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            📚 O Que Você Encontrará Dentro do E-book
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-green-600">1</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Módulo 1: A Base da Queima Mágica
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Como os smoothies aceleram seu metabolismo</li>
                <li>• Os 7 ingredientes queima-gordura essenciais</li>
                <li>• Horários ideais para potencializar os resultados</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Módulo 2: O Desafio de 30 Dias
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Plano dia a dia completo</li>
                <li>• 30+ receitas exclusivas e testadas</li>
                <li>• Cronograma de resultados esperados</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Módulo 3: Smoothies Detox Poderosos
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Receitas para eliminar toxinas</li>
                <li>• Combinações que reduzem inchaço</li>
                <li>• Smoothies para diferentes objetivos</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                Módulo 4: Mantendo os Resultados
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Como não ter efeito sanfona</li>
                <li>• Estratégias para manter o peso ideal</li>
                <li>• Adaptações para o seu estilo de vida</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof/Testimonials */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            ⭐ O Que Nossos Clientes Estão Dizendo
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-green-50 p-6 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Perdi 8kg em 30 dias e o melhor: sem passar fome! Os smoothies são deliciosos 
                e super práticos. Recomendo para todas as minhas amigas!"
              </p>
              <p className="font-bold text-gray-800">- Maria Silva, 34 anos</p>
            </div>

            <div className="bg-blue-50 p-6 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Finalmente encontrei algo que funciona! Minha energia aumentou muito e 
                consegui eliminar 12kg. Método incrível!"
              </p>
              <p className="font-bold text-gray-800">- Ana Costa, 28 anos</p>
            </div>

            <div className="bg-purple-50 p-6 rounded-2xl">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Como mãe de 3 filhos, não tinha tempo para dietas complicadas. 
                Este método mudou minha vida! Prático e eficaz."
              </p>
              <p className="font-bold text-gray-800">- Carla Santos, 41 anos</p>
            </div>
          </div>

          <div className="text-center mt-12 bg-gray-100 p-8 rounded-2xl">
            <p className="text-lg text-gray-700">
              <strong>Mais de 10.000 pessoas</strong> já transformaram seus corpos com o 
              Desafio da Queima Mágica. <strong>Você será a próxima?</strong>
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <Shield className="w-20 h-20 mx-auto mb-8 text-yellow-300" />
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            🛡️ Garantia Incondicional de 30 Dias
          </h2>
          
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
            <p className="text-xl leading-relaxed mb-6">
              Estamos tão confiantes nos resultados do <strong>Desafio da Queima Mágica</strong> 
              que oferecemos uma garantia total de <strong>30 dias</strong>.
            </p>
            <p className="text-lg mb-6">
              Se por qualquer motivo você não ficar 100% satisfeito com os resultados, 
              devolvemos todo o seu dinheiro, sem perguntas, sem burocracia.
            </p>
            <p className="text-2xl font-bold text-yellow-300">
              ✨ Risco ZERO para você!
            </p>
          </div>
        </div>
      </section>

      {/* Offer and Bonus */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            🎁 Oferta Especial de Lançamento
          </h2>
          
          <div className="bg-gradient-to-r from-red-500 to-pink-500 text-white p-8 rounded-2xl mb-8">
            <div className="text-center">
              <p className="text-lg mb-4">⏰ <strong>ATENÇÃO: Oferta por tempo limitado!</strong></p>
              <div className="text-6xl font-bold mb-4">
                <span className="line-through text-red-200">R$ 297</span>
              </div>
              <div className="text-8xl font-bold text-yellow-300 mb-4">
                R$ 97
              </div>
              <p className="text-xl">
                <strong>Economia de R$ 200!</strong> 💰
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 p-8 rounded-2xl border-2 border-green-200">
              <Gift className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                🎁 Bônus 1: Guia de Super Alimentos (Valor: R$ 67)
              </h3>
              <p className="text-gray-600">
                Lista completa dos alimentos mais poderosos para acelerar seu metabolismo 
                e potencializar seus resultados.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-2xl border-2 border-blue-200">
              <Gift className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                🎁 Bônus 2: Plano de Refeições Inteligentes (Valor: R$ 97)
              </h3>
              <p className="text-gray-600">
                Cardápio completo para complementar seus smoothies e acelerar ainda mais 
                seus resultados de emagrecimento.
              </p>
            </div>
          </div>

          <div className="bg-yellow-50 p-8 rounded-2xl text-center border-2 border-yellow-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              💎 Valor Total: R$ 461
            </h3>
            <p className="text-xl text-gray-700 mb-4">
              <strong>Hoje você leva tudo por apenas:</strong>
            </p>
            <p className="text-4xl font-bold text-green-600">
              R$ 97
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            🚀 Sua Transformação Começa AGORA!
          </h2>
          
          <p className="text-xl mb-8">
            Não deixe mais um dia passar sem dar o primeiro passo para o corpo dos seus sonhos
          </p>
          
          <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 text-2xl font-bold py-6 px-12 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 mb-8">
            🔥 SIM! QUERO EMAGRECER EM 30 DIAS!
          </button>
          
          <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl">
            <p className="text-lg">
              ✅ Acesso imediato ao e-book completo<br />
              ✅ Todos os bônus inclusos<br />
              ✅ Garantia de 30 dias<br />
              ✅ Suporte completo
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
            ❓ Perguntas Frequentes
          </h2>
          
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                "É muito caro? Vale a pena o investimento?"
              </h3>
              <p className="text-gray-600">
                Por apenas R$ 97, você está investindo em sua saúde e autoestima. Compare com o 
                valor de uma consulta com nutricionista (R$ 200+) ou um mês de academia (R$ 150+). 
                Aqui você tem um método completo que funciona por toda a vida!
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                "Vai funcionar para mim? E se eu não conseguir?"
              </h3>
              <p className="text-gray-600">
                O método já funcionou para mais de 10.000 pessoas de diferentes idades e estilos 
                de vida. Além disso, você tem 30 dias de garantia total. Se não funcionar, 
                devolvemos seu dinheiro!
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                "Preciso de ingredientes caros ou difíceis de encontrar?"
              </h3>
              <p className="text-gray-600">
                Não! Todas as receitas usam ingredientes simples que você encontra em qualquer 
                supermercado. Priorizamos praticidade e economia, sem abrir mão dos resultados.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                "Quanto tempo demora para ver os primeiros resultados?"
              </h3>
              <p className="text-gray-600">
                A maioria das pessoas nota diferença já na primeira semana! Mais energia, menos 
                inchaço e uma sensação geral de bem-estar. Os resultados visuais aparecem 
                gradualmente ao longo dos 30 dias.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                "Como recebo o material? É físico ou digital?"
              </h3>
              <p className="text-gray-600">
                O e-book é 100% digital! Após a compra, você recebe acesso imediato por email 
                e pode baixar em qualquer dispositivo. Pode imprimir se preferir ter em mãos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-red-600 to-pink-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ⚡ ÚLTIMA CHANCE!
          </h2>
          <p className="text-xl mb-8">
            Esta oferta especial pode sair do ar a qualquer momento. 
            <br />
            <strong>Não perca a oportunidade de transformar sua vida!</strong>
          </p>
          
          <button className="bg-yellow-400 hover:bg-yellow-300 text-gray-900 text-2xl font-bold py-6 px-12 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300 mb-8">
            🔥 QUERO GARANTIR MINHA VAGA AGORA!
          </button>
          
          <p className="text-lg">
            💳 Pagamento 100% seguro | 🛡️ Garantia de 30 dias | ⚡ Acesso imediato
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Desafio da Queima Mágica. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Este produto não substitui orientação médica profissional.
          </p>
        </div>
      </footer>
    </div>
  )
}