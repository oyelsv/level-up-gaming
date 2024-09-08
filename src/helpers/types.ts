import type { ModelDefinitionValue } from '@mswjs/data/lib/glossary';

export type ObjectFields<T> = Required<{
  [Property in keyof T]: Property;
}>;

export type DeepPartial<T> = T extends Object
  ? {
      [P in keyof T]?: DeepPartial<T[P]>;
    }
  : T;

export type MockModelFactory<T> = {
  [Property in keyof T]: ModelDefinitionValue;
};
