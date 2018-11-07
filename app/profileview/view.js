"use strict";
const view = {
    templateUrl: `app/profileview/view.html`,
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.user = ProfileService.getUser();
        vm.loadEdit = () => {
            ProfileService.loadEdit();
        };
    }]
};

angular.module("App").component("view", view);