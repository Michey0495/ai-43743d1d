"use client";

import { CopyButton } from "./copy-button";

interface EmailResultProps {
  subject: string;
  body: string;
  explanation: string;
}

export function EmailResult({ subject, body, explanation }: EmailResultProps) {
  const fullEmail = `Subject: ${subject}\n\n${body}`;

  return (
    <div className="space-y-6">
      <div className="bg-white/5 border border-white/10 rounded-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-bold text-lg">生成されたメール</h3>
          <CopyButton text={fullEmail} />
        </div>
        <div className="space-y-3">
          <div>
            <span className="text-blue-400 text-base font-medium">Subject: </span>
            <span className="text-white text-base">{subject}</span>
          </div>
          <div className="border-t border-white/10 pt-3">
            <pre className="text-white text-base leading-relaxed whitespace-pre-wrap font-[inherit]">
              {body}
            </pre>
          </div>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 rounded-lg p-6">
        <h3 className="text-white font-bold text-lg mb-4">表現の解説</h3>
        <div className="text-white/70 text-base leading-loose whitespace-pre-wrap">
          {explanation}
        </div>
      </div>
    </div>
  );
}
