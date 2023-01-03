import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import { resolve } from "node:path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueSetupExtend()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@p": fileURLToPath(new URL("./packages", import.meta.url)),
      "/images": "./packages/theme/image",
    },
  },
  build: {
    outDir: "lib", // 指定输出路径
    assetsDir: "theme", // 静态资源的存放路径
    // sourcemap: true, //是否构建source map 文件
    cssCodeSplit: true, //css代码拆分,禁用则所有样式保存在一个css里面
    lib: {
      entry: resolve(__dirname, "./packages/index.ts"),
      name: "XuFeng",
      fileName: "xu-feng",
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        // entryFileNames: "js/[name].js",
        assetFileNames: "[ext]/[name].[ext]",
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
