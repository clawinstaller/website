# Your Three Agents

After installing with ClawInstaller, you'll have three AI Agents, each with their own specialty.

## Luna — Manager

**Role**: AI Butler / Task Coordinator

Luna is your default agent, responsible for:
- Managing schedules and to-do lists
- Automatically delegating tasks to other agents
- Answering common questions
- Integrating messages from all channels

```bash
# Chat with Luna
openclaw chat
```

## Shuri — Researcher

**Role**: Research Analyst / QA Tester

Shuri specializes in deep analysis:
- Searching and organizing information
- Writing research reports
- Code review
- QA testing and bug reporting

```bash
# Assign a task to Shuri
openclaw agent shuri "Analyze the performance bottleneck of this API"
```

## Friday — Developer

**Role**: Engineer / Automation

Friday handles all technical work:
- Writing code
- Debugging and troubleshooting
- CI/CD deployment automation
- Architecture recommendations

```bash
# Have Friday write code
openclaw agent friday "Build an Express API with user CRUD"
```

## Agent Collaboration

The three agents can communicate and work together:

```bash
# Luna will automatically delegate work
openclaw chat "I want to build a blog website"
# Luna plans the architecture, assigns Friday to code, Shuri to QA
```

## Next Steps

- [Channel Setup →](/en/guide/channels)
- [System Monitor →](/en/guide/monitor)
