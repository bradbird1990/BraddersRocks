class PortfolioIndexController {
    constructor(API, ToastService) {
        'ngInject';

        this.API = API;
        this.ToastService = ToastService;

        this.portfolio = [];
    }

    $onInit() {
        this.getPortfolio();
    }

    getPortfolio() {
        this.API.all('portfolio.json').customGET().then((response) => {
            for (var i = 0; i < 20; i++) {
                this.portfolio.push(angular.copy(response.data[0]));
            }
        }, () => {
            this.ToastService.genericError();
        });
    }
}

export const PortfolioIndexComponent = {
    templateUrl: './views/app/components/portfolio-index/portfolio-index.html',
    controller: PortfolioIndexController,
    controllerAs: 'vm',
    bindings: {}
};
