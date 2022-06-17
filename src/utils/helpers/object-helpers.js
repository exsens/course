export const updateObjectInArray = (items, itemId, objectPropName, newObjectProps) => {
  items.map((item) => {
    if (item[objectPropName] === itemId) {
      return {
        ...item,
        ...newObjectProps,
      }
    }
    return item
  })
}
