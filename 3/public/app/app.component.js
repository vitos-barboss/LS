export const AppComponent = {
  template: '<h1>Hello</h1>',

  controller: class AppComponent {
    constructor($q, AppService) {
      this.$q = $q;
      this.appService = AppService;
    }

    $onInit() {
      const promises = [
        this.appService.getOne(),
        this.appService.getTwo()
      ];
      this.$q.all(promises).then( values => {
        console.log(values);
        if (values) {
          this.appService.getThree()
            .then(res => {
              console.log(res)
            });
        }
      });
    }
  }
}
