// eslint.config.mjs
import { defineConfig } from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default defineConfig({
  // Define quais arquivos serão verificados pelo ESLint
  files: ['**/*.{js,mjs,cjs,jsx}'],

  // Configurações da linguagem
  languageOptions: {
    sourceType: 'module', // Habilita suporte a módulos ECMAScript
    ecmaVersion: 'latest', // Usa a versão mais recente do ECMAScript
    globals: {
      ...globals.browser, // Adiciona variáveis globais do navegador
    },
  },

  // Plugins usados
  plugins: [pluginReact],

  // Regras personalizadas
  rules: {
    // Aqui você pode adicionar regras específicas para o seu projeto
    // Exemplo: Desativar regras desnecessárias
    'react/react-in-jsx-scope': 'off', // Desativa uma regra obsoleta do React
  },

  // Extende configurações padrão
  extends: [
    'eslint:recommended', // Configuração recomendada do ESLint
    'plugin:react/recommended', // Configuração recomendada do plugin React
  ],
});