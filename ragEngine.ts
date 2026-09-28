import { AIClient } from "./aiClient";

export class RAGEngine {
  constructor(private ai: AIClient, private knowledgeBase: string[]) {}

  async validateAgainstDomainRules(testScenario: string) {
    const kb = this.knowledgeBase.join("\n\n");

    const prompt = `
You are a domain rule validator using RAG.

Knowledge Base:
${kb}

Test Scenario:
${testScenario}

Task:
1. Check if scenario aligns with domain rules.
2. Identify missing or conflicting rules.
3. Return JSON:
{
  "isValid": boolean,
  "issues": ["...", "..."],
  "suggestedImprovements": ["...", "..."]
}
`;

    return await this.ai.ask(prompt);
  }
}
