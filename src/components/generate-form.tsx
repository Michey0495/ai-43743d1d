"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { EmailResult } from "./email-result";
import { scenes, tones, relationships } from "@/lib/scenes";
import type { Tone, Relationship } from "@/lib/scenes";

interface GenerateResult {
  subject: string;
  body: string;
  explanation: string;
}

export function GenerateForm() {
  const searchParams = useSearchParams();
  const initialScene = searchParams.get("scene") || "";

  const [scene, setScene] = useState(initialScene);
  const [tone, setTone] = useState<Tone>("standard");
  const [relationship, setRelationship] = useState<Relationship>("client");
  const [recipientName, setRecipientName] = useState("");
  const [senderName, setSenderName] = useState("");
  const [points, setPoints] = useState("");
  const [result, setResult] = useState<GenerateResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const selectedScene = scenes.find((s) => s.id === scene);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!scene || !points.trim()) return;

    setLoading(true);
    setError("");
    setResult(null);

    try {
      const res = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          scene,
          tone,
          relationship,
          recipientName: recipientName || undefined,
          senderName: senderName || undefined,
          points,
        }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "生成に失敗しました");
      }

      const data = await res.json();
      setResult(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "エラーが発生しました");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-8">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label className="text-white text-base">シーン</Label>
            <Select value={scene} onValueChange={setScene}>
              <SelectTrigger className="bg-white/5 border-white/10 text-white">
                <SelectValue placeholder="シーンを選択" />
              </SelectTrigger>
              <SelectContent>
                {scenes.map((s) => (
                  <SelectItem key={s.id} value={s.id}>
                    {s.name} - {s.description}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-white text-base">トーン</Label>
            <Select value={tone} onValueChange={(v) => setTone(v as Tone)}>
              <SelectTrigger className="bg-white/5 border-white/10 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {tones.map((t) => (
                  <SelectItem key={t.id} value={t.id}>
                    {t.name} - {t.description}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label className="text-white text-base">関係性</Label>
            <Select
              value={relationship}
              onValueChange={(v) => setRelationship(v as Relationship)}
            >
              <SelectTrigger className="bg-white/5 border-white/10 text-white">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {relationships.map((r) => (
                  <SelectItem key={r.id} value={r.id}>
                    {r.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="text-white text-base">相手の名前</Label>
              <input
                type="text"
                value={recipientName}
                onChange={(e) => setRecipientName(e.target.value)}
                placeholder="例: John"
                maxLength={100}
                className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white text-base placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="space-y-2">
              <Label className="text-white text-base">自分の名前</Label>
              <input
                type="text"
                value={senderName}
                onChange={(e) => setSenderName(e.target.value)}
                placeholder="例: Tanaka"
                maxLength={100}
                className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-white text-base placeholder:text-white/30 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <Label className="text-white text-base">
            伝えたい要点（日本語）
          </Label>
          <Textarea
            value={points}
            onChange={(e) => setPoints(e.target.value)}
            placeholder={
              selectedScene?.placeholderPoints ||
              "日本語で伝えたいことを入力してください"
            }
            rows={5}
            maxLength={2000}
            className="bg-white/5 border-white/10 text-white text-base leading-relaxed placeholder:text-white/30 resize-none"
          />
        </div>

        <Button
          type="submit"
          disabled={!scene || !points.trim() || loading}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white text-base py-6 cursor-pointer transition-all duration-200 disabled:opacity-50"
        >
          {loading ? "生成中..." : "英語メールを生成する"}
        </Button>
      </form>

      {error && (
        <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 text-red-400 text-base">
          {error}
        </div>
      )}

      {result && (
        <EmailResult
          subject={result.subject}
          body={result.body}
          explanation={result.explanation}
        />
      )}
    </div>
  );
}
