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
    id: "medicos-hospitalares",
    title: "Equipamentos Médicos e Hospitalares",
    icon: "🏥",
    description: "Equipamentos eletrônicos médico-hospitalares de alta complexidade para diagnóstico, monitoramento e tratamento",
    items: [
      "Monitores multiparamétricos",
      "Cardioversores e desfibriladores",
      "Eletrocardiógrafos (ECG)",
      "Bombas de infusão e seringa",
      "Oxímetros de pulso",
      "Medidores de pressão arterial (NIBP)",
      "Ventiladores pulmonares",
      "Aspiradores cirúrgicos",
      "Bisturis elétricos",
      "Autoclaves hospitalares",
      "Focos cirúrgicos",
      "Detectores fetais",
      "Berços aquecidos",
      "Incubadoras neonatais",
      "Concentradores de oxigênio",
      "Detectores de temperatura e umidade",
      "Balanças hospitalares",
      "Sistemas de teste e calibração elétrica",
      "Eletroencefalógrafos (EEG)",
      "Esfigmomanômetros",
      "Termômetros clínicos"
    ],
    relatedNorms: ["ANVISA RDC 611/22", "ISO 17025", "IEC 60601"],
    applications: ["Hospitalar", "Clínico", "UTI"]
  },
  {
    id: "diagnostico-imagem",
    title: "Equipamentos de Diagnóstico por Imagem",
    icon: "📡",
    description: "Sistemas avançados de diagnóstico por imagem para radiologia, tomografia e ultrassonografia",
    items: [
      "Aparelhos de raio-X convencional",
      "Raio-X odontológico",
      "Arcos cirúrgicos",
      "Mamógrafos",
      "Tomógrafos computadorizados",
      "Ultrassons diagnósticos",
      "Transdutores ultrassônicos",
      "Ecocardiógrafos",
      "Sistemas CR (Computed Radiography)",
      "Sistemas DR (Digital Radiography)",
      "Reveladoras automáticas",
      "Negatoscópios",
      "Impressoras médicas",
      "Acessórios de radiologia",
      "Sistemas PACS",
      "Workstations de imagem"
    ],
    relatedNorms: ["ANVISA RDC 611/22", "CNEN", "Portaria 453"],
    applications: ["Radiologia", "Diagnóstico", "Hospitalar"]
  },
  {
    id: "odontologicos",
    title: "Equipamentos Odontológicos",
    icon: "🦷",
    description: "Equipamentos especializados para clínicas e consultórios odontológicos",
    items: [
      "Cadeiras odontológicas",
      "Compressores odontológicos",
      "Autoclaves odontológicas",
      "Seladoras de grau cirúrgico",
      "Fotopolimerizadores",
      "Ultrassons odontológicos",
      "Amalgamadores",
      "Micromotores",
      "Peças de mão (alta e baixa rotação)",
      "Sugadores cirúrgicos",
      "Sistemas de vácuo",
      "Negatoscópios odontológicos",
      "Aparelhos de profilaxia",
      "Equipamentos de endodontia",
      "Localizadores apicais",
      "Canetas de alta rotação",
      "Contra-ângulos",
      "Equipamentos de clareamento",
      "Jatos de bicarbonato",
      "Aparelhos de raio-X intraoral"
    ],
    relatedNorms: ["ANVISA RDC 611/22", "ISO 17025", "CFO"],
    applications: ["Odontologia", "Clínico", "Cirúrgico"]
  },
  {
    id: "esteticos-fisioterapicos",
    title: "Equipamentos Estéticos e Fisioterápicos",
    icon: "💆",
    description: "Tecnologias avançadas para tratamentos estéticos, fisioterapia e reabilitação física",
    items: [
      "Radiofrequência facial",
      "Radiofrequência corporal",
      "Criolipólise",
      "Ultracavitação",
      "Lipocavitação",
      "Vacuoterapia",
      "Endermoterapia",
      "Pressoterapia",
      "Equipamentos Heccus",
      "Equipamentos Hooke",
      "Equipamentos Manthus",
      "Termoterapia",
      "Laserterapia",
      "LEDterapia",
      "Alta frequência",
      "Dermotonus",
      "Peeling de diamante",
      "Peeling ultrassônico",
      "Eletrolifting",
      "Microcorrentes faciais",
      "Correntes TENS (estimulação nervosa)",
      "Correntes FES (estimulação funcional)",
      "Corrente Russa",
      "Corrente Galvânica",
      "Corrente Interferencial",
      "Plataformas vibratórias",
      "Magnetoterapia",
      "Infravermelho terapêutico",
      "Equipamentos de carboxiterapia",
      "Dermapen / microagulhamento",
      "Vapor de ozônio",
      "Ozonioterapia",
      "Ultrassom terapêutico",
      "Laser terapêutico",
      "Ondas curtas",
      "Microondas terapêutico"
    ],
    relatedNorms: ["ANVISA RDC 611/22", "ISO 17025", "COFFITO"],
    applications: ["Estética", "Fisioterapia", "Reabilitação"]
  },
  {
    id: "climatizacao",
    title: "Climatização e Controle Ambiental",
    icon: "🌡️",
    description: "Sistemas completos de climatização, controle ambiental e qualidade do ar para ambientes clínicos e laboratoriais",
    items: [
      "Ar-condicionado split",
      "Ar-condicionado cassete",
      "Ar-condicionado central",
      "Chillers industriais",
      "Torres de resfriamento",
      "Sistemas VRF/VRV",
      "Higienização de sistemas",
      "Desinfecção de dutos",
      "Limpeza de filtros",
      "Troca de gás refrigerante",
      "Manutenção de componentes eletrônicos",
      "Manutenção de placas inverter",
      "Controle de temperatura ambiente",
      "Controle de umidade relativa",
      "Sistemas de exaustão",
      "Sistemas de ventilação",
      "Emissão de laudos para Vigilância Sanitária",
      "Monitoramento de temperatura e umidade",
      "Validação térmica de ambientes",
      "Qualificação de salas limpas"
    ],
    relatedNorms: ["ANVISA RDC 50", "ABNT NBR 16401", "ISO 14644"],
    applications: ["Hospitalar", "Laboratório", "Farmacêutica", "Clínico"]
  },
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
    description: "Equipamentos analíticos e de medição para laboratórios químicos, biológicos e clínicos de alta precisão",
    items: [
      "Centrífugas laboratoriais",
      "Microscópios ópticos e eletrônicos",
      "Banhos-maria",
      "Agitadores magnéticos e mecânicos",
      "Estufas de cultura e secagem",
      "Incubadoras bacteriológicas",
      "Refrigeradores científicos",
      "Freezers ultra-baixa temperatura (-80°C)",
      "Autoclaves laboratoriais",
      "Analisadores hematológicos",
      "Analisadores bioquímicos",
      "Espectrofotômetros UV-VIS",
      "Espectrofotômetros de absorção atômica",
      "Pipetas automáticas",
      "Micropipetas de precisão",
      "pHmetros de bancada e portáteis",
      "Condutivímetros",
      "Turbidímetros",
      "Colorímetros",
      "Medidores de DQO, cloro, ORP",
      "Refratômetros digitais",
      "Viscosímetros",
      "Banhos ultrassônicos",
      "Homogeneizadores",
      "Buretas automáticas",
      "Coagulômetros",
      "Sistemas de armazenamento de amostras",
      "Câmaras de fluxo laminar",
      "Cabines de segurança biológica",
      "Destiladores e purificadores de água",
      "Balanças analíticas de precisão",
      "Sistemas de eletroforese",
      "Fotômetros de chama",
      "Cromatógrafos",
      "Analisadores de gases sanguíneos"
    ],
    relatedNorms: ["ISO 17025", "ANVISA", "INMETRO", "ISO 15189"],
    applications: ["Laboratório", "Químico", "Biológico", "Clínico", "Análises"]
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
  },
  {
    id: "servicos-complementares",
    title: "Serviços Complementares",
    icon: "🎯",
    description: "Serviços técnicos especializados para garantir conformidade, segurança e qualidade",
    items: [
      "Emissão de laudos técnicos",
      "Emissão de certificados de calibração acreditados RBC",
      "Certificados de calibração rastreáveis INMETRO",
      "Testes de segurança elétrica (IEC 60601)",
      "Ensaios de fuga de corrente",
      "Testes de rigidez dielétrica",
      "Testes de resistência de aterramento",
      "Validação de equipamentos críticos",
      "Qualificação de instalação (QI)",
      "Qualificação de operação (QO)",
      "Qualificação de performance (QP)",
      "Mapeamento térmico de ambientes",
      "Mapeamento de estufas e autoclaves",
      "Validação de processos térmicos",
      "Relatórios preventivos e preditivos",
      "Diagnóstico técnico de equipamentos",
      "Avaliação de conformidade normativa",
      "Treinamentos técnicos especializados",
      "Capacitação de equipes operacionais",
      "Consultoria em adequação normativa",
      "Consultoria para certificações (ANVISA, INMETRO)",
      "Assessoria em implantação ISO 17025",
      "Auditorias técnicas internas",
      "Planos de manutenção preventiva personalizados",
      "Contratos de manutenção e calibração",
      "Suporte técnico remoto 24h",
      "Atendimento emergencial"
    ],
    relatedNorms: ["ISO 17025", "ANVISA RDC 611/22", "IEC 60601", "INMETRO"],
    applications: ["Consultoria", "Treinamento", "Validação", "Compliance", "Suporte"]
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