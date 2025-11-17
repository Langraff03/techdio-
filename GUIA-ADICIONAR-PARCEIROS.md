# 🤝 Como Adicionar Logos dos Parceiros

## 📍 Onde Colocar as Imagens

### Pasta Criada:
```
techdio-site/
└── client/
    └── public/
        └── parceiros/  ← COLOQUE AS IMAGENS AQUI!
            ├── parceiro-1.png
            ├── parceiro-2.png
            ├── parceiro-3.png
            ├── etc...
```

## 🖼️ Formato das Imagens

### Recomendações:
- **Formato:** PNG (com fundo transparente) ou JPG (fundo branco)
- **Tamanho:** 400x400px a 800x800px
- **Peso:** Máximo 200KB por imagem
- **Nomes:** Use nomes simples sem espaços

### Exemplos de Nomes Válidos:
✅ `parceiro-1.png`
✅ `hospital-abc.png`
✅ `clinica-xyz.jpg`
✅ `laboratorio-def.png`

### Exemplos de Nomes Inválidos:
❌ `Parceiro 1.png` (não use espaços)
❌ `Logo Final.PNG` (não use espaços)
❌ `meu logo.jpg` (não use espaços)

## 📋 Passo a Passo

### 1️⃣ Salvar as Imagens
Copie os logos dos parceiros para a pasta:
```
client/public/parceiros/
```

### 2️⃣ Anotar os Nomes
Faça uma lista com:
- Nome do arquivo de cada logo
- Nome da empresa
- Site (se tiver)

**Exemplo:**
```
✅ parceiro-1.png → Hospital Regional de Cianorte
✅ parceiro-2.png → Clínica Santa Maria
✅ parceiro-3.png → Laboratório LabMed
```

### 3️⃣ Me Avisar
Quando tiver todas as imagens na pasta, me envie a lista com os nomes e eu configuro automaticamente!

## 📸 Exemplo Visual

```
📁 techdio-site
  📁 client
    📁 public
      📁 parceiros           👈 ESTA PASTA JÁ EXISTE!
        📄 parceiro-1.png    👈 COLOQUE AQUI!
        📄 parceiro-2.png    👈 COLOQUE AQUI!
        📄 parceiro-3.png    👈 E AQUI!
        📄 ... (até 8 logos)
```

## 🔄 O Que Vou Fazer Depois

Quando você colocar as imagens e me avisar, vou:

1. ✅ Atualizar o arquivo [`client/src/components/PartnersSection.tsx`](client/src/components/PartnersSection.tsx)
2. ✅ Substituir os placeholders "Em breve" pelas imagens reais
3. ✅ Adicionar os nomes das empresas
4. ✅ Configurar links para os sites (se tiver)
5. ✅ Ajustar o tamanho/espaçamento se necessário

## 💡 Dica Rápida

Se você tem apenas 4 ou 6 parceiros (ao invés de 8), não tem problema!
Vou ajustar o grid automaticamente para ficar bonito.

---

**Pasta criada em:** `client/public/parceiros/`
**Status:** ✅ Pronta para receber as imagens!

**Quando tiver os logos, me avise que eu configuro em 5 minutos!** 🚀