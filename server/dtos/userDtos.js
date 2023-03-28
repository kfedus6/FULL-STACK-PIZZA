module.exports = class UserDto {
    username;
    email;
    id;
    admin;
    phone;
    isActivated;

    constructor(model) {
        this.username = model.username;
        this.email = model.email;
        this.id = model._id;
        this.admin = model.admin;
        this.phone = model.phone;
        this.isActivated = model.isActivated;
    }
}