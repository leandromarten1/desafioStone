const phrases = [
  {
    phrase: 'Não vou lutar a sua guerra. Vou acabar com ela.',
    author: 'Capitã Marvel',
  },
  {
    phrase: 'Grandes poderes trazem grandes responsabilidades.',
    author: 'Homem-Aranha',
  },
  {
    phrase:
      'Já há tantos homens grandes lutando nesta guerra, pode ser que precisamos de um pequeno',
    author: 'Capitão América - O Primeiro Vingador',
  },
  {
    phrase:
      'Com tempo vocês vão saber o que é perder. Ter a absoluta certeza de que estão certos, mas falhar da mesma forma.',
    author: 'Thanos - Vingadores: Guerra Infinita',
  },
  {
    phrase: 'Progresso é a habilidade do homem de complicar as coisas simples.',
    author: 'Thor',
  },
  {
    phrase: 'Eu não sou fiel a nada, exceto aos sonhos.',
    author: 'Steve Rogers (Capitão América)',
  },
  {
    phrase:
      'O maior presente que temos é suportar a dor sem quebrar, e isso vem de nossa parte mais humana, a esperança.',
    author: 'Charles Xavier (X-Men)',
  },
];

const randomPhrase = () => {
  const range = phrases.length;
  const randomIndex = Math.floor(Math.random() * range);
  return phrases[randomIndex];
};

export default randomPhrase;
