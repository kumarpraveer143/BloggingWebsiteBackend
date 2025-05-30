import UserRepository from "./user.repository.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
class UserController {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async signup(req, res) {
    let bodyData = req.body; //email,password!
    let { password } = bodyData; //object destructuring!

    password = await bcrypt.hash(password, 10);
    bodyData.password = password;
    try {
      const user = await this.userRepository.signup(bodyData);
      res.status(200).json({ message: "User Registered Successfully", user });
    } catch (err) {
      console.log(err);
      res.status(500).json({ message: "Something went wrong!" });
    }
  }

  async login(req, res) {
    const email = req.body.email;
    const user = await this.userRepository.findUserByEmail(email);
    // console.log(user);
    // return;
    if (!user) {
      return res.json({ message: "This email is not registered!" });
    }
    const password = req.body.password;
    const isValid = await bcrypt.compare(password, user.password);

    if (!isValid) {
      return res.json({ message: "Invalid Crendials!" });
    }

    const payload = { userId: user.id, email: user.email };
    const token = jwt.sign(payload, process.env.secret_key, {
      expiresIn: "1h",
    });

    res.cookie("token", token);
    return res.json({ message: "Login Successfully!", token });
  }
}

export default UserController;
