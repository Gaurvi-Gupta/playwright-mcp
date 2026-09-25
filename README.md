# Playwright MCP - UI Automation Framework

A Playwright TypeScript UI automation framework using **Page Object Model (POM)** and **Playwright MCP with AI Agents** for test planning, generation, and test healing.

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Playwright MCP
- Git & GitHub
- VS Code

## Key Features

- UI automation using Playwright
- Page Object Model (POM)
- Cross-browser testing: Chromium, Firefox and WebKit
- AI-assisted test planning
- AI-assisted test generation
- AI-assisted test healing
- Reusable fixtures and test data
- HTML test reports

## AI Agents

This project uses three Playwright MCP agents:

| Agent | Purpose |
|---|---|
| Planner | Explores the application and creates test scenarios |
| Generator | Converts test scenarios into Playwright tests |
| Healer | Analyzes failed tests and suggests/fixes locator or test issues |

## Project Structure

```text
playwright-mcp/
│
├── .github/          # GitHub and AI agent configuration
├── .vscode/          # VS Code configuration
├── specs/            # Test plans and scenarios
├── src/
│   ├── fixtures/     # Custom Playwright fixtures
│   ├── pages/        # Page Object classes
│   └── utils/        # Reusable utilities
├── tests/
│   ├── auth/         # Authentication tests
│   ├── data/         # Test data
│   └── seed.spec.ts  # Basic Playwright test
│
├── AGENTS.md         # Project automation guidelines
├── package.json
├── playwright.config.ts
└── README.md