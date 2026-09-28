import { AIClient } from "./aiClient";

export class AIAssert {
  constructor(private ai: AIClient) {}

  async validateBehavior(expectation: string, dom: string, screenshotDesc: string) {
    const prompt = `
You are validating UI behavior.

Expected:
${expectation}

DOM:
${dom}

Screenshot:
${screenshotDesc}

Return PASS/FAIL + explanation.
`;

    return await this.ai.ask(prompt);
  }
}
