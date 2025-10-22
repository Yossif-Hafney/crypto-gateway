export async function reqApi<T>(
  path: string,
  options?: RequestInit
): Promise<{ ok: boolean; data?: T; error?: string }> {
  try {
    // Ensure full absolute URL

    // Determine base URL: prefer NEXT_PUBLIC_API_URL, else use window.location.origin (client), else localhost fallback (server)
    let baseUrl =
      process.env.NEXT_PUBLIC_API_URL || process.env.NEXT_PUBLIC_SUB_API_URL;
    if (baseUrl) {
      baseUrl = baseUrl.replace(/\/$/, "");
    } else if (typeof window !== "undefined" && window.location.origin) {
      baseUrl = window.location.origin;
    } else {
      baseUrl = "http://localhost:3000";
    }

    // Ensure path starts with a single slash, but avoid double slashes
    let url = baseUrl;
    if (path) {
      url += path.startsWith("/") ? path : `/${path}`;
    }

    const res = await fetch(url, {
      ...options,
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
        ...(options?.headers || {}),
      },
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      return {
        ok: false,
        error: data.error || "API request failed",
      };
    }

    return { ok: true, data };
  } catch (err: unknown) {
    console.error("❌ reqApi Error:", err);
    return { ok: false, error: "Network or server error" };
  }
}
