# 🎨 Redesign Premium - Seção "Onde Atuamos"

## 🔍 Análise da Situação Atual (O que está ruim)

### Problemas Visuais Críticos
- ❌ **Cards brancos genéricos** - sem personalidade
- ❌ **Ícones azuis básicos** - parecem clipart
- ❌ **Layout em grid simples** - zero criatividade
- ❌ **Tipografia fraca** - sem hierarquia
- ❌ **Sem imagens de fundo** - muito texto-only
- ❌ **Botões genéricos** - não convidam clique
- ❌ **Estatísticas sem impacto** - números jogados
- ❌ **Zero interatividade** - estático demais

### Por que está ruim?
1. **Parece template barato** - qualquer um poderia fazer
2. **Não transmite premium** - apesar do resto do site ser moderno
3. **Não engaja** - usuário não quer explorar mais
4. **Sem diferenciação** - poderia ser qualquer empresa

---

## 🌟 Inspirações de Sites TOP

### 1. **Stripe.com - Cards Interativos**
**O que copiar:**
- Cards com hover effect 3D pronunciado
- Gradiente sutil no background
- Ícones animados SVG
- Transição de cores suave
- Números grandes e bold

**Exemplo de código:**
```css
.area-card {
  background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
  border: 1px solid rgba(255,255,255,0.1);
  backdrop-filter: blur(10px);
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.area-card:hover {
  transform: translateY(-16px) scale(1.02);
  border-color: rgba(59, 130, 246, 0.5);
  box-shadow: 
    0 30px 60px -12px rgba(37, 99, 235, 0.25),
    0 18px 36px -18px rgba(37, 99, 235, 0.3);
}
```

### 2. **Linear.app - Bento Grid Layout**
**O que copiar:**
- Layout assimétrico (não 3 cards iguais!)
- Um card maior + dois menores
- Ou 2 cards grandes + 4 pequenos
- Visual mais dinâmico
- Spotlight effect no hover

**Layout Proposto:**
```
┌────────────────┬────────────┐
│                │            │
│   CARD 1       │  CARD 2    │
│   (Grande)     │  (Médio)   │
│                │            │
├────────────────┼────────────┤
│   CARD 3       │  STATS     │
│   (Médio)      │  (Compact) │
└────────────────┴────────────┘
```

### 3. **Apple.com - Imagens de Produto**
**O que copiar:**
- Imagens de fundo de alta qualidade
- Overlay gradient escuro
- Texto branco por cima
- Efeito parallax sutil
- Foco no visual, menos no texto

### 4. **Vercel.com - Animações Sutis**
**O que copiar:**
- Border animado ao hover
- Glow effect pulsante
- Números contadores animados
- Partículas/dots no background
- Shimmer effect

### 5. **Framer.com - Cards com Depth**
**O que copiar:**
- Múltiplas camadas de shadow
- Inner shadow + outer shadow
- Cards "flutuando" no espaço
- Movimento ao scroll (parallax)

### 6. **Webflow.com - Micro-interações**
**O que copiar:**
- Ícone muda ao hover
- Botão com animação de seta
- Tag/badge animado
- Progress bar ou indicator
- Loading skeleton smooth

---

## 🎯 Redesign Proposto - 3 Opções

### Opção 1: "Tech Premium" (Recomendado) 🏆

**Características:**
- Cards com background gradient + image overlay
- Ícones 3D com shadow
- Hover com lift + glow intense
- Números animados grandes
- Badge de certificação flutuante

