const fs = require('fs').promises;

const writeJsonData = async (newMovie, pathData) => {
  try {
      const Json = JSON.stringify(newMovie);
      await fs.writeFile(pathData, Json);
  } catch (error) {
    console.error(`Erro na leitura do arquivo: ${error}`);
  }
};

module.exports = writeJsonData;