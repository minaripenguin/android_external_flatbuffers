// automatically generated by the FlatBuffers compiler, do not modify

import { Monster as MyGameExample2Monster, MonsterT as MyGameExample2MonsterT } from '../../my-game/example2/monster';
import { Monster, MonsterT } from '../../my-game/example/monster';
import { TestSimpleTableWithEnum, TestSimpleTableWithEnumT } from '../../my-game/example/test-simple-table-with-enum';


export enum AnyUniqueAliases{
  NONE = 0,
  M = 1,
  TS = 2,
  M2 = 3
}

export function unionToAnyUniqueAliases(
  type: AnyUniqueAliases,
  accessor: (obj:Monster|MyGameExample2Monster|TestSimpleTableWithEnum) => Monster|MyGameExample2Monster|TestSimpleTableWithEnum|null
): Monster|MyGameExample2Monster|TestSimpleTableWithEnum|null {
  switch(AnyUniqueAliases[type]) {
    case 'NONE': return null; 
    case 'M': return accessor(new Monster())! as Monster;
    case 'TS': return accessor(new TestSimpleTableWithEnum())! as TestSimpleTableWithEnum;
    case 'M2': return accessor(new MyGameExample2Monster())! as MyGameExample2Monster;
    default: return null;
  }
}

export function unionListToAnyUniqueAliases(
  type: AnyUniqueAliases, 
  accessor: (index: number, obj:Monster|MyGameExample2Monster|TestSimpleTableWithEnum) => Monster|MyGameExample2Monster|TestSimpleTableWithEnum|null, 
  index: number
): Monster|MyGameExample2Monster|TestSimpleTableWithEnum|null {
  switch(AnyUniqueAliases[type]) {
    case 'NONE': return null; 
    case 'M': return accessor(index, new Monster())! as Monster;
    case 'TS': return accessor(index, new TestSimpleTableWithEnum())! as TestSimpleTableWithEnum;
    case 'M2': return accessor(index, new MyGameExample2Monster())! as MyGameExample2Monster;
    default: return null;
  }
}
