import assert from "node:assert/strict";
import test from "node:test";

async function render(pathname = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${pathname}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the SDZ landing page", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>SDZ Modding — DayZ development built to last<\/title>/i);
  assert.match(html, /Built for the/);
  assert.match(html, /long haul\./);
  assert.match(html, /href="\/licensing"/);
  assert.match(html, /href="\/legal\/privacy"/);
  assert.match(html, /© 2026 SDZ Modding/);
  assert.doesNotMatch(html, /codex-preview|chatgpt\.site|OpenAI Sites/i);
});

test("serves the public licensing and legal routes", async () => {
  for (const pathname of ["/licensing", "/legal", "/legal/eula"]) {
    const response = await render(pathname);
    assert.equal(response.status, 200, `${pathname} should render`);
    assert.match(
      response.headers.get("content-type") ?? "",
      /^text\/html\b/i,
      `${pathname} should return HTML`,
    );
  }
});
