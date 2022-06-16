errorMessage  = (data) => {

    console.log("############################################## : ", data)
    let response = '';

   return response = (data.msg.code === 11000 && data.msg.keyPattern.email) ? 'Email already exist!' : ''
}

module.exports = { errorMessage };