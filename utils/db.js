import AWS from 'aws-sdk';

const dynamo = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = process.env.TABLE_NAME || 'myTable';

export const putItem = async (item) => {
  await dynamo.put({
    TableName: TABLE_NAME,
    Item: item
  }).promise();
};

export const getItem = async (id) => {
  const result = await dynamo.get({
    TableName: TABLE_NAME,
    Key: { id }
  }).promise();
  return result.Item;
};
