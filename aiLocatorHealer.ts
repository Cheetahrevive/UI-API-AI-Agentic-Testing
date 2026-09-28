import { AIClient } from "./aiClient";

export class AILocatorHealer {
  constructor(private ai: AIClient) {}

  async suggestStableLocator(brokenLocator: string, domSnapshot: string) {
    const prompt = `
You are a locator expert.

Broken Locator:
${brokenLocator}

DOM Snapshot:
${domSnapshot}

Task:
1. Identify why this locator is fragile.
2. Suggest a more stable locator using:
   - getByRole
   - getByLabel
   - getByTestId
3. Return:
   - "reason": short explanation
   - "locator": new locator expression
As JSON only.
`;

    return await this.ai.ask(prompt);
  }
}
