---
marp: true
author: Olaf Krawczyk
theme: uncover
paginate: true
---

# Nx intro
### Olaf Krawczyk

09.02.2023

---
# Agenda
1. Monorepo
2. Nx - komu to potrzebne?
3. Współdzielenie kodu
4. Scaffolding kodu
5. Łatwiejszy lokalny development 
6. Automatyczna aktualizacja zależności
7. Szybszy CI
8. Graf projektu
9. Minusy Nx

---
# 1. Monorepo

![monorepo](monorepo.webp)

--- 

# 1. Monorepo
### Dlaczego nie multi-repo?
- trudniej współdzielić kod,
- skomplikowane przełączenie pomiędzy projektami,
- wiele `package.json`,
---

## 2. Nx - komu to potrzebne?

- kilka aplikacji w projekcie,
- częste kopiowanie kodu,
- wspólne TS, ESLint, Prettier,
- nowe aplikacje,
  
---

## 3. Współdzielenie kodu


- podział *apps* i *libs*,
- globalny `package.json`,
- globalne konfiguracje TS, ESLint, Prettier, etc.

##### *integrated repo*

---
# 4. Scaffolding kodu
- generowanie boilerplate aplikacji i komponentów
- Next, Angular, Jest, TS, Express... 
- np. Next - Components, Pages, App
- ponad 100 pluginów 

---

# 5. Łatwiejszy lokalny development 

- `nx run-many --target=[lint|serve|build]`
- szybszy od `docker-compose`
- caching zadań

---

# 6. Automatyczna aktualizacja zależności

- `nx migrate latest` - aktualizacja `nx` i wspieranych zależności
- `nx migrate --run-migrations` - automatycznie aktualizuje kod

---

# 7. Szybszy CI
  ![affected](affected.svg)
- `nx affected:[build | test | lint]`
- NxCloud
  - lepszy caching 
  - distributed task execution

---

# 8. Graf projektu
![width:500px](graph.png)

---

# 9. Minusy Nx
- krzywa uczenia
- kolejne narzędzie w projekcie
- zależność od pluginów Nx 
- płatne fajerwerki - NxCloud
- relatywne importy, aliasy tylko dla Nx 

---
# Talk is cheap 🤑