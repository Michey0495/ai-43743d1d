import type { Tone, Relationship } from "./scenes";

const toneDescriptions: Record<Tone, string> = {
  formal: "Very formal and polite. Use sophisticated vocabulary, complete sentences, and respectful expressions suitable for senior executives and important clients.",
  standard: "Professional but approachable. Use clear, concise language appropriate for everyday business communication with colleagues and general contacts.",
  casual: "Friendly and relaxed but still professional. Use simpler expressions and a warm tone suitable for close colleagues and familiar contacts.",
};

const relationshipDescriptions: Record<Relationship, string> = {
  boss: "The recipient is the sender's supervisor or manager. Show appropriate respect and deference.",
  colleague: "The recipient is a peer/colleague at a similar level. Maintain professional equality.",
  client: "The recipient is a client or business partner. Show respect and professionalism while being service-oriented.",
  stranger: "This is the first contact with the recipient. Be polite, introduce context clearly, and establish a professional tone.",
  friend: "The recipient is a personal friend or very close colleague. A warm, friendly tone is appropriate.",
};

export function buildGeneratePrompt(params: {
  scene: string;
  tone: Tone;
  relationship: Relationship;
  recipientName?: string;
  senderName?: string;
  points: string;
}): string {
  return `You are an expert English business email writer who specializes in helping Japanese professionals write perfect English emails.

## Task
Generate a professional English business email based on the user's Japanese input.

## Parameters
- Scene: ${params.scene}
- Tone: ${toneDescriptions[params.tone]}
- Relationship: ${relationshipDescriptions[params.relationship]}
- Recipient name: ${params.recipientName || "[Recipient]"}
- Sender name: ${params.senderName || "[Sender]"}

## User's key points (in Japanese):
${params.points}

## Output format
Respond in the following JSON format ONLY. Do not include any text outside the JSON:
{
  "subject": "The email subject line in English",
  "body": "The complete email body in English (use \\n for line breaks)",
  "explanation": "日本語で、なぜこの表現を選んだか、重要なフレーズの解説を3-5点で記載。各ポイントは改行で区切る。"
}

## Rules
- Write natural, professional English that a native speaker would use
- Match the tone and relationship settings precisely
- Include appropriate greeting and closing
- Keep the email concise but complete
- The explanation MUST be in Japanese and focus on key English expressions used, why they were chosen, and cultural notes
- Do not include markdown formatting in the body`;
}
