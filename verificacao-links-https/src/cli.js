#!/usr/bin/env node

import chalk from 'chalk';
import fs from 'fs';
import pegaArquivo from './index.js';
import listaValidada from './http-validacao.js';

const caminho = process.argv;

async function imprimeLista(valida, resultado, identificador = ''){
    if(valida){
        const listaDeLinks = await listaValidada(resultado)
        console.log(
            // chalk.yellow('lista validada'), 
            chalk.black.bgGreen(identificador),
            // listaDeLinks,
            console.log(chalk.blue('lista de links com problemas')), 
            linksComProblema(listaDeLinks),
        )
    }else{
        console.log(chalk.yellow('lista de links'), 
        chalk.black.bgGreen(identificador),
        resultado)
    }
}

async function processaTexto(argumentos){
    const caminho = argumentos[2];
    const valida = argumentos[3] === '--valida';

    try{
        fs.lstatSync(caminho);
    }catch (erro){
        if(erro.code === 'ENOENT'){
            console.log('arquivo ou diretório não existe');
            return;
        }
    }

    if(fs.lstatSync(caminho).isFile()){
        const resultado = await pegaArquivo(caminho);
        imprimeLista(valida,resultado)
    } else if(fs.lstatSync(caminho).isDirectory()){
        const arquivos = await fs.promises.readdir(caminho);
        arquivos.forEach(async (nomeDeArquivo) => {
            const lista = await pegaArquivo(`${caminho}/${nomeDeArquivo}`);
            imprimeLista(valida,lista, nomeDeArquivo);
        })
    }
}

processaTexto(caminho);

function linksComProblema(lista){
    const listaProblemas = [];
    for (let i=0; i < lista.length;i++){
        if (Number(lista[i].status) !== 200){
            listaProblemas.push(lista[i]);
        }
    }
    return listaProblemas
} 
