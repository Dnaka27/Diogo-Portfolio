# Brief: Portfolio v2 — "The Operator"

## Conceito

Um portfolio que parece uma **central de operações de dados em tempo real** — não o clichê verde-em-preto de hacker, mas uma interpretação cinematic e editorial de como seria um painel de missão crítica. O visitante sente que entrou numa sala de controle sofisticada onde cada seção é um painel operacional.

A ideia central: **dados como infraestrutura de poder**. Quem controla os dados controla a narrativa. O design comunica isso sem dizer uma palavra.

---

## Direção Visual

### Paleta

| Token        | Valor       | Uso                              |
|--------------|-------------|----------------------------------|
| `--bg`       | `#030B14`   | Fundo da página — azul-noite quase preto |
| `--surface`  | `#0D1B2A`   | Cards e painéis                  |
| `--surface-2`| `#142236`   | Hover states, detalhes elevados  |
| `--accent`   | `#00D4FF`   | Destaque principal — ciano elétrico |
| `--accent-2` | `#7B61FF`   | Destaque secundário — violeta    |
| `--signal`   | `#00FF87`   | Indicadores de status "online"   |
| `--text`     | `#E2EEF7`   | Texto principal                  |
| `--muted`    | `#5A7A95`   | Texto secundário                 |
| `--line`     | `rgba(0, 212, 255, 0.12)` | Bordas e separadores |

Sem branco puro. Sem preto puro. Sem cinza neutro.

### Tipografia

- **Display / Headings:** `Space Grotesk` — geométrico, técnico, com personalidade
- **Body / Copy:** `Inter` — legível, neutro, não briga com o display
- **Código / Labels / Tags:** `JetBrains Mono` — dados precisam de mono

Regra: headings grandes e corajosos. Não tenha medo de 80-96px no hero. O peso visual da tipografia carrega metade do design.

### Elementos Visuais Recorrentes

1. **Grid de coordenadas** — fundo com linhas de grade muito finas (`rgba(0, 212, 255, 0.04)`), como papel milimetrado ou um plotter. Não um padrão óbvio, só uma sutil sensação de precisão técnica.

2. **Pulse dots** — pequenos círculos com animação de pulse (como um radar ou status "ao vivo") em verde `#00FF87`. Aparecem ao lado de itens que estão "ativos" ou em destaque.

3. **Scan lines horizontais sutis** — na hero section, um overlay com scan lines horizontais muito discretas, quasi invisíveis. Referenciam monitores CRT e telas de missão crítica.

4. **Bordas com brilho** — cards têm `border: 1px solid var(--line)` com um `box-shadow` interno muito sutil em ciano. Nada exagerado — refined, não cyberpunk barato.

5. **Labels de sistema** — elementos secundários formatados como labels de terminal: `[ SYS ]`, `[ DATA ]`, `[ STATUS ]`. Fonte mono, uppercase, tamanho 10-11px.

---

## Layout

**Não scroll de cima a baixo como um blog.** O layout deve ter tensão visual — assimetria intencional, não acidental.

Estrutura geral:
- Navbar fixo no topo, minimalista — só logo/nome + links. Sem fundo até rolar.
- Hero: layout em dois painéis assimétricos (60/40 ou 65/35). Lado esquerdo: copy. Lado direito: um "painel de status" estruturado como um readout de dashboard.
- Separadores entre seções: não dividers simples. Use um elemento de "transmissão" — uma linha horizontal que cruza a tela com um pequeno indicador de percentagem ou coordenada no meio.
- Cards de projeto: horizontais (não grid 2x2 quadrado). Estruturados como linhas de log ou entradas de um sistema de monitoramento.
- Footer: denso como um rodapé de terminal — informações técnicas, coordenadas fictícias, timestamp.

---

## Seções

### Navbar
- `DIOGO OIKE` à esquerda em `JetBrains Mono`, maiúsculas, tamanho pequeno (13px)
- Links à direita: `PROJETOS`, `STACK`, `CONTATO` — sem underline, com um indicador de cursor piscante quando hover
- Um indicador `● DISPONÍVEL` em verde à extrema direita

### Hero

**Painel esquerdo (60%):**
```
[ ENG. DE DADOS ]

Building solutions and
digital products with
data and applied AI.
```
- Headline em `Space Grotesk`, peso 700, tamanho máximo possível sem quebrar em mobile
- Um subtítulo em `JetBrains Mono`, tamanho 14px, muted: `// Python · Data Engineering · Applied AI`
- Dois CTAs: primário com borda ciano sólida + hover fill; secundário apenas texto com seta `→`

**Painel direito (40%) — "Status Panel":**
Estruturado como um readout real de sistema:
```
┌─ PROFILE STATUS ──────────────────┐
│ NAME      Diogo Oike               │
│ LOCATION  Brazil                   │
│ STATUS    ● OPEN TO WORK          │
│ FOCUS     Data Engineering         │
│           Applied AI               │
│           Software Dev             │
└───────────────────────────────────┘
```
Usar uma div estilizada que imite isso visualmente — não ASCII art literal, mas o mesmo feeling estruturado.

