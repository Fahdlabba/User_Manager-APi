const nodemailer=require('nodemailer')

const sendmail=(name,mail,code)=> {
    let transporter=nodemailer.createTransport({
        service:'gmail',
        auth:{
            user:'testapinode12@gmail.com',
            pass:'kfbrayzzxoijtqrn'
        }
    })
    let mailOptions = {
        from: 'testapinode12@gmail.com',
        to: mail,
        subject: 'Verification',
        text: 'Welcome '+name+' to our application \n Voici votre code de verification '+code+'\n Developer : Fahd Labba ',
    }
    transporter.sendMail(mailOptions,(error,info)=>{
        if(error){
            console.log(error)
        }else{
            console.log('Email sent : '+info.response)
        }
    })
}


module.exports=sendmail
