"use client";

import { Tiktoken } from "js-tiktoken/lite";
import {
  type ChangeEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
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

type Encoding = "o200k_base" | "cl100k_base" | "p50k_base" | "gpt2";

const modelToEncoding: Record<Model, Encoding> = {
  "gpt-4o": "o200k_base",
  "gpt-4o-mini": "o200k_base",
  "gpt-4": "cl100k_base",
  "gpt-3.5-turbo": "cl100k_base",
  "text-embedding-3-small": "p50k_base",
  "gpt-2": "gpt2",
};

// Rank tables are ~1MB+ each, so load them on demand instead of bundling
// them into the page chunk.
const encoderCache = new Map<Encoding, Promise<Tiktoken>>();

function loadEncoder(encoding: Encoding): Promise<Tiktoken> {
  let cached = encoderCache.get(encoding);
  if (!cached) {
    const ranksPromise = {
      o200k_base: () => import("js-tiktoken/ranks/o200k_base"),
      cl100k_base: () => import("js-tiktoken/ranks/cl100k_base"),
      p50k_base: () => import("js-tiktoken/ranks/p50k_base"),
      gpt2: () => import("js-tiktoken/ranks/gpt2"),
    }[encoding]();
    cached = ranksPromise.then((mod) => new Tiktoken(mod.default));
    encoderCache.set(encoding, cached);
  }
  return cached;
}

export function Tokenizer() {
  const [text, setText] = useState<string>("");
  const [model, setModel] = useState<Model>("gpt-4o");
  const [encoder, setEncoder] = useState<Tiktoken | null>(null);

  const encoding = modelToEncoding[model];

  useEffect(() => {
    let cancelled = false;
    setEncoder(null);
    loadEncoder(encoding).then((enc) => {
      if (!cancelled) setEncoder(enc);
    });
    return () => {
      cancelled = true;
    };
  }, [encoding]);

  const encodeText = useCallback(
    (text: string) => (encoder ? encoder.encode(text) : []),
    [encoder],
  );

  const decodeTokens = useCallback(
    (tokens: number[]) => (encoder ? encoder.decode(tokens) : ""),
    [encoder],
  );

  function handleModelChange(model: string) {
    setModel(model as Model);
  }

  function handleTextChange(e: ChangeEvent<HTMLTextAreaElement>) {
    setText(e.target.value);
  }

  const tokens = useMemo(() => encodeText(text), [text, encodeText]);
  const tokenItems = useMemo(() => {
    const counts = new Map<number, number>();
    let position = -1;
    return tokens.map((token) => {
      position += 1;
      const occurrence = (counts.get(token) ?? 0) + 1;
      counts.set(token, occurrence);
      return {
        token,
        classIndex: position,
        key: `${token}-${occurrence}`,
      };
    });
  }, [tokens]);
  const tokenCount =
    tokens.length === 1 ? "1 Token" : `${tokens.length} Tokens`;
  const textLength =
    text.split("").length === 1
      ? "1 Character"
      : `${text.split("").length} Characters`;
  const wordCount = text === "" ? 0 : text.trim().split(/\W+/).length;

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
          {tokenItems.map(({ token, classIndex, key }) => (
            <span key={key} className={cn("border", getClasses(classIndex))}>
              {decodeTokens([token])}
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
