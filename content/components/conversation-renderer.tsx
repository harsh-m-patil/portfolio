"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import { ScrollArea, ScrollViewport } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

type ContentType = "text";

type TextContent = {
  type: ContentType;
  text: string;
};

type ToolCall = {
  id: string;
  type: "function";
  function: {
    name: string;
    arguments: string;
  };
};

type SystemMessage = {
  role: "system";
  content: string;
};

type UserMessage = {
  role: "user";
  content: TextContent[];
};

type AssistantMessage = {
  role: "assistant";
  content: string | TextContent | null;
  tool_calls?: ToolCall[];
};

type ToolMessage = {
  role: "tool";
  content: string;
  tool_call_id: string;
};

type Message = SystemMessage | UserMessage | AssistantMessage | ToolMessage;

type Conversation = {
  messages: Message[];
};

const conversation: Conversation = {
  messages: [
    {
      role: "system",
      content: "unnecessarily long system prompt",
    },
    {
      role: "user",
      content: [
        {
          type: "text",
          text: "what does this project do?",
        },
      ],
    },
    {
      role: "assistant",
      content: null,
      tool_calls: [
        {
          id: "tooluse_Ub1uBCp1PJurLiSN4z5HAq",
          type: "function",
          function: {
            name: "bash",
            arguments: '{"command":"ls -la"}',
          },
        },
      ],
    },
    {
      role: "tool",
      content:
        "total 16\ndrwxr-xr-x@  4 harshwardhan  user   128 Apr 15 12:26 .\ndrwxr-xr-x@ 33 harshwardhan  user  1056 Apr 15 12:24 ..\n-rw-r--r--@  1 harshwardhan  user    23 Apr 15 12:26 go.mod\n-rw-r--r--@  1 harshwardhan  user    54 Apr 15 12:26 main.go\n",
      tool_call_id: "tooluse_Ub1uBCp1PJurLiSN4z5HAq",
    },
    {
      role: "assistant",
      content: null,
      tool_calls: [
        {
          id: "tooluse_XG5PMLAtBXCiQUgHDtJtSK",
          type: "function",
          function: {
            name: "read",
            arguments: '{"path":"/Users/harshwardhan/temp/demo/main.go"}',
          },
        },
      ],
    },
    {
      role: "tool",
      content: 'package main\n\nfunc main() {\n\tprintln("hello world")\n}\n',
      tool_call_id: "tooluse_XG5PMLAtBXCiQUgHDtJtSK",
    },
    {
      role: "assistant",
      content: {
        type: "text",
        text: 'This is a minimal Go project that simply prints `"hello world"',
      },
    },
  ],
};

function getAssistantText(message: AssistantMessage): string {
  if (message.content === null) return "";
  if (typeof message.content === "string") return message.content;
  return message.content.text;
}

function parseArgs(args: string): Record<string, unknown> | null {
  try {
    return JSON.parse(args);
  } catch {
    return null;
  }
}

function ToolCallBlock({ toolCall }: { toolCall: ToolCall }) {
  const parsed = parseArgs(toolCall.function.arguments);
  return (
    <Card className="py-0 gap-0">
      <CardHeader className="px-4 py-2 border-b">
        <div className="flex items-center gap-2">
          <Badge variant="outline" className="font-mono">
            {toolCall.function.name}
          </Badge>
          <span className="text-muted-foreground text-xs font-mono truncate">
            {toolCall.id}
          </span>
        </div>
      </CardHeader>
      <CardContent className="px-4 py-3">
        <ScrollArea className="max-h-48">
          <ScrollViewport>
            <pre className="text-sm text-muted-foreground whitespace-pre-wrap break-words font-mono">
              {parsed
                ? JSON.stringify(parsed, null, 2)
                : toolCall.function.arguments}
            </pre>
          </ScrollViewport>
        </ScrollArea>
      </CardContent>
    </Card>
  );
}

