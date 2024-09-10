export const GetWineStylesWhere = `
query Styles($stylesWhere: StylesWhere, $typesWhere: TypesWhere) {
  styles(where: $stylesWhere) {
    description
    name
    id
    typeId
  }
  types(where: $typesWhere) {
    name
    id
  }
}`