# Architecture Overview

This document explains the internal architecture of the UI‑API‑AI‑Agentic Testing Framework.

---

## 🏛️ High‑Level Architecture

┌──────────────────────────┐
│        Test Runner        │
│     (Playwright CLI)      │
└─────────────┬────────────┘
│
▼
┌────────────────────┐
│   Test Suites      │
│ UI | API | AI | EX │
└─────────┬──────────┘
│
▼
┌──────────────────────┐
│   Framework Layer    │
│ core | api | ai | pw │
└──────────┬───────────┘
│
▼┌──────────────────────────────────────────────────┐
│                    Subsystems                     │
│                                                  │
│  Playwright Engine  → browser/context/page        │
│  API Client         → REST calls + schema checks  │
│  AI Engine          → LLM + prompts + RAG         │
│  Locator Healer     → AI‑driven selector repair   │
│  Exploratory Agent  → autonomous crawling         │
│  Visual Engine      → snapshots + AI diff         │
│                                                  │
└──────────────────────────────────────────────────┘
│
▼
┌──────────────────────┐
│   Infrastructure      │
│ CI/CD | Docker | Cloud│
└──────────────────────┘

---

## 🔹 UI Layer (Playwright)

- Page Objects
- Components
- Modern locator strategy
- Auto‑waiting
- Tracing & debugging

---

## 🔹 API Layer

- REST client
- Auth utilities
- Contract validation
- Hybrid test orchestration

---

## 🔹 AI Layer

### Components:
- `aiClient.ts`
- `aiTestGenerator.ts`
- `aiLocatorHealer.ts`
- `aiAssert.ts`
- `aiFailureAnalyzer.ts`
- `ragEngine.ts`

### Responsibilities:
- Test generation
- Failure analysis
- Locator healing
- Exploratory testing
- Domain rule validation

---

## 🔹 Agentic Layer

Autonomous agents:
- Requirement Agent
- Scenario Agent
- Execution Agent
- Failure Agent
- Risk Agent

---

## 🔹 CI/CD

- GitHub Actions
- Matrix builds
- Artifact uploads
- AI summaries

---

## 🔹 Docker

- Reproducible test environments
- Headless execution
- CI‑friendly

---

# End of Architecture Document

