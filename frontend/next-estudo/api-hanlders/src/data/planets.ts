export interface Planet {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
}

export const planetsMockup: Planet[] = [
  {
    id: 1,
    name: "Marte",
    description: "Conhecido como o Planeta Vermelho, possui o maior vulcão do sistema solar, o Olympus Mons, e evidências de antigos leitos de rios.",
    imageUrl: "https://exemplo.com/imagens/marte.jpg"
  },
  {
    id: 2,
    name: "Júpiter",
    description: "O maior planeta do nosso sistema, Júpiter é um gigante gasoso com uma Grande Mancha Vermelha que é, na verdade, uma tempestade gigante.",
    imageUrl: "https://exemplo.com/imagens/jupiter.jpg"
  },
  {
    id: 3,
    name: "Saturno",
    description: "Famoso por seu complexo sistema de anéis feitos de gelo e rocha, é o segundo maior planeta e possui a menor densidade de todos.",
    imageUrl: "https://exemplo.com/imagens/saturno.jpg"
  }
];
