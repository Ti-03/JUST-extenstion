## Important Notes for Contributors

JUST Extension is specifically designed for students at Jordan University of Science and Technology (JUST). To effectively contribute, you would need access to [JUST student portal](https://services.just.edu.jo/stuservices/login.aspx).

**Don't have access?** You can still contribute to:
- Documentation improvements
- Code quality enhancements
- General bug fixes that don't require portal testing
- Translations and localization
- UI/UX suggestions


## How to Contribute

### Reporting Bugs
1. Check if the bug has already been reported in [Issues](../../issues)
2. If not, create a new issue with:
   - Clear title and description
   - Steps to reproduce
   - Expected vs actual behavior
   - Screenshots if applicable
   - Your Chrome version and OS

### Suggesting Features
1. Check [existing feature requests](../../issues?q=is%3Aissue+is%3Aopen+label%3Aenhancement)
2. Describe the feature and its benefits
3. Provide mockups or examples if possible


## Getting Started
1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/YOUR-USERNAME/just-extension.git
   cd just-extension
   ```
3. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

#### Development Setup
1. Open Chrome and navigate to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" and select the extension directory
4. Make your changes
5. Reload the extension to test

#### Code Style Guidelines
- Use meaningful variable and function names
- Add comments for complex logic
- Follow existing code structure
- Keep functions small and focused
- Test your changes thoroughly

#### Commit Guidelines
- Use clear, descriptive commit messages
- Example: `feat: Add exam schedule tracker`

- **feat:** New feature
- **fix:** Bug fix
- ** docs:** Documentation changes
- **style:** Code style changes (formatting, etc.)
- **refactor:** Code refactoring
- **test:** Adding tests
- **chore:** Maintenance tasks

#### Pull Request Process
1. Update your branch with the latest main:
   ```bash
   git fetch upstream
   git rebase upstream/main
   ```
2. Push your changes:
   ```bash
   git push origin feature/your-feature-name
   ```
3. Open a Pull Request with:
   - Clear description of changes
   - Reference to related issues
   - Screenshots/videos if UI changes
4. Wait for review and address feedback
5. Once approved, your PR will be merged!
