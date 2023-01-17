import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import vueSetupExtend from "vite-plugin-vue-setup-extend";
import usePluginImport from "vite-plugin-importer";
// import { resolve } from "node:path";
// import { getComponentEntries } from "./build/utils";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    vueSetupExtend(),
    usePluginImport({
      libraryName: "xufeng",
      // 'style': true
      customStyleName: (name) => {
        console.log(name, 'name');
        return `xufeng/lib/${'button'}/style.css`;
      },
    }),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "@p": fileURLToPath(new URL("./packages", import.meta.url)),
    },
  },
  // build: {
  //   outDir: "lib", // 指定输出路径
  //   assetsDir: "theme", // 静态资源的存放路径
  //   // sourcemap: true, //是否构建source map 文件
  //   cssCodeSplit: true, //css代码拆分,禁用则所有样式保存在一个css里面
  //   lib: {
  //     entry: {
  //       ...getComponentEntries("packages/components"),
  //       index: resolve(__dirname, "./packages/index.ts"),
  //     },

  //     // name: "XuFeng",
  //     // fileName: "xu-feng",
  //   },
  //   rollupOptions: {
  //     external: ["vue"],
  //     output: {
  //       preserveModules: true,
  //       entryFileNames: "js/[name].js",
  //       assetFileNames: "[ext]/[name].[ext]",
  //       globals: {
  //         vue: "Vue",
  //       },
  //     },
  //   },
  // },
});
