import type { APIRoute } from "astro";
import { getCatalog } from "../lib/catalog";
export const GET: APIRoute = () =>
  new Response(JSON.stringify(getCatalog()), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "public, max-age=60",
    },
  });
