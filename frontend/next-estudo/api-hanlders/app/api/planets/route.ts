import { NextResponse, NextRequest } from "next/server";

const planetsMockup = [
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

export async function GET() {
  return NextResponse.json(planetsMockup);
}

export async function POST(request: NextRequest) {
    const { name, description, imageUrl} = await request.json();
    const newPlanet = {
        id: planetsMockup.length + 1,
        name,
        description,
        imageUrl
    };
    planetsMockup.push(newPlanet);
    return NextResponse.json(newPlanet, { status: 201 });
    }

export async function PUT(req: NextRequest) {
  const { id, name, description, imageUrl } = await req.json()

  const planetIndex = planetsMockup.findIndex(planet => planet.id === +id);
  if (planetIndex === -1) {
    return NextResponse.json({ error: 'Planeta não encontrado' }, { status: 404 });
  }

  if (name) planetsMockup[planetIndex].name = name;
  if (description) planetsMockup[planetIndex].description = description;
  if (imageUrl) planetsMockup[planetIndex].imageUrl = imageUrl;

  return NextResponse.json(planetsMockup[planetIndex]);
}

// app/api/planets/route.ts

export async function DELETE(req: NextRequest) {
  const { id } = await req.json();

  const planetIndex = planetsMockup.findIndex(planet => planet.id === +id);
  if (planetIndex === -1) {
    return NextResponse.json({ error: 'Planeta não encontrado' }, { status: 404 });
  }

  const [deletedPlanet] = planetsMockup.splice(planetIndex, 1)

  return NextResponse.json({ deletedPlanet })
}

