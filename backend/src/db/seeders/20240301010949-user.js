module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert('Users', [
      {
        name: 'José Alexandre',
        email: 'trybe@trybe.com',
        password: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRyeWJlQHRyeWJlLmNvbSIsInBhc3N3b3JkIjoiam9zZVRyeWJlQDEyMyJ9.7Bdxgth2oFw7P37HHOg6cXjaTpatWCnj-ADiKHzdv6U',
        createdAt: new Date(),
        updatedAt: new Date()
        // senha: joseTrybe@123
      },
      {
        name: 'Trybe dev',
        email: 'devTrybe@trybe.com',
        password: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiVHJ5YmUgZGV2IiwiZW1haWwiOiJkZXZUcnliZUB0cnliZS5jb20iLCJwYXNzd29yZCI6InRyeWJlRGV2QDEyMyJ9.f5DEXqBUbWPUW7BZUGr1zXEAqqF-zgcp9oUHqu3YRwE',
        createdAt: new Date(),
        updatedAt: new Date()
        // senha: trybeDev@123
      },
    ], {});
  },
  down: async (queryInterface) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};