function ToolResultBlock({ message }: { message: ToolMessage }) {
  const [open, setOpen] = useState(false);
  return (
    <Collapsible open={open} onOpenChange={setOpen}>
      <Card className="py-0 gap-0">
        <CardHeader className="px-4 py-2 border-b">
          <div className="flex items-center gap-2">
            <Badge variant="secondary">Tool Result</Badge>
            <span className="text-muted-foreground text-xs font-mono truncate">
              {message.tool_call_id}
            </span>
            <CollapsibleTrigger asChild>
              <Button variant="ghost" size="icon-sm" className="ml-auto">
                {open ? "−" : "+"}
              </Button>
            </CollapsibleTrigger>
          </div>
        </CardHeader>
        <CollapsibleContent>
          <CardContent className="px-4 py-3">
            <ScrollArea className="max-h-48">
              <ScrollViewport>
                <pre className="text-sm text-muted-foreground whitespace-pre-wrap break-words font-mono">
                  {message.content}
                </pre>
              </ScrollViewport>
            </ScrollArea>
          </CardContent>
        </CollapsibleContent>
      </Card>
    </Collapsible>
  );
}

function MessageBlock({ message }: { message: Message }) {
  const [open, setOpen] = useState(false);
  if (message.role === "system") {
    return (
      <Collapsible open={open} onOpenChange={setOpen}>
        <Card className="py-0 gap-0">
          <CardHeader className="px-4 py-2">
            <div className="flex items-center gap-2">
              <Badge variant="secondary">system</Badge>
              <CollapsibleTrigger asChild>
                <Button variant="ghost" size="icon-sm" className="ml-auto">
                  {open ? "−" : "+"}
                </Button>
              </CollapsibleTrigger>
            </div>
          </CardHeader>
          <CollapsibleContent>
            <Separator />
            <CardContent className="px-4 py-3">
              <pre className="whitespace-pre-wrap break-words text-sm text-muted-foreground italic">
                {message.content}
              </pre>
            </CardContent>
          </CollapsibleContent>
        </Card>
      </Collapsible>
    );
  }

  if (message.role === "user") {
    return (
      <Card className="py-0 gap-0">
        <CardHeader className="px-4 py-2 border-b">
          <Badge>user</Badge>
        </CardHeader>
        <CardContent className="px-4 py-3">
          <pre className="whitespace-pre-wrap break-words text-sm">
            {message.content.map((c) => c.text).join("\n")}
          </pre>
        </CardContent>
      </Card>
    );
  }

  if (message.role === "tool") {
    return <ToolResultBlock message={message} />;
  }

  // assistant with tool calls
  if (message.tool_calls && message.tool_calls.length > 0) {
    return (
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-2">
          <Badge>assistant</Badge>
          <Badge variant="outline">tool calls</Badge>
        </div>
        {message.tool_calls.map((tc) => (
          <ToolCallBlock key={tc.id} toolCall={tc} />
        ))}
      </div>
    );
  }

  // assistant with text
  const text = getAssistantText(message);
  if (!text) return null;
  return (
    <Card className="py-0 gap-0">
      <CardHeader className="px-4 py-2 border-b">
        <Badge>assistant</Badge>
      </CardHeader>
      <CardContent className="px-4 py-3">
        <pre className="whitespace-pre-wrap break-words text-sm">{text}</pre>
      </CardContent>
    </Card>
  );
}

export function ConversationRenderer() {
  const [mode, setMode] = useState<"json" | "conversation">("conversation");

  return (
    <div className="border p-4 rounded-md">
      <div className="flex gap-2 mb-4">
        <Button
          variant={mode === "json" ? "default" : "secondary"}
          size="sm"
          onClick={() => setMode("json")}
        >
          JSON
        </Button>
        <Button
          variant={mode === "conversation" ? "default" : "secondary"}
          size="sm"
          onClick={() => setMode("conversation")}
        >
          Conversation
        </Button>
      </div>

      {mode === "json" ? (
        <Card className="py-0 gap-0">
          <CardContent className="p-4">
            <ScrollArea className="max-h-[600px]">
              <ScrollViewport>
                <pre className="text-sm font-mono whitespace-pre-wrap break-words">
                  {JSON.stringify(conversation, null, 2)}
                </pre>
              </ScrollViewport>
            </ScrollArea>
          </CardContent>
        </Card>
      ) : (
        <div className="flex flex-col gap-3">
          {conversation.messages.map((message, i) => (
            <MessageBlock key={i} message={message} />
          ))}
        </div>
      )}
    </div>
  );
}
