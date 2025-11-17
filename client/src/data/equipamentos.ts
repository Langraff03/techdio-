// Estrutura de dados para as 17 categorias de equipamentos

export interface EquipmentCategory {
  id: string;
  title: string;
  icon: string;
  description: string;
  items: string[];
  relatedNorms?: string[];
  applications?: string[];
}

export const equipmentCategories: EquipmentCategory[] = [
  {
    id: "pressao",
    title: "Instrumentos de Pressão",
    icon: "🔧",
    description: "Equipamentos para medição e controle de pressão em sistemas industriais, laboratoriais e hospitalares",
    items: [
      "Manômetros analógicos & digitais",
      "Manovacuômetros",
      "Vacuômetros",
      "Transmissores de pressão (4-20mA / HART)",
      "Pressostatos",
      "Válvulas de alívio / segurança",
      "Válvulas redutoras",
      "Reguladores de pressão",
      "Linhas pneumáticas",
      "Bombas de teste hidráulico",
      "Bombas pneumáticas para calibração",
      "Registradores e controladores de pressão"
    ],
    relatedNorms: ["ISO 17025", "INMETRO", "NR-13"],
    applications: ["Industrial", "Laboratório", "Hospitalar"]
  },
  {
    id: "temperatura",
    title: "Instrumentos de Temperatura",
    icon: "🌡️",
    description: "Sistemas completos para medição, controle e registro de temperatura em processos críticos",
    items: [
      "Termômetros analógicos",
      "Termômetros digitais industriais",
      "Termopares (J, K, T, N, S, R, B)",
      "Termorresistências (PT100 / PT1000)",
      "Termo-higrômetros",
      "Data loggers",
      "Pirômetros infravermelhos",
      "Controladores PID",
      "Estufas, muflas e banhos-maria",
      "Autoclaves e pasteurizadores",
      "Câmaras frias e freezers técnicos"
    ],
    relatedNorms: ["ISO 17025", "ANVISA RDC 611/22", "INMETRO"],
    applications: ["Industrial", "Laboratório", "Hospitalar", "Alimentícia"]
  },
  {
    id: "eletricos",
    title: "Instrumentos Elétricos",
    icon: "⚡",
    description: "Equipamentos para medição e análise de grandezas elétricas e energéticas",
    items: [
      "Multímetros",
      "Alicates amperímetros",
      "Megômetros",
      "Osciloscópios",
      "Analisadores de energia",
      "Fontes de alimentação",
      "Tacômetros digitais",
      "Testadores de isolamento",
      "Medidores TRMS",
      "Luxímetros",
      "Wattímetro, voltímetro e amperímetro"
    ],
    relatedNorms: ["ISO 17025", "INMETRO", "ABNT NBR"],
    applications: ["Industrial", "Manutenção", "Elétrica"]
  },
  {
    id: "umidade",
    title: "Instrumentos de Umidade",
    icon: "💧",
    description: "Medidores especializados para controle de umidade em diversos ambientes e materiais",
    items: [
      "Termo-higrômetros",
      "Medidores de umidade de grãos",
      "Umidade de solo",
      "Psicrômetros",
      "Sensores de umidade industriais",
      "Data loggers"
    ],
    relatedNorms: ["ISO 17025", "INMETRO"],
    applications: ["Agrícola", "Industrial", "Laboratório"]
  },
  {
    id: "massa-forca-torque",
    title: "Massa, Força e Torque",
    icon: "⚖️",
    description: "Instrumentos de alta precisão para medição de massa, força e torque",
    items: [
      "Balanças analíticas",
      "Balanças industriais",
      "Checkweigher",
      "Células de carga",
      "Dinamômetros",
      "Torquímetros",
      "Chaves dinamométricas",
      "Máquinas de tração e compressão"
    ],
    relatedNorms: ["ISO 17025", "INMETRO", "OIML"],
    applications: ["Industrial", "Laboratório", "Qualidade"]
  },
  {
    id: "vazao-fluxo",
    title: "Vazão, Fluxo e Velocidade",
    icon: "💨",
    description: "Medidores para monitoramento de vazão, fluxo e velocidade em processos industriais",
    items: [
      "Anemômetros",
      "Medidores ultrassônicos de vazão",
      "Medidores eletromagnéticos",
      "Rotâmetros",
      "Medidores mássicos (Coriolis)",
      "Medidores de gás",
      "Tacômetros industriais"
    ],
    relatedNorms: ["ISO 17025", "INMETRO"],
    applications: ["Industrial", "Saneamento", "Petroquímica"]
  },
  {
    id: "dimensional",
    title: "Metrologia Dimensional",
    icon: "📏",
    description: "Instrumentos de precisão para medição dimensional e controle de qualidade",
    items: [
      "Paquímetros",
      "Micrômetros",
      "Relógios comparadores",
      "Rugosímetros",
      "Calibradores tampão / anel",
      "Trenas industriais",
      "Medidores de espessura",
      "Projetores de perfil",
      "Goniômetros",
      "Esquadros, réguas e níveis digitais"
    ],
    relatedNorms: ["ISO 17025", "INMETRO", "ISO 9001"],
    applications: ["Industrial", "Mecânica", "Qualidade"]
  },
  {
    id: "laboratorial",
    title: "Instrumentação Laboratorial",
    icon: "🔬",
    description: "Equipamentos analíticos e de medição para laboratórios químicos e biológicos",
    items: [
      "pHmetros",
      "Condutivímetros",
      "Turbidímetros",
      "Colorímetros",
      "Medidores de DQO, cloro, ORP",
      "Espectrofotômetros",
      "Refratômetros",
      "Viscosímetros",
      "Pipetas e micropipetas",
      "Banhos ultrassônicos",
      "Centrífugas",
      "Agitadores magnéticos",
      "Homogeneizadores",
      "Buretas automáticas"
    ],
    relatedNorms: ["ISO 17025", "ANVISA", "INMETRO"],
    applications: ["Laboratório", "Químico", "Biológico"]
  },
  {
    id: "automacao",
    title: "Automação e Controle",
    icon: "🤖",
    description: "Sistemas e componentes para automação industrial e controle de processos",
    items: [
      "CLPs / PLCs",
      "IHMs",
      "Sensores indutivos, capacitivos e ópticos",
      "Encoders",
      "Válvulas motorizadas",
      "Atuadores pneumáticos",
      "Módulos de I/O",
      "Controladores PID",
      "Transmissores 4-20 mA",
      "Medidores de nível ultrassônico / radar"
    ],
    relatedNorms: ["ISO 17025", "IEC"],
    applications: ["Industrial", "Automação", "Processo"]
  },
  {
    id: "termicos",
    title: "Equipamentos Térmicos e de Processo",
    icon: "🔥",
    description: "Equipamentos para processos térmicos industriais e controle de temperatura",
    items: [
      "Fornos industriais",
      "Estufas",
      "Muflas",
      "Seladoras térmicas",
      "Seladoras a vácuo",
      "Pasteurizadores",
      "Trocadores de calor",
      "Caldeiras (NR-13)",
      "Reatores",
      "Chillers"
    ],
    relatedNorms: ["NR-13", "ANVISA", "ISO 17025"],
    applications: ["Industrial", "Alimentícia", "Farmacêutica"]
  },
  {
    id: "pneumatica-hidraulica",
    title: "Pneumática e Hidráulica",
    icon: "⚙️",
    description: "Sistemas e componentes para pneumática e hidráulica industrial",
    items: [
      "Compressores de ar",
      "Cilindros pneumáticos",
      "Unidades hidráulicas",
      "Válvulas proporcionais",
      "Reguladores e filtros",
      "Bombas hidráulicas",
      "Manômetros industriais",
      "Indicadores de fluxo hidráulico"
    ],
    relatedNorms: ["ISO 17025", "INMETRO"],
    applications: ["Industrial", "Manufatura", "Manutenção"]
  },
  {
    id: "seguranca-trabalho",
    title: "Segurança do Trabalho",
    icon: "🦺",
    description: "Instrumentos para monitoramento e controle de segurança ocupacional",
    items: [
      "Sonômetro",
      "Dosímetro",
      "Luxímetro",
      "Medidor IBUTG (Índice de Calor)",
      "Termômetro de globo",
      "Detectores de gás (CO, O₂, CO₂, explosímetro)",
      "Bombas de amostragem de ar",
      "Medidor de radiação"
    ],
    relatedNorms: ["NR-15", "NR-17", "ISO 17025"],
    applications: ["Segurança", "Ocupacional", "Ambiental"]
  },
  {
    id: "refrigeracao",
    title: "Refrigeração Industrial",
    icon: "❄️",
    description: "Equipamentos e sistemas para refrigeração e climatização industrial",
    items: [
      "Câmaras frias",
      "Evaporadores",
      "Controladores digitais",
      "Sensores PT100",
      "Termostatos",
      "Sistemas split industrial",
      "Freezers científicos"
    ],
    relatedNorms: ["ANVISA", "ISO 17025"],
    applications: ["Alimentícia", "Farmacêutica", "Hospitalar"]
  },
  {
    id: "pesados-manutencao",
    title: "Equipamentos Pesados e de Manutenção",
    icon: "🏗️",
    description: "Ferramentas e equipamentos para manutenção industrial e alinhamento",
    items: [
      "Níveis a laser",
      "Trenas a laser",
      "Medidor de vibração",
      "Acelerômetros",
      "Alinhamento a laser",
      "Plataformas e gabaritos",
      "Bancadas hidráulicas"
    ],
    relatedNorms: ["ISO 17025", "INMETRO"],
    applications: ["Manutenção", "Industrial", "Mecânica"]
  },
  {
    id: "laticinios",
    title: "Equipamentos para Indústrias de Laticínios",
    icon: "🧀",
    description: "Instrumentos especializados para processamento e controle de qualidade de laticínios",
    items: [
      "Medidor crioscópico (crioscopia do leite)",
      "Acidez Dornic",
      "Butirômetro Gerber",
      "Termômetros espeto para leite",
      "Refratômetro para Brix de soros",
      "Lactodensímetro",
      "Medidor de pH para leite",
      "Medidor de condutividade para adulteração",
      "Analisador de gordura e proteína (milk analyzer)",
      "Balanças industriais para recebimento",
      "Medidor de ponto de congelamento",
      "Trocadores de calor de pasteurização",
      "Pasteurizadores HTST",
      "Homogeneizadores",
      "Controladores de temperatura de tanques",
      "Termoresistências PT100 sanitárias",
      "Medidores de vazão sanitários",
      "Testers para CIP (condutividade / concentração)",
      "Tanques de expansão",
      "Tanques de refrigeração de leite",
      "Desnatadeiras",
      "Queijeiras",
      "Incubadoras para culturas lácticas"
    ],
    relatedNorms: ["ANVISA", "MAPA", "ISO 17025"],
    applications: ["Laticínios", "Alimentícia", "Qualidade"]
  },
  {
    id: "vasos-pressao-nr13",
    title: "Equipamentos e Vasos de Pressão – NR-13",
    icon: "🏭",
    description: "Equipamentos pressurizados e instrumentação para conformidade com NR-13",
    items: [
      "Caldeiras",
      "Vasos de pressão categoria I a V",
      "Compressores de ar (vaso acumulador)",
      "Reservatórios de ar comprimido",
      "Autoclaves",
      "Trocadores de calor",
      "Reatores pressurizados",
      "Linhas de vapor",
      "Válvulas de segurança",
      "Válvulas de alívio",
      "Manômetros certificados",
      "Termômetros industriais",
      "Registradores de pressão",
      "Pressostatos",
      "Indicadores de nível",
      "Alarmes de temperatura e pressão",
      "Transmissores de pressão 4-20mA",
      "Transmissores de temperatura"
    ],
    relatedNorms: ["NR-13", "ISO 17025", "INMETRO"],
    applications: ["Industrial", "Segurança", "Processo"]
  },
  {
    id: "gestao-metrologica",
    title: "Gestão Metrológica (ISO 17025 / ISO 9001)",
    icon: "📊",
    description: "Serviços e ferramentas para gestão completa de sistemas metrológicos",
    items: [
      "Plano de calibração anual",
      "Mapa de instrumentos (inventário metrológico)",
      "Controle de certificados",
      "Gestão de rastreabilidade RBC / ILAC",
      "Planos de manutenção x calibração",
      "Controle de incertezas",
      "Identificação e etiquetação de instrumentos",
      "Critérios de aceitação e rejeição",
      "Avaliação de fornecedores de calibração",
      "Controle de intertravamentos e parâmetros críticos",
      "Análise de tendência (drift)",
      "Procedimentos operacionais padrão (POP's) metrológicos",
      "Software de gerenciamento metrológico",
      "Banco de dados de certificados",
      "Indicadores: % de instrumentos no prazo",
      "Indicadores: % de rejeições",
      "Indicadores: MTTR / MTBF metrológico"
    ],
    relatedNorms: ["ISO 17025", "ISO 9001", "ILAC"],
    applications: ["Gestão", "Qualidade", "Compliance"]
  }
];

// Função helper para buscar categoria por ID
export const getCategoryById = (id: string): EquipmentCategory | undefined => {
  return equipmentCategories.find(cat => cat.id === id);
};

// Função helper para buscar categorias por aplicação
export const getCategoriesByApplication = (application: string): EquipmentCategory[] => {
  return equipmentCategories.filter(cat => 
    cat.applications?.includes(application)
  );
};

// Estatísticas gerais
export const equipmentStats = {
  totalCategories: equipmentCategories.length,
  totalEquipmentTypes: equipmentCategories.reduce((acc, cat) => acc + cat.items.length, 0),
  applications: Array.from(new Set(equipmentCategories.flatMap(cat => cat.applications || []))),
  norms: Array.from(new Set(equipmentCategories.flatMap(cat => cat.relatedNorms || [])))
};