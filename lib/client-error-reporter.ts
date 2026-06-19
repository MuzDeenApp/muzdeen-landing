const apiBaseUrl = process.env.NEXT_PUBLIC_API_URL || "";

export async function reportClientError(error: unknown, extra: Record<string, unknown> = {}) {
  if (!apiBaseUrl) return;
  const err = error instanceof Error ? error : new Error(String(error));
  try {
    await fetch(`${apiBaseUrl}/api/client-errors`, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({
        source: "landing",
        name: err.name,
        message: err.message,
        stack: err.stack,
        route: typeof window !== "undefined" ? window.location.pathname : undefined,
        release: process.env.NEXT_PUBLIC_RELEASE,
        extra,
      }),
    });
  } catch {
    // Reporting must never break public pages.
  }
}