**Layout:**
```
┌─────────────────────────────────────┐
│   [Background Pattern Animated]     │
│                                     │
│  ┌──────────────┐  ┌─────────────┐ │
│  │              │  │             │ │
│  │  SAÚDE       │  │ VETERINÁRIA │ │
│  │  [Imagem]    │  │  [Imagem]   │ │
│  │  + Overlay   │  │  + Overlay  │ │
│  │              │  │             │ │
│  │  300+ Equip  │  │  150+ Equip │ │
│  │  [Lista]     │  │  [Lista]    │ │
│  │  [Badge]     │  │  [Badge]    │ │
│  └──────────────┘  └─────────────┘ │
│                                     │
│  ┌──────────────────────────────┐  │
│  │  INDÚSTRIA                   │  │
│  │  [Imagem Wide] + Stats       │  │
│  │  100+ Equipamentos           │  │
│  └──────────────────────────────┘  │
│                                     │
│  ┌─────────────────────────────┐   │
│  │  STATS COM ÍCONES ANIMADOS  │   │
│  │  500+  │ 100+  │ 100% │ 24/7│   │
│  └─────────────────────────────┘   │
└─────────────────────────────────────┘
```

**Palette:**
```css
--card-health: linear-gradient(135deg, #2563EB 0%, #06B6D4 100%);
--card-vet: linear-gradient(135deg, #10B981 0%, #14B8A6 100%);
--card-industry: linear-gradient(135deg, #F59E0B 0%, #EF4444 100%);
```

---

### Opção 2: "Glassmorphism Heavy"

**Características:**
- Cards totalmente transparentes
- Heavy backdrop blur
- Border gradient animado
- Floating elements
- Noise texture background

**Exemplo Visual:**
```css
.glass-card-premium {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(20px) saturate(180%);
  border: 2px solid transparent;
  background-clip: padding-box;
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    inset: -2px;
    border-radius: inherit;
    padding: 2px;
    background: linear-gradient(135deg, 
      rgba(37, 99, 235, 0.8),
      rgba(6, 182, 212, 0.8),
      rgba(139, 92, 246, 0.8)
    );
    -webkit-mask: linear-gradient(#fff 0 0) content-box, 
                  linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    opacity: 0;
    transition: opacity 0.5s;
  }
  
  &:hover::before {
    opacity: 1;
  }
}
```

---

### Opção 3: "Bento Grid Moderno"

**Layout Assimétrico:**
```
┌──────────┬──────┬──────────┐
│          │ VET  │          │
│  SAÚDE   │──────│  STATS   │
│  (2x2)   │ IND  │  (2x1)   │
│          │      │          │
├──────────┴──────┴──────────┤
│  CERTIFICAÇÕES (Full Width)│
└────────────────────────────┘
```

**Features:**
- Card principal maior (Saúde)
- 2 cards médios (Vet + Indústria)
- 1 área de stats
- Footer com badges
- Cada card com cor dominante diferente

---

## 🎨 Componentes Específicos a Implementar

### 1. Card com Imagem de Fundo + Gradient Overlay

```tsx
// components/AreasCard.tsx
interface AreasCardProps {
  title: string;
  description: string;
  stats: string;
  equipments: string[];
  badge: string;
  image: string;
  gradient: string;
}

export default function AreasCard({...props}: AreasCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-3xl h-[500px]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={props.image} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          alt={props.title}
        />
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: `linear-gradient(180deg, 
              ${props.gradient}00 0%, 
              ${props.gradient}80 50%, 
              ${props.gradient}E6 100%
            )`
          }}
        />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col justify-end p-8 text-white">
        {/* Badge Flutuante */}
        <div className="absolute top-6 right-6">
          <div className="px-4 py-2 bg-white/20 backdrop-blur-xl rounded-full border border-white/30">
            <span className="text-sm font-bold">{props.badge}</span>
          </div>
        </div>

        {/* Icon 3D */}
        <div className="mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
          <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl">
            {/* SVG Icon aqui */}
          </div>
        </div>

        {/* Título */}
        <h3 className="text-4xl font-black mb-3 group-hover:translate-x-2 transition-transform">
          {props.title}
        </h3>

        {/* Stats Animado */}
        <div className="text-6xl font-black mb-4 opacity-90">
          {props.stats}
        </div>

        {/* Descrição */}
        <p className="text-lg opacity-90 mb-6">
          {props.description}
        </p>

        {/* Lista de Equipamentos */}
        <div className="space-y-2 mb-6 max-h-0 group-hover:max-h-96 overflow-hidden transition-all duration-500">
          {props.equipments.map((item, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-white" />
              <span className="text-sm">{item}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <button className="w-full py-3 bg-white/20 backdrop-blur-xl rounded-xl border border-white/30 font-bold hover:bg-white/30 transition-all">
          Ver Equipamentos →
        </button>
      </div>
    </div>
  );
}
```

