abstract class Veiculo {
    constructor(
      protected modelo: string,
      protected marca: string,
      protected cor: string,
      protected numeroRodas: number
    ) {}
  
    abstract clone(): Veiculo; // Método abstrato clone
    abstract represent(): void; // Método abstrato represent
  
    getModelo(): string {
      return this.modelo;
    }
  
    getMarca(): string {
      return this.marca;
    }
  
    getCor(): string {
      return this.cor;
    }
  
    getNumeroRodas(): number {
      return this.numeroRodas;
    }
  }
  
  // Subclasse Carro
  class Carro extends Veiculo {
    constructor(
      modelo: string,
      marca: string,
      cor: string,
      numeroRodas: number,
      private numeroPortas: number
    ) {
      super(modelo, marca, cor, numeroRodas);
    }
  
    clone(): Carro {
      return new Carro(this.modelo, this.marca, this.cor, this.numeroRodas, this.numeroPortas);
    }
  
    represent(): void {
      console.log(`Carro - Modelo: ${this.getModelo()}, Marca: ${this.getMarca()}, Cor: ${this.getCor()}, Rodas: ${this.getNumeroRodas()}, Portas: ${this.numeroPortas}`);
    }
  }
  
  // Subclasse Moto
  class Moto extends Veiculo {
    constructor(
      modelo: string,
      marca: string,
      cor: string,
      numeroRodas: number,
      private cilindradas: number
    ) {
      super(modelo, marca, cor, numeroRodas);
    }
  
    clone(): Moto {
      return new Moto(this.modelo, this.marca, this.cor, this.numeroRodas, this.cilindradas);
    }
  
    represent(): void {
      console.log(`Moto - Modelo: ${this.getModelo()}, Marca: ${this.getMarca()}, Cor: ${this.getCor()}, Rodas: ${this.getNumeroRodas()}, Cilindradas: ${this.cilindradas}`);
    }
  }
  
  // Classe Aplicação
  class Aplicacao {
    static criarVeiculos(): Veiculo[] {
      const veiculos: Veiculo[] = [];
 
      const carro1 = new Carro('Hatchback', 'Honda', 'Branco', 4, 5);
      const carro2 = new Carro('SUV', 'Ford', 'Prata', 4, 4);
      const carro3 = new Carro('Sedan', 'Toyota', 'Preto', 4, 4);


      const moto1 = new Moto('Custom', 'Harley-Davidson', 'Preto', 2, 1200);
      const moto2 = new Moto('Street', 'Suzuki', 'Azul', 2, 750);
      const moto3 = new Moto('Esportiva', 'Yamaha', 'Vermelho', 2, 1000);

      // Adicionando veículos ao array
      veiculos.push(carro1, carro2, carro3, moto1, moto2, moto3);
  
      return veiculos;
    }
  
    static cloneVeiculos(veiculos: Veiculo[]): Veiculo[] {
      const clonedVeiculos: Veiculo[] = [];
  
      for (const veiculo of veiculos) {
        const clone = veiculo.clone();
        clonedVeiculos.push(clone);
      }
  
      return clonedVeiculos;
    }
  }
  
  // Uso da aplicação
  const veiculos = Aplicacao.criarVeiculos();
  const clones = Aplicacao.cloneVeiculos(veiculos);
  
  // Imprimindo retorno da função represent para cada veículo clonado
  clones.forEach((veiculo) => {
    veiculo.represent();
  });