export const successResponse = (data, statusCode = 200) => ({
  statusCode,
  body: JSON.stringify({
    success: true,
    data
  }),
});

export const errorResponse = (error, statusCode = 500) => ({
  statusCode,
  body: JSON.stringify({
    success: false,
    error: error.message || error
  }),
});
