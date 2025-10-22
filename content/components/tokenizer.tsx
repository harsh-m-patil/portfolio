"use client";

import { Tiktoken } from "js-tiktoken/lite";
import cl100k_base from "js-tiktoken/ranks/cl100k_base";
import gpt_2 from "js-tiktoken/ranks/gpt2";
import o200k_base from "js-tiktoken/ranks/o200k_base";
import p50k_base from "js-tiktoken/ranks/p50k_base";
import { type ChangeEvent, useCallback, useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/cn";

function getClasses(num: number) {
  const classes = [
    "bg-red-50 text-red-800 border-red-200 dark:bg-red-200 dark:border-red-400 dark:text-red-950",
    "bg-green-50 text-green-800 border-green-200 dark:bg-green-200 dark:border-green-400 dark:text-green-950",
    "bg-yellow-50 text-yellow-800 border-yellow-200 dark:bg-yellow-200 dark:border-yellow-400 dark:text-yellow-950",
    "bg-zinc-50 text-zinc-800 border-zinc-200 dark:bg-zinc-200 dark:border-zinc-400 dark:text-zinc-950",
    "bg-orange-50 text-orange-800 border-orange-200 dark:bg-orange-200 dark:border-orange-400 dark:text-orange-950",
    "bg-violet-50 text-violet-800 border-violet-200 dark:bg-violet-200 dark:border-violet-400 dark:text-violet-950",
  ];
  return classes[num % classes.length];
}

const enC200k = new Tiktoken(o200k_base);
const encCl100k = new Tiktoken(cl100k_base);
const encP50k = new Tiktoken(p50k_base);
const encGpt2 = new Tiktoken(gpt_2);

const models = [
  // o200k_base
  "gpt-4o",
  "gpt-4o-mini",
  // cl100k_base
  "gpt-4",
  "gpt-3.5-turbo",
  // p50k_base
  "text-embedding-3-small",
  // gpt_2
  "gpt-2",
] as const;

type Model = (typeof models)[number];

export function Tokenizer() {
  const [text, setText] = useState<string>("");
  const [model, setModel] = useState<Model>("gpt-4o");

  const encodeText = useCallback(
    (text: string) => {
      let tokens: number[] = [];
      if (model === "gpt-4o" || model === "gpt-4o-mini") {
        tokens = enC200k.encode(text);
      } else if (model === "gpt-4" || model === "gpt-3.5-turbo") {
        tokens = encCl100k.encode(text);
      } else if (model === "text-embedding-3-small") {
        tokens = encP50k.encode(text);
      } else {
        tokens = encGpt2.encode(text);
      }

      return tokens;
    },
    [model],
  );

  const decodeTokens = useCallback(
    (tokens: number[]) => {
      if (model === "gpt-4o" || model === "gpt-4o-mini")
        return enC200k.decode(tokens);
      if (model === "gpt-4" || model === "gpt-3.5-turbo")
        return encCl100k.decode(tokens);
      if (model === "text-embedding-3-small") return encP50k.decode(tokens);
      return encGpt2.decode(tokens);
    },
    [model],
  );

  function handleModelChange(model: string) {
    setModel(model as Model);
  }

  function handleTextChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  const tokens = useMemo(() => encodeText(text), [text, encodeText]);
  const tokenCount =
    tokens.length === 1 ? "1 Token" : `${tokens.length} Tokens`;
  const textLength =
    text.split("").length === 1
      ? "1 Character"
      : `${text.split("").length} Characters`;
  const wordCount = useMemo(
    () => (text === "" ? 0 : text.trim().split(/\W+/).length),
    [text],
  );

  return (
    <Card className="gap-1">
      <CardHeader>
        <Select defaultValue={model} onValueChange={handleModelChange}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Model" />
          </SelectTrigger>
          <SelectContent>
            {models.map((m) => (
              <SelectItem key={m} value={m}>
                {m}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent>
        <p className="text-xl">Input </p>
        <Textarea onChange={handleTextChange} />
        <p className="text-xl">Output tokens (text)</p>
        <div className="mt-4 px-2 min-h-8 text-sm">
          {tokens.map((t, idx) => (
            // biome-ignore lint/suspicious/noArrayIndexKey: No better key avaibailable
            <span key={idx} className={cn("border", getClasses(idx))}>
              {decodeTokens([t])}
            </span>
          ))}
        </div>
        <p className="text-xl">Output tokens (token Ids)</p>
        <div className="text-sm mt-4 px-2 min-h-6">[ {tokens.join(", ")} ]</div>
      </CardContent>
      <CardFooter className="mt-2 flex gap-2">
        <Badge
          variant="secondary"
          className="px-4 text-[1rem] border border-primary/20 rounded-full"
        >
          {tokenCount}
        </Badge>
        <Badge
          variant="secondary"
          className="px-2 text-[1rem] border border-primary/20 rounded-full"
        >
          {textLength}
        </Badge>
        <Badge
          variant="secondary"
          className="px-2 text-[1rem] border border-primary/20 rounded-full"
        >
          {wordCount} {wordCount === 1 ? "Word" : "Words"}
        </Badge>
      </CardFooter>
    </Card>
  );
}
