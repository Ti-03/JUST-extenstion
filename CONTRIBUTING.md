# Contributing to JUST Extension

Thank you for your interest in contributing to JUST Extension! 🎉

## 🎓 Important Note for Contributors

JUST Extension is specifically designed for students at Jordan University of Science and Technology (JUST). To effectively contribute to most features and bug fixes, you would need access to the JUST student portal to:

- Understand the portal's structure and behavior
- Test error scenarios in real-world conditions
- Verify that improvements work correctly with the actual backend

**Don't have access?** You can still contribute to:
- Documentation improvements
- Code quality enhancements
- General bug fixes that don't require portal testing
- Translations and localization
- UI/UX suggestions

## 🚀 How to Contribute

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
2. Open a new issue with the `enhancement` label
3. Describe the feature and its benefits
4. Provide mockups or examples if possible

### Code Contributions

#### Getting Started
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
- Reference issue numbers when applicable
- Example: `feat: Add exam schedule tracker (#24)`

Commit types:
- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting, etc.)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

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

## 🎯 Good First Issues
Look for issues labeled `good first issue` - these are great for newcomers!

## 💡 Areas for Contribution

### Features Needed
- Export schedule to calendar formats
- Grade notifications
- Attendance visualization
- Multi-language support
- Mobile optimization

### Technical Improvements
- Add TypeScript support
- Write automated tests
- Improve performance
- Better error handling

### Documentation
- Improve README
- Add code comments
- Create user guides
- Translate to Arabic

## 📝 Testing
Before submitting your PR:
1. Test on the main JUST pages
2. Test with dark theme enabled/disabled
3. Verify no console errors
4. Test on different screen sizes
5. Check that existing features still work

## 🔒 Privacy & Security
- Never commit credentials or personal data
- Respect user privacy in all features
- Follow Chrome extension security best practices
- Don't make unnecessary network requests

## 📄 License
By contributing, you agree that your contributions will be licensed under the same license as the project.

## ❓ Questions?
Feel free to ask questions in:
- [GitHub Discussions](../../discussions)
- Issue comments
- Pull request comments

## 🙏 Thank You!
Every contribution, no matter how small, is valued and appreciated!

---

**Happy Coding! 🚀**
