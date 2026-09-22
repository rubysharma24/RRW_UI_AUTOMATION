import { APIRequestContext, expect } from '@playwright/test';


const API_BASE_URL = 'https://stagingapi.roadreadywheels.com';

interface OrderAttributes {
  number: string;
  email: string;
  item_total: string;
  tax_total: string;
  ship_total: string;
  promo_total: string;
  total: string;
  state: string;
}

interface OrderApiResponse {
  data: {
    attributes: OrderAttributes;
  };
}


export async function getOAuthToken(
  request: APIRequestContext,
  email: string,
  password: string
): Promise<string> {
  const response = await request.post(`${API_BASE_URL}/spree_oauth/token`, {
    data: {
      grant_type: 'password',
      username: email,
      password: password,
    },
  });

  expect(
    response.ok(),
    `OAuth token request failed: ${response.status()} ${await response.text()}`
  ).toBeTruthy();

  const body = await response.json();
  return body.access_token as string;
}

export async function getOrderByNumber(
  request: APIRequestContext,
  orderNumber: string,
  accessToken: string
): Promise<OrderAttributes> {
  const response = await request.get(
    `${API_BASE_URL}/api/v2/storefront/account/orders/${orderNumber}`,
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  expect(
    response.ok(),
    `Order API request failed: ${response.status()} ${await response.text()}`
  ).toBeTruthy();

  const body = (await response.json()) as OrderApiResponse;
  return body.data.attributes;
}