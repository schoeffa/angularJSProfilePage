"use strict";
const edit = {
    templateUrl: `app/profileedit/edit.html`,
    controller: ["ProfileService", function(ProfileService) {
        const vm = this;
        vm.user = ProfileService.getUser();
        vm.updateProfile = (user) => {
            ProfileService.setUser(user);
        };
    }]
}

angular.module("App").component("edit", edit);