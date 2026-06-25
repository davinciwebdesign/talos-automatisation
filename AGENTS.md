## Worktrees & saving work (IMPORTANT)

Vercel deploys the `main` branch. Any work that is not committed and pushed to
`main` will NOT appear on the live site.

The Claude **Desktop app** automatically creates a new git worktree under
`.claude/worktrees/<name>` on a branch `claude/<name>` for every session. This
has repeatedly caused edits to "disappear": work gets stranded on a worktree
branch that is never merged or pushed, while the dev server / Vercel use `main`.

To avoid this:

- **Prefer the CLI** (`claude` in a terminal at the repo root) over the Desktop
  app — the CLI does not auto-create worktrees, so you work directly on `main`.
- If you ARE in a worktree (the system prompt will say so), do not leave work
  uncommitted. Before finishing: merge/copy your changes onto `main`, commit,
  and `git push origin main` so Vercel and the dev server see them.
- Run only **one** `astro dev` server at a time, from the main checkout. Multiple
  servers across worktrees serve different code on different ports and cause
  confusion about which changes are live.
- Do **not** spawn subagents with `isolation: worktree` for this project.
- `.claude/` and `.astro/` are gitignored — never commit them.

## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)
