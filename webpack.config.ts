import * as path from 'path';
import { Configuration as WebpackConfiguration } from 'webpack';

interface EnvVariables {
  //TODO: fill this later
  SOME_VAR?: string
}

type WebpackConfig = (env: EnvVariables) => WebpackConfiguration;

export const webpackConfig: WebpackConfig = () => {
  return {}
}