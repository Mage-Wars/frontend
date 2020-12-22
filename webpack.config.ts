import * as path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
import Dotenv from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

interface EnvVariables {
  DEV_SERVER_PORT?: string;
  NODE_ENV?:
  'development'
  |'production';
};

interface Configuration extends WebpackConfiguration {
  devServer?: WebpackDevServerConfiguration;
};

type WebpackConfig = (env: EnvVariables) => Configuration;

const webpackConfig: WebpackConfig = env => {

  function getEnvPath() {
    switch (env.NODE_ENV) {
      case 'development':
        return './env.development'
      case 'production':
        return './env.production'
      default:
        throw new Error(`'NODE_ENV' ${env.NODE_ENV} is not handled!`);
    }
  }

  return {
    entry: './src/index.tsx',
    output: {
      publicPath: '/',
      path: path.resolve(__dirname, 'dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader'
        }
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'public/index.html'),
        filename: 'index.html',
      }),
      new Dotenv({
        path: getEnvPath()
      }),
    ],
    devServer: {
      port: Number(env?.DEV_SERVER_PORT) || 3100,
      historyApiFallback: true,
    },
    resolve: {
      extensions: ['.js', '.ts', '.tsx'],
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@router': path.resolve(__dirname, 'src/router'),
        '@components': path.resolve(__dirname, 'src/components'),
        '@constants': path.resolve(__dirname, 'src/constants'),
        '@models': path.resolve(__dirname, 'src/models'),
        '@services': path.resolve(__dirname, 'src/services'),
      },
    },
  }
}

export default webpackConfig;