### Projetos

Título da seção: `[ 04 PROJETOS ]` — o número de projetos como parte do label, em mono.

Cada projeto como uma **linha de log horizontal**:
```
2026  CYBER ATTACKS        Data Science     [ Python · Streamlit · Analysis ]    → VER
```

Ao hover: a linha expande verticalmente revelando o summary do projeto e o link pro repo. Transição smooth, 200ms.

Sem cards quadrados. Sem thumbnails de screenshot. Os projetos se listam como entradas de um sistema de rastreamento.

### Skills / Stack

Renomear para `STACK` ou `SISTEMA`.

Não uma tabela de habilidades listadas. Ao invés, agrupar em dois eixos visualmente:

**Eixo principal (esquerda):** as tecnologias core em fonte grande, empilhadas:
```
PYTHON
SQL
DATA ENGINEERING
MACHINE LEARNING
```

**Eixo secundário (direita):** certificados e fundamentos listados como log entries com ano.

### Contato

Não um formulário. Uma seção tipo "handshake de conexão":

```
INICIANDO CONEXÃO...
██████████████ 100%

Pronto para colaborar.
```

(A barra de progresso é decorativa, não funcional — aparece quando a seção entra em viewport.)

Links de contato formatados como comandos:
```
$ email    diogooikejapan@gmail.com
$ github   github.com/Dnaka27
$ linkedin linkedin.com/in/diogo-oike-kanefuku
```

---

## Tom e Mood

- **Operacional, não decorativo.** Cada elemento existe por uma razão.
- **Confiante, não arrogante.** O design comunica competência através de precisão.
- **Técnico, mas legível.** Um recrutador não-técnico deve conseguir navegar sem fricção.
- **Cinematográfico.** Pense em: sala de controle da NASA, NOC de uma big tech, opening credits de uma série de ficção científica séria.

Referências de humor visual: *Severance* (a estética corporativa clean), telas de missão crítica do filme *Interstellar*, a UI do game *Observation*.

---

## O que Evitar

- **Verde em preto** — é o clichê de hacker. Já foi.
- **Gradientes de aurora/holográfico** — overused em 2024-2025.
- **Cards com sombras suaves e bordas arredondadas** — isso é o design atual, não queremos mais.
- **Formas geométricas flutuantes** — já existe no v1.
- **Muitas cores** — a paleta tem ciano + violeta como acentes. Use um de cada vez, não juntos. Reservar violeta para detalhes secundários raros.
- **Animações de "digitação" de texto** — overused. Se tiver animação, que seja de dados sendo "carregados", não texto sendo digitado letra por letra.

---

## Componentes Técnicos Sugeridos

| Componente        | Detalhe                                                         |
|-------------------|-----------------------------------------------------------------|
| `StatusDot`       | Círculo 8px com keyframe de pulse em verde, inline com texto    |
| `SectionLabel`    | `[ LABEL ]` em mono 11px muted, aparece acima do heading real   |
| `LogRow`          | Linha horizontal de projeto com hover expand                    |
| `StatusPanel`     | Div estruturada como readout de terminal, hero sidebar          |
| `GridBackground`  | SVG ou CSS grid overlay com opacity ~3%, ciano                  |
| `ConnectionBar`   | Separador de seção animado com progress fill on scroll          |

---

## Estrutura de Arquivos Sugerida (não obrigatória)

```
src/
  components/
    Navbar.jsx          — mantém nome
    HeroSection.jsx     — refatorar completamente
    StatusPanel.jsx     — novo: o painel de status da hero
    ProjectsLog.jsx     — substitui ProjectsGrid
    StackSection.jsx    — substitui SkillsSection
    ContactSection.jsx  — refatorar
    ui/
      SectionLabel.jsx  — label [ SYS ] reutilizável
      StatusDot.jsx     — dot pulsante reutilizável
      LogRow.jsx        — linha de projeto expansível
  index.css             — tokens redesenhados
```

---

## Checklist de Revisão Final

Antes de considerar pronto, verificar:

- [ ] O fundo `#030B14` é perceptível como azul-noite, não preto neutro
- [ ] `JetBrains Mono` carregada via Google Fonts / local
- [ ] `Space Grotesk` carregada via Google Fonts
- [ ] O painel de status do hero parece estruturado, não aleatório
- [ ] As linhas de projeto expandem ao hover sem quebrar o layout
- [ ] O status dot pulsa mas não distrai
- [ ] A grade de fundo não aparece em telas brilhantes
- [ ] Mobile: o layout de dois painéis empilha corretamente
- [ ] Nenhum cinza neutro (`#888`, `#aaa`) presente — substituir por `--muted` `#5A7A95`
