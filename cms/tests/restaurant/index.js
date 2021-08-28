const request = require('supertest');

// TODO: allow puglic user to access the restaurant details
describe('Restaurant', () => {
  let jwt = null;
  const mockRestaurantData = {
    query: `mutation AddNewFood ($input: createFoodInput){
      createFood(input: $input) {
        food {
          name
          description
        }
      }
    }`,
    variables: {
      input: {
        data: {
          name: 'tomyam',
          description: 'the most delicious food in the town',
        },
      },
    },
  };

  const userData = {
    query: `mutation {
      register(input: { username: "anc", email: "anc@anc.com", password: "whatever" }) {
        jwt
        user {
          username
          email
        }
      }
    }`,
  };

  const resp = {
    data: {
      createFood: {
        food: {
          name: 'tomyam',
          description: 'the most delicious food in the town',
        },
      },
    },
  };

  beforeAll(async () => {
    jwt = await request(strapi.server) // app server is an instance of Class: http.Server
      .post('/graphql')
      .send(userData)
      .expect(200) // Expect response http code 200
      .then(res => res.body.data.register.jwt);
  });

  it('succeeded if create a restuarant', async () => {
    await request(strapi.server) // app server is an instance of Class: http.Server
      .post('/graphql')
      .set('Authorization', `Bearer ${jwt}`)
      .send(mockRestaurantData)
      .expect(200) // Expect response http code 200
      .then(data => {
        expect(data.text).toBe(JSON.stringify(resp)); // expect the response text
      });
  });
});
