"use client";

import { useEffect } from "react";
import { reportClientError } from "@/lib/client-error-reporter";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    reportClientError(error, { digest: error.digest });
  }, [error]);

  return (
    <html lang="fr">
      <body>
        <main style={{ minHeight: "100vh", display: "grid", placeItems: "center", padding: 24 }}>
          <div style={{ maxWidth: 420 }}>
            <h1>Erreur inattendue</h1>
            <p>Merci de réessayer dans un instant.</p>
            <button onClick={reset}>Réessayer</button>
          </div>
        </main>
      </body>
    </html>
  );
}
