import { mongooseConnect } from '@/lib/mongoose';
import Users from '@/models/User';
import { hash } from 'bcryptjs';

export default async function handler(req, res) {
  try {
    await mongooseConnect();
  } catch (error) {
    return res.json({ error: "Connection Failed...!" });
  }

  // Only POST method is accepted
  if (req.method === 'POST') {
    if (!req.body) {
      return res.status(404).json({ error: "Don't have form data...!" });
    }

    const { firstName, lastName, username, email, password } = req.body;

    try {
      // Check for duplicate users
      const checkexisting = await Users.findOne({ email });
      if (checkexisting) {
        return res.status(422).json({ message: "User Already Exists...!" });
      }

      // Hash password
      const hashedPassword = await hash(password, 12);
      const newUser = new Users({
        firstName,
        lastName,
        username,
        email,
        password: hashedPassword
      });

      const savedUser = await newUser.save();

      res.status(201).json({ status: true, user: savedUser });
    } catch (error) {
      return res.status(404).json({ error });
    }
  } else {
    res.status(500).json({ message: "HTTP method not valid, only POST is accepted" });
  }
}
