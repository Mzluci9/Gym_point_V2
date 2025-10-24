// This Supabase Edge Function proxies chat requests to the OpenAI API (or compatible)
// It must run on Deno (Supabase Functions). Do NOT store your API key in client-side code.
// Set the secret OPENAI_API_KEY (or AI_API_KEY) in your Supabase project environment.
// @ts-nocheck
import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface ChatRequest {
  // Either a single message string or an array of messages with roles
  message?: string;
  messages?: Array<{ role: string; content: string }>;
}

serve(async (req: Request) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });

  try {
    const { message, messages }: ChatRequest = await req.json();
    if (!message && (!messages || messages.length === 0)) {
      return new Response(JSON.stringify({ error: "Missing message or messages" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const apiKey = Deno.env.get("OPENAI_API_KEY") || Deno.env.get("AI_API_KEY");
    if (!apiKey) return new Response(JSON.stringify({ error: "API key not configured" }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });

    // Build request to OpenAI Chat Completions
    // Start with a system prompt to give context
    const openaiMessages: Array<{ role: string; content: string }> = [
      { role: "system", content: "You are a helpful assistant for Gym Point. Answer concisely and helpfully." },
    ];

    if (Array.isArray(messages) && messages.length) {
      // Append provided conversation history
      for (const m of messages) {
        // Only accept user or assistant roles
        const role = m.role === "assistant" ? "assistant" : "user";
        openaiMessages.push({ role, content: String(m.content) });
      }
    } else if (message) {
      openaiMessages.push({ role: "user", content: message });
    }

    const payload = {
      model: "gpt-3.5-turbo",
      messages: openaiMessages,
      max_tokens: 600,
      temperature: 0.6,
    };

    const resp = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`,
      },
      body: JSON.stringify(payload),
    });

    if (!resp.ok) {
      const text = await resp.text();
      return new Response(JSON.stringify({ error: `OpenAI error: ${resp.status} ${text}` }), { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const data = await resp.json();
    const assistant = data.choices?.[0]?.message?.content ?? "";

    return new Response(JSON.stringify({ reply: assistant }), {
      status: 200,
      headers: { "Content-Type": "application/json", ...corsHeaders },
    });
  } catch (err: any) {
    console.error("ai-assistant error", err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
