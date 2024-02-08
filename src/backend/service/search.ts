import * as fs from "fs";

const search = (searchTerm: string): any[] => {
  const result: any[] = [];
  const files: string[] = fs.readdirSync("./src/data"); //lista os nomes dos arquivos

  files.forEach((file) => {
    const data = JSON.parse(fs.readFileSync(`./src/data/${file}`, "utf-8")); //Lé o arquivo  e converte em objeto e armazena em data

    const filteredData = data.filter(
      (item: any) => JSON.stringify(item).toLowerCase().includes(searchTerm) //Filtra os dados do arquivo atual para incluir apenas os itens cuja representação em string
    );

    result.push(...filteredData);
  });

  return result;
};

export default search;
