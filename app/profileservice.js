"use strict";
function ProfileService($location) {
    const self = this;
    self.user = {
        name: "Grant Chirpus",
        contact: "grant@grandcircus.co",
        bio: "I am pretty cool. I a great job. I like to play Tetris. I am pretty ok at angularJS.",
        pic: "/images/agriculture-animal-baby-286580.jpg"
    };

    self.getUser = () => {
        return self.user;
    };

    self.setUser = (userUpdate) => {
        console.log(userUpdate);
        self.user = userUpdate;
        $location.path('/view');
    };

    self.loadEdit = () => {
        $location.path('/edit');
    };
}

angular.module("App").service("ProfileService", ProfileService);