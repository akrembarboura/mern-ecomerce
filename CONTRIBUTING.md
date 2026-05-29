#  Contributing to Welcome to Docker

Thank you for your interest in contributing! This guide will walk you through everything you need to know to make a successful pull request.

---

##  Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Pull Request Process](#pull-request-process)
- [Commit Message Convention](#commit-message-convention)
- [Reporting Issues](#reporting-issues)

---

##  Code of Conduct

By participating in this project, you agree to be respectful, constructive, and welcoming to everyone. We're all here to learn.

---

##  Getting Started

### 1. Fork the repository

Click the **Fork** button at the top right of this page to create your own copy.

### 2. Clone your fork

```bash
git clone https://github.com/YOUR_USERNAME/welcome-to-docker.git
cd welcome-to-docker
```

### 3. Add the upstream remote

```bash
git remote add upstream https://github.com/ORIGINAL_OWNER/welcome-to-docker.git
```

### 4. Keep your fork in sync (before starting new work)

```bash
git fetch upstream
git checkout main
git merge upstream/main
```

---

##  How to Contribute

### Create a feature branch

Never work directly on `main`. Always branch off it:

```bash
git checkout -b feature/your-feature-name
```

**Branch naming convention:**

| Type       | Format                        | Example                     |
|------------|-------------------------------|-----------------------------|
| Feature    | `feature/short-description`   | `feature/add-compose-example` |
| Bug fix    | `fix/short-description`       | `fix/port-binding-issue`      |
| Docs       | `docs/short-description`      | `docs/update-readme`          |

### Make your changes

- Keep changes focused and minimal — one concern per PR
- Test your changes locally using Docker before pushing

```bash
docker build -t welcome-to-docker .
docker run -d -p 8088:3000 --name welcome-to-docker welcome-to-docker
```

### Stage and commit

```bash
git add .
git commit -m "feat: add docker-compose example"
```

### Push to your fork

```bash
git push origin feature/your-feature-name
```

---

## Pull Request Process

1. Go to your fork on GitHub and click **Compare & pull request**
2. Fill in the PR template:
   - **What** does this change do?
   - **Why** is it needed?
   - **How** was it tested?
3. Link any related issues using `Closes #issue-number`
4. Wait for a review — we aim to respond within 48 hours
5. Address any requested changes, then push updates to the same branch

>  PRs that don't build successfully or break existing functionality will not be merged.

---

##  Commit Message Convention

We follow the [Conventional Commits](https://www.conventionalcommits.org/) standard:

```
<type>: <short summary>
```

| Type     | When to use                              |
|----------|------------------------------------------|
| `feat`   | A new feature or example                 |
| `fix`    | A bug fix                                |
| `docs`   | Documentation changes only               |
| `chore`  | Maintenance, dependencies, config        |
| `refactor` | Code change that doesn't fix or add   |

**Examples:**

```bash
git commit -m "feat: add multi-stage build example"
git commit -m "fix: correct exposed port in Dockerfile"
git commit -m "docs: clarify quick start instructions"
```

---

##  Reporting Issues

Found a bug or have a suggestion? [Open an issue](../../issues/new) and include:

- A clear title and description
- Steps to reproduce (if it's a bug)
- Your OS and Docker version (`docker --version`)
- Any relevant error messages or logs

---

Thank you for helping make this project better! 