export default class Home {
    constructor(fxService) {
        this.$fxService = fxService;
        this.fxPanelData = [];

        this._getFxPanelData();
    }

    _getFxPanelData() {
        this.$fxService.getFxPanelData().then(
            result => {
                this.fxPanelData = result.data;
            },
            err => {
                // TODO: handle error here
            }
        );
    }
}

Home.inject = ['fxService'];
