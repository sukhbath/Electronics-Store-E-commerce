var CustomError = require('../Utils/CustomError')

var validationError = function (error) {
    var message = '';
    for (const key in error.errors) {
        message += error.errors[key].message
    }
    myerror = new CustomError(message, 400)
    return myerror
}


var DuplicateError = function (error) {
    var text = "";
    var message;

    for (const key in error.keyValue) {
        text += key + ' '
    }

    if (text.includes('user product')) {
        message = 'Product is already in cart'
    } else if (text.includes('product user')) {
        message = 'You can not add more than one review'
    } else {
        message = `${text} Alredy exist`
    }

    myerror = new CustomError(message, 400)
    return myerror
}


var IndexError = function (error) {
    myerror = new CustomError(`Alredy exist`, 400)
    return myerror
}

module.exports = (error, request, response, next) => {
    console.log("error middlwwawre")
    var myerror;
    if (error.name == 'ValidationError') {
        myerror = validationError(error)
    } else if (error.code == 11000) {
        myerror = DuplicateError(error)
    } else {
        myerror = error
    }

    console.log(error)

    if (request.originalUrl.startsWith("/api")) {
        response.status(myerror.status || 500).send(myerror)
    } else {
        response.render("error", {
            error: myerror.message
        })
    }




}