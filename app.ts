import { serve } from "https://deno.land/std@0.145.0/http/mod.ts";

const s = serve((req) => {
  console.log(req)
  return new Response('hola')
}, { port: 8080 })