#!/bin/bash
# Script to create GitHub issues for JUST Extension

# Feature Enhancements
gh issue create --title "Export course schedule to iCal/Google Calendar" \
  --body "Allow students to sync their course schedule with external calendar applications" \
  --label "enhancement"

gh issue create --title "Add exam schedule tracker with countdown" \
  --body "Display upcoming exams with countdown timers to help students prepare" \
  --label "enhancement"

gh issue create --title "Grade notification system" \
  --body "Implement notifications when new grades are posted to the system" \
  --label "enhancement"

gh issue create --title "Course availability notifier" \
  --body "Monitor course registration and notify when seats become available" \
  --label "enhancement"

gh issue create --title "Multi-language support (English interface)" \
  --body "Add English language option for international students" \
  --label "enhancement,i18n"

gh issue create --title "Attendance tracker visualization" \
  --body "Create graphs and charts to visualize attendance percentages over time" \
  --label "enhancement,visualization"

gh issue create --title "Study group finder" \
  --body "Feature to help students find others taking the same courses to form study groups" \
  --label "enhancement,social"

gh issue create --title "Historical GPA trends and statistics" \
  --body "Show GPA progression over semesters with charts and predictions" \
  --label "enhancement,visualization"

# Technical Improvements
gh issue create --title "Add automated testing suite" \
  --body "Implement unit and integration tests for core functionality" \
  --label "testing,good first issue"

gh issue create --title "Migrate to TypeScript" \
  --body "Convert JavaScript codebase to TypeScript for better type safety" \
  --label "refactor,good first issue"

gh issue create --title "Improve error handling and user feedback" \
  --body "Better error messages and handling for network failures and edge cases" \
  --label "bug,enhancement"

gh issue create --title "Optimize extension bundle size" \
  --body "Reduce extension size through code splitting and optimization" \
  --label "performance"

# Bug Reports (Templates)
gh issue create --title "Dark theme compatibility issues on certain pages" \
  --body "Some pages don't render correctly in dark mode. Need to audit all pages." \
  --label "bug,ui"

# Documentation
gh issue create --title "Add CONTRIBUTING.md" \
  --body "Create contribution guidelines for new contributors" \
  --label "documentation,good first issue"

gh issue create --title "Create Arabic README version" \
  --body "Add README_AR.md for Arabic-speaking contributors and users" \
  --label "documentation,i18n"

gh issue create --title "Document JUST API endpoints" \
  --body "Create documentation listing all JUST services endpoints used by the extension" \
  --label "documentation"

echo "✅ All issues created successfully!"
