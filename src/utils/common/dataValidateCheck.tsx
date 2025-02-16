

const idExp1 = /^[A-Za-z0-9]{4,10}$/ ;
const lengthExp1 = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{0,15}$/;

export const InputTagIdValidate  = ( str : string ) : any => {

    return (new RegExp(idExp1)).test(str);
}

export const InputTagLengthValidate  = ( str : string ) : any => {

    return (new RegExp(lengthExp1)).test(str);
}
