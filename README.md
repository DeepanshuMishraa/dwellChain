
# DwellChain

A platform for booking rooms using crypto


## How to Contribute?

Follow these steps to set up and run the project locally:

1. Fork the repository

a) Fork the repository to your GitHub by creating a new fork.

b) Clone the Repository:

```bash
  git clone https://github.com/Tufailahmed-Bargir/dwellChain.git
```

2. Go to the project directory:

```bash
  cd dwellChain
```

3. Install dependencies

#### a) if not installed pnpm globally
```bash
  npm install -g pnpm
```

Check version to know if installed
```bash
  pnpm --version
```

then, install dependencies
```bash
  pnpm install
```

4. Start the server

```bash
  pnpm run dev
```

5. Create a branch with the branch name similar to issue name.

```bash
  git checkout -b your-branch-name
```

6. After successfully contribution

a. Stage and commit changes to the branch
```bash
  git add <all the files>
  git commit -m "first commit"
```

b. Push the changes to the remote repository
```bash
  git push origin your-branch-name
```

c. Merge the add-readme branch into main

After pushing, you can create a pull request to merge the "your-branch" branch into main.
```bash
  git checkout main
  git pull origin main  # Ensure your local main is up to date
  git merge <your-branch-name>
```
d. Push the merge to the main branch
```bash
  git push origin main
```

That’s it! You have successfully merged your contribution into the main branch. 

Thanks a lot!!!

