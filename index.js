import { successResponse, errorResponse } from './utils/response.js';
import { logInfo, logError } from './utils/logger.js';
import { getItem, putItem } from './utils/db.js';
import axios from 'axios';

/**
 * AWS Lambda handler
 * @param {object} event - The event triggering the Lambda
 * @param {object} context - Context object
 */
export const handler = async (event, context) => {
  try {
    logInfo("Lambda invoked", { event });

    // Example: read query params or body
    const body = event.body ? JSON.parse(event.body) : {};
    const action = body.action || "default";

    switch (action) {
      case "getData":
        // Example: Fetch from API
        const apiResponse = await axios.get("https://api.example.com/data");
        return successResponse(apiResponse.data);

      case "saveItem":
        // Example: Save to DynamoDB
        await putItem({ id: body.id, name: body.name });
        return successResponse({ message: "Item saved successfully" });

      case "getItem":
        // Example: Get from DynamoDB
        const item = await getItem(body.id);
        return successResponse(item);

      default:
        return successResponse({ message: "No valid action provided" });
    }
  } catch (err) {
    logError("Error in Lambda", err);
    return errorResponse(err);
  }
};
