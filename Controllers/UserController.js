var UserModel = require('./../Models/UsersModel')
var CatchError = require('./../Utils/CatchError')
var CustomError = require('./../Utils/CustomError')
var CommonController = require('./CommonController')

exports.createUser = CommonController.createDocument(UserModel)
exports.getOneUser = CommonController.getOneDocument(UserModel)
exports.getAllUsers = CommonController.getAllDocument(UserModel)
exports.updateUser = CommonController.updateDocument(UserModel)
exports.deleteUser = CommonController.deleteDocument(UserModel)
exports.getMe = CommonController.getOneDocument(UserModel)

exports.setUserId = CatchError(async function (request, response, next) {
    request.params.id = request.user.id
    next()
})