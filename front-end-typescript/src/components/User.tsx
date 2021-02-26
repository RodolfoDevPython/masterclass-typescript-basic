import React from "react";

interface IUser{
    name: string,
    email: string
}

interface Props {
    user: IUser
}

const User: React.FC<Props> = ({ user }) => { 

    return (
        <div>
            <strong>Nome: </strong> {user.name} <br />
            <strong>E-mail: </strong> {user.email} <br />
        </div>
    )
    
}

// PODERIA TER FEITO ASSIM SÓ QUE ISSO IRIA EXCLUIR O CHILDREEN QUE É UM PARAMENTRO NATIVO DE REACT
//<User>
// <ComponenteChildreen>
// </User>
// ISSO NÃO IRIA FUNCIONAR PRA ISSO VAMOS USAR COMO ESTÁ NO COMPONENTE 
// ASSIM USANDO React.FC dessa forma colocamos nossa interface e não excluimos a do react
// function User({ user } : Props) { 

//     return (
//         <div>
//             <strong>Nome: </strong> {user.name} <br />
//             <strong>E-mail: </strong> {user.email} <br />
//         </div>
//     )
// }
export default User;