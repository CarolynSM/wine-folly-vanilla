export const GetWineStylesWhere = `
query Styles($where: StylesWhere) {
  styles(where: $where) {
    description
    name
    id
    typeId
  }
}`