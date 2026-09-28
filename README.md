
# UI‑API‑AI‑Agentic‑Testing Framework

A modern, enterprise‑grade Playwright + API + AI automation framework designed for
end‑to‑end, hybrid, and agentic testing. This repository demonstrates how UI, API,
and AI‑driven quality engineering can work together to deliver fast, stable, and
intelligent automation.

---

## 🚀 Key Capabilities

### 🔹 UI Automation (Playwright)
- Modern locator strategy (`getByRole`, `getByLabel`, `getByTestId`)
- Auto‑waiting & stable execution
- BrowserContext isolation
- Network interception & mocking
- Tracing, video, and screenshot artifacts

### 🔹 API Automation
- REST client with reusable request wrappers
- Auth utilities
- Contract/schema validation
- Hybrid flows: **API → UI → API**

### 🔹 AI‑Augmented Testing
- AI test case generator
- AI locator healer (suggests stable selectors)
- AI assertion engine (DOM + screenshot reasoning)
- AI failure analyzer (trace + logs)
- RAG engine for domain rule validation

### 🔹 Agentic Quality Engineering
Autonomous agents capable of:
- Requirement analysis
- Scenario discovery
- Test generation
- Execution & triage
- Risk‑based prioritization

---

## 📁 Repository Structure
playwright-ai-framework/
│
├── tests/                 # UI, API, AI, exploratory tests
├── pages/                 # Page Objects
├── components/            # Reusable UI components
├── framework/             # Core engine (UI, API, AI)
├── prompts/               # AI prompt library
├── utils/                 # Helpers & utilities
├── config/                # Environment configs
├── scripts/               # Automation scripts
├── .github/workflows/     # CI/CD pipelines
├── docker/                # Docker support
└── docs/                  # Architecture & setup docs


## 🧠 AI Layer Overview

### `aiClient.ts`
Central AI interface for:
- LLM calls
- Prompt formatting
- Response validation

### `aiTestGenerator.ts`
Generates Playwright tests based on:
- User stories
- Acceptance criteria
- DOM snapshots

### `aiLocatorHealer.ts`
Suggests stable selectors using:
- Roles
- Labels
- Test IDs
- Semantic attributes

### `aiAssert.ts`
AI‑powered validation of UI behavior.

### `aiFailureAnalyzer.ts`
Reads Playwright traces and summarizes root causes.


## 🏗️ Setup

npm install
npx playwright install


## ▶️ Running Tests

npx playwright test



## 🧪 Running AI Features

npm run ai:generate
npm run ai:heal
npm run ai:explore


## 📦 CI/CD

GitHub Actions pipeline included:
- Install dependencies
- Run tests
- Upload artifacts (traces, videos)
- AI failure summaries


## 📄 Documentation

See `/docs` for:
- Architecture
- Setup
- AI capabilities
- Troubleshooting

## 👤 Author

Created by Ravi Kalagara
UI‑API‑AI‑Agentic Testing Framework  
