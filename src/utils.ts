export const getNonNullableList = <T>(
  list?: Array<T | undefined | null>
): Array<T> => (list ?? []).filter((item): item is T => item != null);
