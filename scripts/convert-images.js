import sharp from "sharp";
import { readdir } from "fs/promises";
import { join, extname, basename } from "path";

const INPUT_DIR = "src/assets/images/projects";
const MAX_WIDTH = 800;
const QUALITY = 82;

const files = await readdir(INPUT_DIR);
const pngs = files.filter((f) => extname(f).toLowerCase() === ".png");

for (const file of pngs) {
  const input = join(INPUT_DIR, file);
  const output = join(INPUT_DIR, basename(file, ".png") + ".webp");

  const { width } = await sharp(input).metadata();
  const resize = width > MAX_WIDTH ? { width: MAX_WIDTH } : null;

  const pipeline = sharp(input);
  if (resize) pipeline.resize(resize);
  const { size } = await pipeline
    .webp({ quality: QUALITY })
    .toFile(output)
    .then(async (info) => {
      const { size: inSize } = await import("fs").then((fs) =>
        fs.promises.stat(input)
      );
      return { size: inSize, outSize: info.size };
    })
    .then(({ size, outSize }) => {
      const saved = (((size - outSize) / size) * 100).toFixed(1);
      console.log(
        `${file} → ${basename(output)}  ${(size / 1024).toFixed(1)} KB → ${(outSize / 1024).toFixed(1)} KB  (-${saved}%)`
      );
      return { size };
    });
}
