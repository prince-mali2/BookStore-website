import * as cartService from '../services/cart.service';
import HttpStatus from 'http-status-codes';

export const getAll= async(req,res)=>{
  const data = await cartService.getAll(req.body);
  res.status(HttpStatus.OK).json({
    code: HttpStatus.OK,
    data: data.data,
    message: "success"
  });
}
export const add = async (req, res) => {
  const data = await cartService.add(req.params._id, req.body);
  res.status(data.code).json({
    code: data.code,
    data: data.data,
    message: data.message
  });
};

export const remove = async (req, res) => {
  const data = await cartService.remove(req.body.userId, req.params._id);
  res.status(data.code).json({
    code: data.code,
    data: data.data,
    message: data.message
  });
};

export const isPurchased = async (req, res) => {
  console.log(req);
  const data = await cartService.isPurchased(req.body.userId, req.params._id);
  res.status(data.code).json({
    code: data.code,
    data: data.data,
    message: data.message
  });
};