### 2. Stats Counter Animado

```tsx
// components/StatsCounter.tsx
import { useEffect, useRef, useState } from 'react';

interface StatsCounterProps {
  value: string;
  label: string;
  sublabel: string;
  icon: React.ReactNode;
  gradient: string;
}

export default function StatsCounter({ value, label, sublabel, icon, gradient }: StatsCounterProps) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const target = parseInt(value.replace(/\D/g, ''));
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isVisible, value]);

  return (
    <div 
      ref={ref}
      className="group relative p-8 rounded-3xl bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-500 hover:-translate-y-2"
    >
      {/* Glow Effect */}
      <div 
        className="absolute -inset-0.5 rounded-3xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500"
        style={{ background: gradient }}
      />

      {/* Content */}
      <div className="relative">
        {/* Icon */}
        <div className="mb-6 w-14 h-14 rounded-2xl bg-gradient-to-br flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform"
          style={{ background: gradient }}
        >
          {icon}
        </div>

        {/* Number */}
        <div 
          className="text-6xl font-black mb-2 bg-clip-text text-transparent"
          style={{ backgroundImage: gradient }}
        >
          {count}{value.replace(/\d/g, '')}
        </div>

        {/* Labels */}
        <div className="text-xl font-bold text-white mb-1">
          {label}
        </div>
        <div className="text-sm text-white/60">
          {sublabel}
        </div>
      </div>
    </div>
  );
}
```

### 3. Badge de Certificação Flutuante

```tsx
// components/FloatingBadge.tsx
export default function FloatingBadge({ text, icon }: { text: string; icon?: string }) {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 shadow-lg animate-float">
      {icon && <span className="text-lg">{icon}</span>}
      <span className="text-sm font-bold text-white">{text}</span>
      <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
    </div>
  );
}

// Adicione no index.css
@keyframes float {
  0%, 100% {
    transform: translateY(0px) rotate(0deg);
  }
  33% {
    transform: translateY(-10px) rotate(2deg);
  }
  66% {
    transform: translateY(-5px) rotate(-2deg);
  }
}

.animate-float {
  animation: float 6s ease-in-out infinite;
}
```

### 4. Spotlight Effect (Stripe-style)

```tsx
// components/SpotlightCard.tsx
import { useRef, useState } from 'react';

export default function SpotlightCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    
    const rect = cardRef.current.getBoundingClientRect();
    setMousePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="relative overflow-hidden rounded-3xl"
      style={{
        background: `radial-gradient(600px circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(37, 99, 235, 0.15), transparent 40%)`
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-xl" />
      <div className="relative p-8">
        {children}
      </div>
    </div>
  );
}
```

---

## 🎬 Animações e Microinterações

### Hover Stack (múltiplos efeitos simultâneos)
```css
.area-card-animated {
  transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
}

.area-card-animated:hover {
  /* 1. Lift */
  transform: translateY(-20px) scale(1.03);
  
  /* 2. Shadow */
  box-shadow: 
    0 40px 80px -12px rgba(37, 99, 235, 0.3),
    0 20px 40px -20px rgba(6, 182, 212, 0.4),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
  
  /* 3. Border */
  border-color: rgba(37, 99, 235, 0.5);
}

/* 4. Shine effect */
.area-card-animated::after {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.1),
    transparent
  );
  transition: left 0.5s;
}

.area-card-animated:hover::after {
  left: 100%;
}
```

### Scroll-triggered Animations (Stagger)
```tsx
// Cada card aparece com delay
const cards = [card1, card2, card3];

{cards.map((card, index) => (
  <ScrollReveal key={index} delay={index * 200}>
    <AreasCard {...card} />
  </ScrollReveal>
))}
```

---

## 📱 Responsividade Premium

