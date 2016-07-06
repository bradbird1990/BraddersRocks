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
            this.portfolio = response.data;
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
