import { AIClient } from "./aiClient";

export class AITestGenerator {
  constructor(private ai: AIClient) {}

  async generatePlaywrightTest(userStory: string, acceptanceCriteria: string, pageModelInfo: string) {
    const prompt = `
You are an expert Playwright test designer.

User Story:
${userStory}

Acceptance Criteria:
${acceptanceCriteria}

Page Model Info:
${pageModelInfo}

Task:
1. Propose 3–5 high-value test scenarios.
2. For each scenario, generate Playwright test code using:
   - test()
   - page objects
   - modern locators (getByRole, getByLabel, getByTestId)
3. Return ONLY TypeScript code, no explanation.
`;

    return await this.ai.ask(prompt);
  }
}
