import { StatusCodes } from 'http-status-codes';
import User from '../models/user.js';
import { BadRequestError } from '../errors/index.js';

const register = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    throw new BadRequestError('please provide all values');
  }

  const userAlreadyExists = await User.findOne({ email });
  if (userAlreadyExists) {
    throw new BadRequestError('Email already exists');
  }
  const user = await User.create({ name, email, password });
  const token = user.createJWT();
  res.status(StatusCodes.OK).json({ user:{email:user.email,lastName:user.lastName,location:user.location,name:user.name},token,location: user.location });
};

const login = async (req, res) => {
  res.send('login user');
};

const updateUser = async (req, res) => {
  res.send('UpdateUser');
  const user = await User.findOne({ _id: req.user.userId });
};

export { register, login, updateUser };
