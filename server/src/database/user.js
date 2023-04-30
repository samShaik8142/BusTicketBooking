import { getConnection } from "./db.js";


export  function getUsers(id, callBkFn) {
    const connection = getConnection();
    connection.connect();
    connection.query(`Select * from users where ID=${id}`, function (error, result, fields){
        if (error) throw error;
        connection.end();
        callBkFn(result[0] ? result[0] : null);

    })
}

export function signIn(signObj, callBkFn){
    const connection= getConnection();
    connection.connect();
    connection.query(`select * from users where email=${signObj.email} and password=${signObj.password}`,function(error, result, fields){
        if(error) throw error;
        connection.end();
        callBkFn(result[0] ? true : false)
    })


}

export function singnUp(signObj,callBkFn){
    const connection= getConnection();
    connection.connect()
    connection.query(`insert into users (NAME , EMAIL, PASSWORD)values ('${signObj.name}', '${signObj.email}' ,'${signObj.password}') `,(error,result)=>{
        if(error) throw error;
        connection.end();
        callBkFn(result ? true : null)
    })
}

export function getData(signObj, callBkFn) {
    const connection = getConnection();
    connection.connect();
    connection.query(`SELECT * FROM USERS WHERE EMAIL='${signObj.email}' AND PASSWORD='${signObj.password}'`, (error, result) => {
        if (error) throw error;
        connection.end();
        callBkFn(result[0] ? result[0] : null);
    })
}

export function chkUser(signObj,callBkFn){
    const connection = getConnection();
    connection.connect();
    connection.query(`select *from users where EMAIl=${signObj.email}`,(error, result)=>{
        if(error) throw error;
        connection.end();
        callBkFn(result[0] ? result[0] : null)
    })
}




