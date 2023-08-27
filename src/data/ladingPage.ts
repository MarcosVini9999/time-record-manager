export const ladingPageData = {
  upSection: {
    upTitle: "Esquece o ponto manual",
    title: "Chegou a nova realidade para",
    titleSpan: "Controle de Pontos",
    description:
      "Com o PontoGo seus colaboradores poderão bater seus pontos de forma fácil e rápida, possuindo também uma Dashboard intuitiva.",
  },
  middleSection: {
    title: "Encontre o plano perfeito",
    description:
      "Escolha o plano que melhor se encaixa na sua empresa e  faça sua assinatura, dentro de 72h iremos liberar seus acessos.",
  },
  card: {
    bronze: {
      title: "Plano Bronze",
      value: 30,
      information: "Uso de 5 colaboradores",
      hasAccess: [
        { isLocked: 0, benefit: "Área de meus registross" },
        { isLocked: 0, benefit: "Dashboard" },
        { isLocked: 0, benefit: "Acesso de 5 colaboradores" },
        { isLocked: 1, benefit: "Suporte exclusivo" },
        { isLocked: 1, benefit: "Email corporativo" },
      ],
    },
    silver: {
      title: "Plano Prata",
      value: 50,
      information: "Uso de 10 colaboradores",
      hasAccess: [
        { isLocked: 0, benefit: "Área de meus registross" },
        { isLocked: 0, benefit: "Dashboard" },
        { isLocked: 0, benefit: "Acesso de 10 colaboradores" },
        { isLocked: 1, benefit: "Suporte exclusivo" },
        { isLocked: 1, benefit: "Email corporativo" },
      ],
    },
    gold: {
      title: "Plano Ouro",
      value: 100,
      information: "Uso de 20 colaboradores",
      hasAccess: [
        { isLocked: 0, benefit: "Área de meus registross" },
        { isLocked: 0, benefit: "Dashboard" },
        { isLocked: 0, benefit: "Acesso de 10 colaboradores" },
        { isLocked: 0, benefit: "Suporte exclusivo" },
        { isLocked: 1, benefit: "Email corporativo" },
      ],
    },
    platinum: {
      title: "Plano Platina",
      value: 200,
      information: "Acessos ilimitados",
      hasAccess: [
        { isLocked: 0, benefit: "Área de meus registross" },
        { isLocked: 0, benefit: "Dashboard" },
        { isLocked: 0, benefit: "Acesso de 10 colaboradores" },
        { isLocked: 0, benefit: "Suporte exclusivo" },
        { isLocked: 0, benefit: "Email corporativo" },
      ],
    },
  },
};
