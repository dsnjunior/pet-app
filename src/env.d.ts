/// <reference types="astro/client" />

/// <reference types="lucia" />
declare namespace App {
  interface Locals {
    auth: import("lucia").AuthRequest;
    session: import("lucia").Session | null;
  }
}

declare namespace Lucia {
  type Auth = import("./lib/auth").Auth;
  type DatabaseUserAttributes = {
    avatar_url: string | null;
    display_name: string | null;
    google_sub: string;
  };
  type DatabaseSessionAttributes = {};
}

interface ImportMetaEnv {
  readonly DATABASE_URL: string;
  readonly DATABASE_AUTH_TOKEN: string | undefined;

  readonly GOOGLE_CLIENT_ID: string;
  readonly GOOGLE_CLIENT_SECRET: string;
  readonly GOOGLE_REDIRECT_URI: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}