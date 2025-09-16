import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export function RubyConcepts() {
  return (
    <section className="space-y-8">
      <div className="text-center">
        <h2 className="text-4xl font-bold mb-4 text-balance">Conceitos Fundamentais</h2>
        <p className="text-lg text-muted-foreground text-pretty">Aprenda os conceitos essenciais da linguagem Ruby</p>
      </div>

      <Tabs defaultValue="tipagem" className="w-full">
        <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-1">
          <TabsTrigger value="tipagem">Tipagem</TabsTrigger>
          <TabsTrigger value="variaveis">Variáveis</TabsTrigger>
          <TabsTrigger value="operadores">Operadores</TabsTrigger>
          <TabsTrigger value="controle">Controle</TabsTrigger>
          <TabsTrigger value="arrays">Arrays</TabsTrigger>
          <TabsTrigger value="hashes">Hashes</TabsTrigger>
          <TabsTrigger value="metodos">Métodos</TabsTrigger>
          <TabsTrigger value="classes">Classes</TabsTrigger>
          <TabsTrigger value="heranca">Herança</TabsTrigger>
          <TabsTrigger value="modulos">Módulos</TabsTrigger>
          <TabsTrigger value="blocos">Blocos</TabsTrigger>
          <TabsTrigger value="excecoes">Exceções</TabsTrigger>
          <TabsTrigger value="arquivos">Arquivos</TabsTrigger>
          <TabsTrigger value="gems">Gems</TabsTrigger>
        </TabsList>

        <TabsContent value="tipagem" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tipagem Dinâmica</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Ruby possui tipagem dinâmica, o que significa que você não precisa declarar o tipo das variáveis. O tipo
                é determinado automaticamente em tempo de execução.
              </p>
              <div className="bg-card p-4 rounded-lg border">
                <pre className="text-sm font-mono">
                  {`# Ruby determina o tipo automaticamente
nome = "João"        # String
idade = 25           # Integer
altura = 1.75        # Float
ativo = true         # Boolean
lista = [1, 2, 3]    # Array

# O comando 'puts' exibe valores na tela
puts nome            # Saída: João
puts idade.class     # Saída: Integer
puts altura.class    # Saída: Float`}
                </pre>
              </div>
              <div className="bg-accent/10 p-4 rounded-lg border border-accent/20">
                <h4 className="font-semibold text-accent mb-2">O que é 'puts'?</h4>
                <p className="text-sm text-muted-foreground">
                  <code className="bg-muted px-1 rounded">puts</code> é um método que exibe valores na tela, similar ao{" "}
                  <code className="bg-muted px-1 rounded">console.log</code> do JavaScript ou
                  <code className="bg-muted px-1 rounded">print</code> do Python.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="variaveis" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Tipos de Variáveis</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-card p-4 rounded-lg border">
                <pre className="text-sm font-mono">
                  {`# Variáveis locais (começam com letra minúscula)
nome = "Maria"
idade = 30

# Variáveis de instância (começam com @)
@email = "maria@email.com"

# Variáveis de classe (começam com @@)
@@contador = 0

# Variáveis globais (começam com $)
$versao = "3.0"

# Constantes (começam com letra maiúscula)
PI = 3.14159
NOME_APP = "Minha App"

puts nome        # Saída: Maria
puts @email      # Saída: maria@email.com
puts PI          # Saída: 3.14159`}
                </pre>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-muted/50 p-3 rounded">
                  <h5 className="font-semibold mb-2">Convenções</h5>
                  <ul className="text-sm space-y-1">
                    <li>• snake_case para variáveis</li>
                    <li>• MAIÚSCULAS para constantes</li>
                    <li>• @ para instância</li>
                    <li>• @@ para classe</li>
                  </ul>
                </div>
                <div className="bg-muted/50 p-3 rounded">
                  <h5 className="font-semibold mb-2">Tipos Básicos</h5>
                  <ul className="text-sm space-y-1">
                    <li>• String: "texto"</li>
                    <li>• Integer: 42</li>
                    <li>• Float: 3.14</li>
                    <li>• Boolean: true/false</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="operadores" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Operadores em Ruby</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-3">Operadores Aritméticos</h4>
                  <div className="bg-card p-4 rounded-lg border">
                    <pre className="text-sm font-mono">
                      {`a = 10
b = 3

puts a + b    # 13 (soma)
puts a - b    # 7  (subtração)
puts a * b    # 30 (multiplicação)
puts a / b    # 3  (divisão)
puts a % b    # 1  (módulo)
puts a ** b   # 1000 (potência)`}
                    </pre>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Operadores de Comparação</h4>
                  <div className="bg-card p-4 rounded-lg border">
                    <pre className="text-sm font-mono">
                      {`x = 5
y = 10

puts x == y   # false (igual)
puts x != y   # true  (diferente)
puts x < y    # true  (menor)
puts x > y    # false (maior)
puts x <= y   # true  (menor igual)
puts x >= y   # false (maior igual)`}
                    </pre>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Operadores Lógicos</h4>
                  <div className="bg-card p-4 rounded-lg border">
                    <pre className="text-sm font-mono">
                      {`a = true
b = false

puts a && b   # false (E lógico)
puts a || b   # true  (OU lógico)
puts !a       # false (NÃO lógico)
puts a and b  # false (E lógico)
puts a or b   # true  (OU lógico)`}
                    </pre>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">Operadores de String</h4>
                  <div className="bg-card p-4 rounded-lg border">
                    <pre className="text-sm font-mono">
                      {`nome = "João"
sobrenome = "Silva"

# Concatenação
puts nome + " " + sobrenome
# Saída: João Silva

# Interpolação
puts "#{nome} #{sobrenome}"
# Saída: João Silva`}
                    </pre>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="controle" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Estruturas de Controle</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold mb-3">Condicionais (if/else)</h4>
                <div className="bg-card p-4 rounded-lg border">
                  <pre className="text-sm font-mono">
                    {`idade = 18

if idade >= 18
  puts "Maior de idade"
elsif idade >= 13
  puts "Adolescente"
else
  puts "Criança"
end

# Forma inline
puts "Pode votar" if idade >= 16`}
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Case/When (Switch)</h4>
                <div className="bg-card p-4 rounded-lg border">
                  <pre className="text-sm font-mono">
                    {`dia = "segunda"

case dia
when "segunda", "terça", "quarta", "quinta", "sexta"
  puts "Dia útil"
when "sábado", "domingo"
  puts "Final de semana"
else
  puts "Dia inválido"
end

# Case com ranges
nota = 85

case nota
when 90..100
  puts "Excelente!"
when 80..89
  puts "Muito bom!"
when 70..79
  puts "Bom"
when 60..69
  puts "Regular"
else
  puts "Precisa melhorar"
end`}
                  </pre>
                </div>
              </div>

              <div>
                <h4 className="font-semibold mb-3">Loops</h4>
                <div className="bg-card p-4 rounded-lg border">
                  <pre className="text-sm font-mono">
                    {`# Loop while
contador = 0
while contador < 5
  puts "Contador: #{contador}"
  contador += 1
end

# Loop for com range
for i in 1..5
  puts "Número: #{i}"
end

# Each (mais Ruby-like)
[1, 2, 3, 4, 5].each do |numero|
  puts "Item: #{numero}"
end

# Times
5.times do |i|
  puts "Iteração #{i}"
end`}
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="arrays" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Arrays em Ruby</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Arrays são coleções ordenadas de elementos que podem conter qualquer tipo de objeto.
              </p>
              <div className="bg-card p-4 rounded-lg border">
                <pre className="text-sm font-mono">
                  {`# Criando arrays
frutas = ["maçã", "banana", "laranja"]
numeros = [1, 2, 3, 4, 5]
misto = ["texto", 42, true, 3.14]

# Acessando elementos
puts frutas[0]        # "maçã" (primeiro elemento)
puts frutas[-1]       # "laranja" (último elemento)
puts frutas[1, 2]     # ["banana", "laranja"] (slice)

# Métodos úteis
frutas.push("uva")    # Adiciona no final
frutas << "pêra"      # Outra forma de adicionar
frutas.pop            # Remove o último
frutas.shift          # Remove o primeiro
frutas.unshift("kiwi") # Adiciona no início

puts frutas.length    # Tamanho do array
puts frutas.include?("banana") # Verifica se contém
puts frutas.join(", ") # Junta elementos com separador`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="hashes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Hashes (Dicionários)</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Hashes são coleções de pares chave-valor, similares aos objetos em JavaScript ou dicionários em Python.
              </p>
              <div className="bg-card p-4 rounded-lg border">
                <pre className="text-sm font-mono">
                  {`# Criando hashes
pessoa = {
  "nome" => "João",
  "idade" => 25,
  "cidade" => "São Paulo"
}

# Sintaxe com símbolos (mais comum)
usuario = {
  nome: "Maria",
  idade: 30,
  email: "maria@email.com"
}

# Acessando valores
puts pessoa["nome"]     # "João"
puts usuario[:nome]     # "Maria"
puts usuario.fetch(:idade, 0) # 30 (com valor padrão)

# Modificando
usuario[:idade] = 31
usuario[:telefone] = "123456789"

# Métodos úteis
puts usuario.keys       # [:nome, :idade, :email, :telefone]
puts usuario.values     # ["Maria", 31, "maria@email.com", "123456789"]
puts usuario.length     # 4
puts usuario.has_key?(:nome) # true`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="metodos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Métodos e Funções</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Métodos são blocos de código reutilizáveis que executam uma tarefa específica.
              </p>
              <div className="bg-card p-4 rounded-lg border">
                <pre className="text-sm font-mono">
                  {`# Definindo métodos
def saudacao
  puts "Olá, mundo!"
end

def saudacao_personalizada(nome)
  puts "Olá, #{nome}!"
end

def somar(a, b)
  a + b  # Retorno implícito (última linha)
end

def dividir(a, b)
  return "Erro: divisão por zero" if b == 0
  a / b
end

# Métodos com valores padrão
def apresentar(nome, idade = 18)
  puts "#{nome} tem #{idade} anos"
end

# Chamando métodos
saudacao                    # "Olá, mundo!"
saudacao_personalizada("Ana") # "Olá, Ana!"
resultado = somar(5, 3)     # 8
apresentar("João")          # "João tem 18 anos"
apresentar("Maria", 25)     # "Maria tem 25 anos"

# Métodos com múltiplos parâmetros
def info_completa(nome, *hobbies, **detalhes)
  puts "Nome: #{nome}"
  puts "Hobbies: #{hobbies.join(', ')}"
  puts "Detalhes: #{detalhes}"
end

info_completa("Pedro", "futebol", "leitura", idade: 28, cidade: "Rio")`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="classes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Classes e Objetos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Classes são modelos para criar objetos. Ruby é uma linguagem orientada a objetos pura.
              </p>
              <div className="bg-card p-4 rounded-lg border">
                <pre className="text-sm font-mono">
                  {`# Definindo uma classe
class Pessoa
  # Método construtor
  def initialize(nome, idade)
    @nome = nome    # Variável de instância
    @idade = idade
  end
  
  # Métodos getter e setter
  def nome
    @nome
  end
  
  def nome=(novo_nome)
    @nome = novo_nome
  end
  
  # Método de instância
  def apresentar
    puts "Olá, eu sou #{@nome} e tenho #{@idade} anos"
  end
  
  # Método de classe
  def self.especie
    "Homo sapiens"
  end
  
  # Método privado
  private
  
  def calcular_algo
    # Lógica interna
  end
end

# Usando a classe
pessoa1 = Pessoa.new("João", 25)
pessoa1.apresentar           # "Olá, eu sou João e tenho 25 anos"
puts pessoa1.nome           # "João"
pessoa1.nome = "João Silva"
puts Pessoa.especie         # "Homo sapiens"

# Usando attr_accessor para getters/setters automáticos
class Produto
  attr_accessor :nome, :preco
  attr_reader :id
  
  def initialize(id, nome, preco)
    @id = id
    @nome = nome
    @preco = preco
  end
end`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="heranca" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Herança</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Herança permite que uma classe herde características de outra classe.
              </p>
              <div className="bg-card p-4 rounded-lg border">
                <pre className="text-sm font-mono">
                  {`# Classe pai (superclasse)
class Animal
  def initialize(nome)
    @nome = nome
  end
  
  def dormir
    puts "#{@nome} está dormindo"
  end
  
  def comer
    puts "#{@nome} está comendo"
  end
end

# Classe filha (subclasse)
class Cachorro < Animal
  def initialize(nome, raca)
    super(nome)  # Chama o construtor da classe pai
    @raca = raca
  end
  
  def latir
    puts "#{@nome} está latindo: Au au!"
  end
  
  # Sobrescrevendo método da classe pai
  def comer
    puts "#{@nome} está comendo ração"
  end
end

class Gato < Animal
  def miar
    puts "#{@nome} está miando: Miau!"
  end
  
  def comer
    puts "#{@nome} está comendo peixe"
  end
end

# Usando herança
rex = Cachorro.new("Rex", "Labrador")
rex.dormir    # "Rex está dormindo" (herdado)
rex.comer     # "Rex está comendo ração" (sobrescrito)
rex.latir     # "Rex está latindo: Au au!" (próprio)

mimi = Gato.new("Mimi")
mimi.dormir   # "Mimi está dormindo" (herdado)
mimi.miar     # "Mimi está miando: Miau!" (próprio)`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="modulos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Módulos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Módulos são uma forma de agrupar métodos, classes e constantes. Permitem namespacing e mixins.
              </p>
              <div className="bg-card p-4 rounded-lg border">
                <pre className="text-sm font-mono">
                  {`# Módulo como namespace
module Matematica
  PI = 3.14159
  
  def self.area_circulo(raio)
    PI * raio * raio
  end
  
  def self.perimetro_circulo(raio)
    2 * PI * raio
  end
end

puts Matematica::PI                    # 3.14159
puts Matematica.area_circulo(5)        # 78.53975

# Módulo como mixin
module Cumprimentavel
  def cumprimentar
    puts "Olá! Eu sou #{@nome}"
  end
  
  def despedir
    puts "Tchau! Foi um prazer!"
  end
end

class Pessoa
  include Cumprimentavel  # Inclui o módulo
  
  def initialize(nome)
    @nome = nome
  end
end

class Robo
  include Cumprimentavel
  
  def initialize(nome)
    @nome = nome
  end
end

# Usando mixins
pessoa = Pessoa.new("Ana")
pessoa.cumprimentar  # "Olá! Eu sou Ana"

robo = Robo.new("R2D2")
robo.cumprimentar    # "Olá! Eu sou R2D2"

# Verificando inclusão
puts Pessoa.ancestors  # [Pessoa, Cumprimentavel, Object, ...]`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="blocos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Blocos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Blocos são blocos de código que podem ser passados para métodos e executados dentro deles.
              </p>
              <div className="bg-card p-4 rounded-lg border">
                <pre className="text-sm font-mono">
                  {`# Blocos simples
[1, 2, 3].each do |numero|
  puts numero
end

# Blocos com chaves
[1, 2, 3].each { |numero| puts numero }

# Blocos como argumentos
def executar_bloco(&bloco)
  bloco.call
end

executar_bloco { puts "Executando bloco!" }

# Blocos com parâmetros
def multiplicar(a, b)
  yield(a, b) if block_given?
end

multiplicar(4, 5) { |x, y| puts x * y } # Saída: 20`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Adicionando novos conceitos - Exceções */}
        <TabsContent value="excecoes" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Exceções</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Exceções são usadas para lidar com erros e situações inesperadas em seu código.
              </p>
              <div className="bg-card p-4 rounded-lg border">
                <pre className="text-sm font-mono">
                  {`# Levantando exceções
def dividir(a, b)
  raise "Divisão por zero" if b == 0
  a / b
end

# Capturando exceções
begin
  resultado = dividir(10, 0)
rescue => e
  puts "Erro: #{e.message}"
ensure
  puts "Finalizando código"
end

# Exceções personalizadas
class MinhaExcecao < StandardError
end

raise MinhaExcecao, "Erro personalizado"

# Usando ensure para executar código sempre
begin
  puts "Executando código"
rescue => e
  puts "Erro: #{e.message}"
ensure
  puts "Finalizando código"
end`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Adicionando novos conceitos - Arquivos */}
        <TabsContent value="arquivos" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Manipulação de Arquivos</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Ruby oferece métodos para ler, escrever e manipular arquivos facilmente.
              </p>
              <div className="bg-card p-4 rounded-lg border">
                <pre className="text-sm font-mono">
                  {`# Lendo um arquivo
File.open("arquivo.txt", "r") do |file|
  puts file.read
end

# Escrevendo em um arquivo
File.open("arquivo.txt", "w") do |file|
  file.puts "Olá, mundo!"
end

# Adicionando conteúdo a um arquivo
File.open("arquivo.txt", "a") do |file|
  file.puts "Mais uma linha"
end

# Verificando existência de um arquivo
puts File.exist?("arquivo.txt") # true ou false

# Obtendo informações sobre um arquivo
puts File.size("arquivo.txt")   # Tamanho do arquivo em bytes
puts File.mtime("arquivo.txt") # Última modificação do arquivo`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Adicionando novos conceitos - Gems */}
        <TabsContent value="gems" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Gems</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Gems são bibliotecas externas que podem ser adicionadas ao seu projeto Ruby para expandir suas
                funcionalidades.
              </p>
              <div className="bg-card p-4 rounded-lg border">
                <pre className="text-sm font-mono">
                  {`# Instalando uma gem
# gem install nome_da_gem

# Usando uma gem
require 'nome_da_gem'

# Exemplo com a gem 'sinatra'
require 'sinatra'

get '/' do
  "Olá, mundo!"
end

# Exemplo com a gem 'nokogiri'
require 'nokogiri'
require 'open-uri'

doc = Nokogiri::HTML(URI.open('http://example.com'))
puts doc.css('title').text`}
                </pre>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </section>
  )
}
