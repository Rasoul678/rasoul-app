import { exec } from "child_process";

type PromiseType = { stdout: string; stderr: string };

export const executeBash = async (cmd: string) => {
  return new Promise<PromiseType>((resolve, reject) => {
    exec(cmd, (err, stdout, stderr) => {
      if (err) {
        reject(err);
      } else {
        resolve({ stdout: stdout.slice(0, 3), stderr });
      }
    });
  });
};
