# ToolJet Cypress E2E Test

This project contains Cypress end-to-end tests for performing CRUD operations on an app in the ToolJet platform.

Dashboard URL: https://v3-lts-eetestsystem.tooljet.com/invitations/f8a9145d-3ca5-4f82-9d09-2f836e01ee5d/workspaces/80f711bf-2ba0-4c55-99b1-8ac4067d5f10?oid=d4fbb437-bdeb-4b54-81bf-00cf02f43148

✅ Instructions:
1. Login with invited credentials.
2. Copy the correct workspace URL from the dashboard (⚠️ Do not hardcode /app).
3. Automate:
  3.1. Create: New app (e.g., "Test App")
  3.2. Read: Validate it's listed
  3.3. Update: Rename the app
  3.4. Delete: Remove and confirm deletion
