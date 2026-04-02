
import { serve } from "https://deno.land/std@0.203.0/http/server.ts";
const html = await Deno.readTextFile("./index.html");
serve((req) => new Response(html, { headers: { "content-type": "text/html" } }));
