export class AppService {
  constructor($http) {
    this.$http = $http;
  }

  getOne() {
    return this.$http({
      method: 'GET',
      url: 'http://localhost:3000/get1'
    });
  }

  getTwo() {
    return this.$http({
      method: 'GET',
      url: 'http://localhost:3000/get2'
    });
  }

  getThree() {
    return this.$http({
      method: 'GET',
      url: 'http://localhost:3000/get3'
    });
  }
}
