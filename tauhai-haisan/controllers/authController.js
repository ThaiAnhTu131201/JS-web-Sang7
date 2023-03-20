import userModel from "../models/userModel.js";
import { hashPassword} from "./../helpers/authHelper.js"

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
            error
        })
    }
}