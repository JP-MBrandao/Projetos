import chalk from "chalk";

function extraiLink(arrLinks){
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join());
}


export default async function listaValidada (listaDeLinks){
    const links = extraiLink(listaDeLinks);
    const status = await checaStatus(links);

    return listaDeLinks.map((objeto, indice) => ({
        ...objeto,
        status: status[indice][0],
        statusTexto: status[indice][1]
    }))
}

function manejaErros (erro){
    if(erro.cause.code === 'ENOTFOUND'){
        return 'link não encontrado'
    }else{
        return 'ocorreu um erro'
    }
}

async function checaStatus(listaURLs){
    const arrStatus = await Promise.all(
        listaURLs.map(async (url) => {
        try{
            const response = await fetch(url)
            return [response.status,response.statusText];
        }catch (erro){
            return ['erro',manejaErros(erro)]
        }
        })
    )
    return arrStatus; 
}
 

