# Lambda Template

A comprehensive AWS Lambda Node.js template with common utilities and best practices built-in.

## Overview

This template provides a ready-to-use foundation for AWS Lambda functions written in Node.js (ES modules). It includes utilities for:

- Structured logging
- DynamoDB operations
- HTTP response formatting
- Error handling

## Features

- **ES6 Module Support** - Modern JavaScript syntax with `import/export`
- **Structured Logging** - JSON-formatted logs for better observability
- **DynamoDB Integration** - Helper functions for common DynamoDB operations
- **Standardized Responses** - Consistent success/error response format
- **Error Handling** - Centralized error handling and logging

## Project Structure

```
lambda-template/
├── index.js           # Main Lambda handler
├── utils/
│   ├── db.js          # DynamoDB utilities
│   ├── logger.js      # Logging utilities
│   └── response.js    # HTTP response utilities
└── package.json       # Dependencies and project info
```

## Installation

```bash
npm install
```

## Usage

The Lambda handler supports multiple actions based on the `action` parameter in the request body:

### Available Actions

1. **getData** - Fetch data from external API
2. **saveItem** - Save item to DynamoDB
3. **getItem** - Retrieve item from DynamoDB by ID

### Example Requests

```bash
# Save an item
curl -X POST -H "Content-Type: application/json" \
  -d '{"action": "saveItem", "id": "123", "name": "Example Item"}' \
  YOUR_LAMBDA_URL

# Get an item
curl -X POST -H "Content-Type: application/json" \
  -d '{"action": "getItem", "id": "123"}' \
  YOUR_LAMBDA_URL
```

## Environment Variables

- `TABLE_NAME` - DynamoDB table name (default: `myTable`)

## Dependencies

- `axios` - HTTP client for external API calls
- `aws-sdk` - AWS SDK for JavaScript

## Response Format

### Success Response
```json
{
  "success": true,
  "data": { ... }
}
```

### Error Response
```json
{
  "success": false,
  "error": "Error message"
}
```

## Logging

The template uses structured logging with JSON format:

- **Info Logs**: `logInfo(message, data)`
- **Error Logs**: `logError(message, error)`

## Development

1. Modify the handler logic in `index.js`
2. Add custom utilities in the `utils/` directory
3. Update dependencies in `package.json`

## Deployment

Deploy to AWS Lambda using your preferred method:
- AWS CLI
- AWS Serverless Application Model (SAM)
- AWS CDK
- Serverless Framework

Make sure to set the `TABLE_NAME` environment variable in your Lambda configuration.