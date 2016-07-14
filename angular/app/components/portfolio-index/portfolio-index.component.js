class PortfolioIndexController {
    constructor(API, ToastService, $window) {
        'ngInject';

        this.API = API;
        this.ToastService = ToastService;
        this.$window = $window;

        this.portfolio = [];
    }

    $onInit() {
        this.getPortfolio();
    }

    getPortfolio() {
        this.API.all('portfolio.json').customGET().then((response) => {
            /*for (var i = 0; i < 10; i++) {
             this.portfolio.push(angular.copy(response.data[0]));
             }
             for (var i = 0; i < 10; i++) {
             this.portfolio.push(angular.copy(response.data[1]));
             }*/

            this.portfolio = response.data;
            
            this.portfolio.sort(function(){
                return .5 - Math.random();
            });
        }, () => {
            this.ToastService.genericError();
        });
    }

    getLinkTarget(item) {
        /*if (item.is_link) {
         this.$window.open(item.link_address);
         }*/

        this.$window.open(item.link_address);
    }

    randomizeOrder() {
        return 0.5 - Math.random();
    }
}

export const PortfolioIndexComponent = {
    templateUrl: './views/app/components/portfolio-index/portfolio-index.html',
    controller: PortfolioIndexController,
    controllerAs: 'vm',
    bindings: {}
};
