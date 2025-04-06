# 🧊 Projeto de Transformações em Figuras 2D e 3D com p5.js

Este projeto implementa uma interface interativa com duas figuras — uma 2D e outra 3D — utilizando a biblioteca gráfica **p5.js** em modo **WEBGL**. O objetivo é demonstrar de forma visual e prática os efeitos das principais transformações geométricas: **translação, rotação, escala, cisalhamento** e **texturização (brilho)**.

---

## 🎯 Objetivos

- Criar duas figuras (uma 2D e uma 3D)
- Aplicar e controlar transformações geométricas interativamente
- Alternar entre o controle das figuras
- Demonstrar o uso de técnicas gráficas modernas com p5.js

---

## 🖼️ Figuras Utilizadas

- **Figura 2D**: `plane()` (quadrado) ou `ellipse()` (círculo)
- **Figura 3D**: `box()` (cubo) ou `sphere()` (esfera)

Você pode alternar entre essas formas usando a tecla `F`.

---

## 🕹️ Controles do Projeto

| Tecla         | Ação                                 |
|---------------|--------------------------------------|
| ← / →         | Translação (movimentar figura)       |
| `+` / `-`     | Escala (aumentar / diminuir)         |
| `T`           | Rotação (`rotateY` para 3D, `rotateZ` para 2D) |
| `B`           | Aumentar brilho (efeito visual)      |
| `C`           | Cisalhamento (somente para 3D)       |
| `F`           | Trocar entre duas formas por figura  |
| `R`           | Resetar todas as transformações      |
| Botão         | Alternar entre controlar 2D e 3D     |

---

## 🔍 O que são as transformações aplicadas?

### 🧭 Translação
Movimentar a figura no espaço. No código, usamos `translate(x, y, z)` para alterar sua posição.

### 🔁 Rotação
Girar a figura em torno de um eixo:
- `rotateY()` para cubo (3D)
- `rotateZ()` para plano (2D)

### 📏 Escala
Alterar o tamanho da figura com `scale(fator)`, mantendo a proporção.

### 🪞 Cisalhamento
Deformar a figura em um eixo. Simulado com `applyMatrix()` no cubo.

### ✨ Texturização / Brilho
Aplicação de luz e materiais para realismo:
- `specularMaterial()` define o reflexo da luz
- `shininess()` controla o brilho da superfície
- `pointLight()` adiciona luz na cena

---

## 🧠 Como o código funciona?

### Estrutura

- `setup()`: inicializa o canvas e o botão de troca de controle.
- `draw()`: redesenha a cena a cada frame, atualizando posições e transformações.
- `keyPressed()`: detecta as teclas pressionadas e aplica as ações na figura ativa.

### Alternância de Controle

Usamos uma variável `controlarCubo` para saber qual figura está ativa. Um botão permite alternar entre 2D e 3D. A figura ativa recebe os comandos do teclado.

### Textos

Usamos `createGraphics()` para desenhar texto em 2D sobre o canvas 3D, pois o modo `WEBGL` não permite texto direto com `text()`.

---

## 🧪 Tecnologias Utilizadas

- [p5.js](https://p5js.org) – biblioteca gráfica em JavaScript
- WEBGL – renderização 3D via navegador
- JavaScript – linguagem principal do projeto

---

## ✅ Conclusão

Este projeto demonstrou de forma prática como aplicar transformações gráficas em tempo real, oferecendo uma base sólida para quem está começando com programação visual e computação gráfica.

**Grau de Dificuldade:** Médio  
**Principais desafios:** compreender a manipulação 3D e simular cisalhamento.  
**Principais aprendizados:** conceitos de transformação e controle de materiais/luz com p5.js.

---

## 👨‍🏫 Recomendações

Este projeto é excelente para:
- Apresentações didáticas sobre geometria e computação gráfica
- Prática de interações com canvas 3D
- Exploração de gráficos interativos com JavaScript

---
