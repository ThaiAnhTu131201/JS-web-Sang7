import userModel from "../models/userModel.js";
import { comparePassword, hashPassword} from "./../helpers/authHelper.js";
import JWT from "jsonwebtoken";

export const registerController = async (req,res) => {
    try{
        const{name,email,password,phone,address} =req.body
        //validations
        if(!name){
            return res.send({error:'Yêu cầu nhập name!!!'});
        }
        if(!email){
            return res.send({error:'Yêu cầu nhập email!!!'});
        }
        if(!password){
            return res.send({error:'Yêu cầu nhập password!!!'});
        }
        if(!phone){
            return res.send({error:'Yêu cầu nhập phone!!!'});
        }
        if(!address){
            return res.send({error:'Yêu cầu nhập address!!!'});
        }

        //check user
        const existingUser = await userModel.findOne({email});
        //exisiting user
        if(existingUser){
            return res.status(200).send({
                success: true,
                message: "Đã đăng ký rùi, xin vui lòng đăng nhập!!"
            })
        }
        //register user
        const hashedPassword = await hashPassword(password)
        //save
        const user = await new userModel({name,email,phone,address,password:hashedPassword}).save();

        res.status(201).send({
            success:true,
            message:'Đăng ký thành công',
            user
        })

    }catch(error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Lỗi ở phần registerController',
            error,
        })
    }
}

//POST LOGIN
export const loginController = async(req,res) => {
    try{
        const {email,password} = req.body
        //validation
        if(!email || !password){
            return res.status(404).send({
                success:false,
                message:'Email hoặc mật khẩu sai!! vui lòng nhập lại',
            });
        }
        //check user
        const user = await userModel.findOne({email});
        if(!user){
            return res.status(404).send({
                success:false,
                message:'Email chưa được đăng ký, vui lòng đăng ký!!' 
            })
        }
        //check password
        const match =  await comparePassword(password,user.password);
        
        if(!match){
            return res.status(200).send({
                success:false,
                message:'Mật khẩu không đúng vui lòng nhập lại!! '
            })
        }
        //token
        const token = JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "5m",
          });
        res.status(200).send({
            success:true,
            message:'Đăng nhập thành công',
            user:{
                _id: user._id,
                name:user.name,
                email:user.email,
                phone:user.phone,
                address:user.address
            },
            token,
        })
    }catch (error){
        console.log(error);
        res.status(500).send({
            success:false,
            message:'Lỗi phần loginController',
            error,
        })
    }
}