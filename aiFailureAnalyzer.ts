import { AIClient } from "./aiClient";

export class AIFailureAnalyzer {
  constructor(private ai: AIClient) {}

  async analyzeFailure(traceSummary: string, logs: string, screenshotDesc: string) {
    const prompt = `
You are a QA failure analysis expert.

Trace Summary:
${traceSummary}

Logs:
${logs}

Screenshot:
${screenshotDesc}

Task:
1. Identify likely root cause.
2. Classify failure as:
   - PRODUCT BUG
   - TEST ISSUE
   - ENVIRONMENT ISSUE
3. Suggest next steps.
Return JSON:
{
  "classification": "...",
  "rootCause": "...",
  "nextSteps": ["...", "..."]
}
`;

    return await this.ai.ask(prompt);
  }
}
