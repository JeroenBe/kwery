Template.loading.destroyed = function () {
    if (this.loading) {
        this.loading.finish();
    }
};