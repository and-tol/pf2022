import { promises as fs } from 'fs';
import path from 'path';

export const getServerData = async <T>(
  dirname: string,
  filename: string
): Promise<T> => {
  const dirPath = path.join(process.cwd(), dirname);
  const fileNames = await fs.readdir(dirPath);
  const fileName = fileNames.filter((fn) => fn === filename)[0];
  const filePath = path.join(dirPath, fileName);

  const fileContents = await fs.readFile(filePath, 'utf8');

  // const fileName = fileNames.filter(
  //   (fileName) => fileName.split('.')[0] === 'projects'
  // )[0];

  return JSON.parse(fileContents);
};