### Desktop (1024px+)
```
┌──────────────────────────────────┐
│  [Card 1]  [Card 2]  [Card 3]    │
│  (33%)     (33%)     (33%)       │
└──────────────────────────────────┘
```

### Tablet (768px - 1023px)
```
┌─────────────────┬───────────────┐
│    Card 1       │    Card 2     │
│    (50%)        │    (50%)      │
├─────────────────┴───────────────┤
│    Card 3 (100%)                │
└─────────────────────────────────┘
```

### Mobile (< 768px)
```
┌───────────────────┐
│    Card 1         │
├───────────────────┤
│    Card 2         │
├───────────────────┤
│    Card 3         │
└───────────────────┘
```

---

## 🎯 Implementação - Passo a Passo

### Fase 1: Design Foundation (2-3h)
- [ ] Encontrar/gerar imagens de background para cada área
- [ ] Definir gradientes específicos por área
- [ ] Criar ícones 3D ou ilustrações
- [ ] Preparar assets (logos certificações, etc.)

### Fase 2: Componentes Base (3-4h)
- [ ] Criar `AreasCard.tsx` com todas as features
- [ ] Criar `StatsCounter.tsx` animado
- [ ] Criar `FloatingBadge.tsx`
- [ ] Criar `SpotlightCard.tsx` (opcional)
- [ ] Criar `ExpandableList.tsx` para equipamentos

### Fase 3: Layout e Grid (2-3h)
- [ ] Implementar Bento Grid ou Grid Regular
- [ ] Adicionar background patterns
- [ ] Configurar responsividade
- [ ] Testar em múltiplos devices

### Fase 4: Animações (2-3h)
- [ ] Implementar hover effects
- [ ] Scroll reveal com stagger
- [ ] Counter animations nos stats
- [ ] Micro-interações (botões, badges)
- [ ] Polish geral

### Fase 5: Polish e Refinamento (2h)
- [ ] Ajustar timings
- [ ] Verificar performance
- [ ] Testar acessibilidade
- [ ] Optimizar mobile
- [ ] Review final

**Tempo Total Estimado: 11-15 horas**

---

## 🎨 Paleta de Cores Recomendada

```css
/* Saúde Humana */
--health-primary: #2563EB;
--health-secondary: #06B6D4;
--health-gradient: linear-gradient(135deg, #2563EB 0%, #06B6D4 100%);

/* Veterinária */
--vet-primary: #10B981;
--vet-secondary: #14B8A6;
--vet-gradient: linear-gradient(135deg, #10B981 0%, #14B8A6 100%);

/* Indústria */
--industry-primary: #F59E0B;
--industry-secondary: #EF4444;
--industry-gradient: linear-gradient(135deg, #F59E0B 0%, #EF4444 100%);

/* Backgrounds */
--bg-pattern: radial-gradient(circle at 20% 50%, rgba(37, 99, 235, 0.05) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(6, 182, 212, 0.05) 0%, transparent 50%);
```

---

## 💡 Dicas Finais

### Do's ✅
- Use imagens reais de equipamentos (ou gere com IA)
- Mantenha consistência de espaçamento
- Teste animações em 60fps
- Use will-change para itens animados
- Implemente lazy loading nas imagens
- Adicione loading skeletons

### Don'ts ❌
- Não use mais de 3 cores principais
- Evite animações muito rápidas (< 200ms)
- Não exagere no blur (max 20px)
- Evite textos sobre imagens sem overlay
- Não use muitos efeitos simultâneos

---

## 🚀 Próximos Passos

1. **Escolher uma das 3 opções** de redesign
2. **Aprovar paleta de cores** e assets
3. **Implementar em modo Code** com os componentes propostos
4. **Testar e iterar** baseado em feedback

---

**Recomendação Final:**
Vá com a **Opção 1: "Tech Premium"** - é o melhor balance de modernidade, funcionalidade e impacto visual. Com cards grandes, imagens de fundo e animações sutis, vai transformar completamente a percepção de qualidade do site.

Quer que eu comece a implementar uma dessas opções? 🚀