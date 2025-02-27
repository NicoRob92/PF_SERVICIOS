const decoder = require("jwt-decode");
const User = require("../../Models/User");
const GoogleAuth = async (req, res) => {
  try {
    let token
    if (req.body.credential) {
      token = req.body.credential
    }
    else {
      token = req.query.token
    }
    const data = decoder(token);
    console.log(data, "asdasdasd");
    const user = await User.findOne({
      where: {
        email: data.email
      }
    })
    if (user) {
      return res.status(200).json({
        msg: "user logged",
        token: token,
        id: user.id,
        username: user.username,
        first_name: user.first_name,
        last_name: user.last_name,
        rol: user.role,
      });

    }

    const dat = {
      username: data.email,
      email: data.email,
      first_name: data.given_name,
      last_name: data.family_name,
      image: data.picture,
      token: token,
    }
    await User.create(dat)
    return res.status(200).json(dat)
  } catch (error) {
    return res.status(400).json({ error: error })

  }

}


module.exports = { GoogleAuth };