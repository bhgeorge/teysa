import { QuestionCollection } from 'inquirer';

export namespace TeysaCli {
  export interface TemplateArgs {
    name: string;
    dir: DirectoryData;
  }

  export type Template<T extends TemplateArgs> = (args: T) => string;

  export type TemplateDictionary = Record<`[name].${string}`, Template<any>>;

  export type DirectoryData = {
    name: string;
    path: string;
    templates?: TemplateDictionary;
  };

  export interface TeysaConfig {
    scaffold?: {
      dirs: DirectoryData[];
      templateArgs?: QuestionCollection<any>;
      templates: TemplateDictionary;
    };
  }
}
