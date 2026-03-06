# Install Flow Details

ClawInstaller's setup wizard has 4 steps, all fully graphical.

## Step 1: Environment Check (Preflight)

The wizard automatically checks 5 items:

| Check Item | Description | Auto-Fix |
|------------|-------------|----------|
| macOS Version | Requires 14.0+ | No (manual upgrade) |
| Node.js | Requires 22.0+ | Yes (one-click install) |
| Package Manager | npm/pnpm/yarn/bun | Yes (one-click install pnpm) |
| Disk Space | At least 500 MB | No (manual cleanup) |
| Network | npm registry access | No (check your network) |

::: tip Recommendation
We recommend **pnpm** as your package manager — it's fast and saves disk space.
:::

## Step 2: Install OpenClaw

After clicking "Start Installation":

1. Globally installs `openclaw` using your chosen package manager
2. Runs `openclaw setup` to initialize configuration
3. Starts the OpenClaw Gateway service

The entire process takes about 1-3 minutes, depending on network speed.

## Step 3: Channel Setup

Optional — configure which channels your Agents use to communicate with you.

## Step 4: Done!

After installation, you'll see:
- Installation duration
- OpenClaw version
- Share card with QR Code (share to Threads / X)

You can go directly to the control panel to manage your Agents.
