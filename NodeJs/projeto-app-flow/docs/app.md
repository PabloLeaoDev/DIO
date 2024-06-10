# Podcast Managers

## Descrição
Um app estilo Netflix, aode eu possa centralizar diferentes epsódios de podcasts e organizá-los por categoria.

## Domínio
Podcasts feitos em vídeo

## Features
- Listar podcasts em seções de categorias 
    - [saúde, economia, humor, mentalidade, ...]
- Filtrar epsódios por nome de podcast

## Como

### Feature:
Listar os epsódios do podcast em seções de categorias.

### Implementação:
GET: retorna lista de epsódios

response: 

```js
[
    {
        podcast: 'flow',
        epsode: 'RENATO TREZOITÃO - Flow #354',
        videoId: 'XiWjbg9HjrE',
        cover: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
        link: 'https://www.youtube.com/watch?v=XiWjbg9HjrE',
        categories: ['economia', 'mentalidade']
    },
    {
        podcast: 'flow',
        epsode: 'GORGONOID - Flow #332',
        videoId: '_LxdbesBMAI',
        cover: `https://i.ytimg.com/vi/${videoId}/maxresdefault.jpg`,
        link: 'https://www.youtube.com/watch?v=_LxdbesBMAI',
        categories: ['saúde', 'bodybuilder']
    }
]
```
