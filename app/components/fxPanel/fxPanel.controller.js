require('./fxPanel.template.scss');

export default class fxPanel {

    constructor(fxService, $scope, $interval) {
        this.$interval = $interval;
        this.$scope = $scope;
        this.$fxService = fxService;

        this.growth = false;
        this.interval = null;

        this.$scope.$on('$destroy', () => {
            this.$interval.cancel(this.interval)
        });
    }

    $onInit() {
        if(this.data) {
            this._initializeData();

            this.interval = this.$interval(
                () => {
                    let prevPrice = this.data.buy;
                    this.data.buy = this.$fxService.getBuyPrice(this.data.buy);
                    this.growth = prevPrice < this.data.buy ? true : false;
                },
                1000
            );
        }
    }

    $onChange() {
        if(this.data)
            this._initializeData();
    }

    _initializeData() {
        this.currency = this.data.pair.split(" ");
    }
}

fxPanel.$inject = ['fxService', '$scope', '$interval'];
