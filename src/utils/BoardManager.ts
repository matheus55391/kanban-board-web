export interface Item {
  id: string;
  content: string;
}

export interface State {
  planned: Item[];
  inProgress: Item[];
  done: Item[];
}

const getItems = (count: number, offset: number = 0): Item[] =>
  Array.from({ length: count }, (_, k) => ({
    id: `item-${k + offset}`,
    content: `item ${k + offset}`,
  }));

export class BoardManager {
  static initialState: State = {
    planned: getItems(3, 0),
    inProgress: getItems(3, 3),
    done: getItems(3, 6),
  };

  static reorderList(
    list: Item[],
    startIndex: number,
    endIndex: number
  ): Item[] {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  }

  static moveItem(
    sourceList: Item[],
    destList: Item[],
    sourceIndex: number,
    destIndex: number
  ): { newSourceList: Item[]; newDestList: Item[] } {
    const newSourceList = Array.from(sourceList);
    const [removed] = newSourceList.splice(sourceIndex, 1);
    const newDestList = Array.from(destList);
    newDestList.splice(destIndex, 0, removed);

    return { newSourceList, newDestList };
  }

  static handleDragEnd(
    state: State,
    sourceId: keyof State,
    destinationId: keyof State,
    sourceIndex: number,
    destIndex: number
  ): State {
    if (sourceId === destinationId) {
      const newList = this.reorderList(state[sourceId], sourceIndex, destIndex);
      return { ...state, [sourceId]: newList };
    } else {
      const { newSourceList, newDestList } = this.moveItem(
        state[sourceId],
        state[destinationId],
        sourceIndex,
        destIndex
      );
      return {
        ...state,
        [sourceId]: newSourceList,
        [destinationId]: newDestList,
      };
    }
  }
}
