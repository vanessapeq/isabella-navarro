# Guia de Tamanhos de Imagens - Isabela Navarro Portfolio

Este documento especifica os tamanhos ideais e formatos recomendados para todas as imagens do site.

## 📐 Especificações por Tipo de Imagem

### 1. Hero Image (HomeHero)
- **Uso**: Imagem principal da home page
- **Tamanho recomendado**: **1920x1080px** (16:9) ou **1920x1280px** (3:2)
- **Tamanho máximo de arquivo**: 300KB
- **Formato**: JPG (qualidade 85-90%) ou WebP
- **Localização**: `/public/images/public-hero-isabela.jpg`
- **Nota**: Imagem full-width, ocupa toda a altura da viewport

### 2. Project Images (ProjectCard)
- **Uso**: Imagens de capa dos projetos na home e página de projetos
- **Tamanho recomendado**: **1200x800px** (3:2)
- **Tamanho máximo de arquivo**: 200KB
- **Formato**: JPG (qualidade 85%) ou WebP
- **Localização**: `/public/images/`
- **Nota**: Cards em grid de 2 colunas no desktop, altura fixa de ~240px

### 3. Artwork Category Cards (ArtworkCategoryCard)
- **Uso**: Imagens de capa das categorias de obras
- **Tamanho recomendado**: **800x600px** (4:3)
- **Tamanho máximo de arquivo**: 150KB
- **Formato**: JPG (qualidade 80%) ou WebP
- **Localização**: Definidas em `data/artworks.ts`
- **Nota**: Grid de 3 colunas no desktop, altura ~260px

### 4. Artwork Thumbnails (ArtworkCategoryDetailClient)
- **Uso**: Miniaturas das obras individuais nas páginas de categoria
- **Tamanho recomendado**: **800x600px** (4:3)
- **Tamanho máximo de arquivo**: 100KB
- **Formato**: JPG (qualidade 80%) ou WebP
- **Nota**: Grid de 3 colunas, aspect ratio 4:3

### 5. Artwork Modal/Lightbox (ArtworkModal)
- **Uso**: Imagens em tamanho grande no modal ao clicar na obra
- **Tamanho recomendado**: **1600x1200px** (4:3) ou **1920x1080px** (16:9)
- **Tamanho máximo de arquivo**: 400KB
- **Formato**: JPG (qualidade 90%) ou WebP
- **Nota**: Imagem expandida, pode ocupar até 90% da viewport

### 6. Bio Photo (BioPage)
- **Uso**: Foto da artista na página BIO
- **Tamanho recomendado**: **900x1200px** (3:4 portrait)
- **Tamanho máximo de arquivo**: 200KB
- **Formato**: JPG (qualidade 85%) ou WebP
- **Nota**: Layout em 2 colunas, foto ocupa ~40% da largura

### 7. Support Logos (Footer)
- **Uso**: Logos de apoio/patrocínio no footer
- **Tamanho recomendado**: **200x80px** (pode variar conforme logo)
- **Tamanho máximo de arquivo**: 20KB
- **Formato**: SVG (preferencial) ou PNG transparente
- **Nota**: Logos pequenos, altura máxima ~60px

## 🎨 Formato e Qualidade Recomendados

### JPG
- **Qualidade**: 80-90% (dependendo do uso)
- **Otimização**: Use ferramentas como TinyPNG, ImageOptim ou Squoosh
- **Quando usar**: Fotos com muitas cores e gradientes

### WebP
- **Qualidade**: 80-90%
- **Vantagem**: ~30% menor que JPG mantendo qualidade similar
- **Quando usar**: Sempre que possível (Next.js converte automaticamente)

### PNG
- **Quando usar**: Apenas para logos com transparência ou imagens com texto
- **Otimização**: Use PNG-8 quando possível, PNG-24 apenas se necessário

### SVG
- **Quando usar**: Logos, ícones e gráficos vetoriais simples
- **Vantagem**: Escalável sem perda de qualidade

## ⚡ Otimização Automática

O site usa **Next.js Image Optimization** que:
- ✅ Converte automaticamente para WebP quando o navegador suporta
- ✅ Gera múltiplos tamanhos responsivos automaticamente
- ✅ Lazy loading automático (exceto imagens com `priority`)
- ✅ Blur placeholder para melhor UX

## 📝 Checklist Antes de Adicionar Imagens

- [ ] Imagem redimensionada para o tamanho recomendado
- [ ] Arquivo otimizado (TinyPNG, ImageOptim, etc.)
- [ ] Tamanho de arquivo dentro do limite especificado
- [ ] Formato correto (JPG/WebP para fotos, SVG para logos)
- [ ] Nome do arquivo em lowercase com hífens (ex: `projeto-azulejo-contemporaneo.jpg`)
- [ ] Alt text descritivo adicionado no código

## 🛠️ Ferramentas Recomendadas

- **TinyPNG** (https://tinypng.com/) - Compressão online
- **Squoosh** (https://squoosh.app/) - Compressão e conversão de formato
- **ImageOptim** (Mac) - Compressão em lote
- **Photoshop Export for Web** - Controle fino de qualidade

## 📊 Resumo de Tamanhos

| Tipo | Dimensões | Tamanho Máx | Formato |
|------|-----------|-------------|---------|
| Hero | 1920x1080px | 300KB | JPG/WebP |
| Project | 1200x800px | 200KB | JPG/WebP |
| Category | 800x600px | 150KB | JPG/WebP |
| Artwork Thumb | 800x600px | 100KB | JPG/WebP |
| Artwork Modal | 1600x1200px | 400KB | JPG/WebP |
| Bio Photo | 900x1200px | 200KB | JPG/WebP |
| Logo | 200x80px | 20KB | SVG/PNG |


