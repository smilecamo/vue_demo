import Transfer from "./Transfer/Transfer";
import MyTable from "./Table/Table";
const components = {
  Transfer,
  MyTable
};
export { Transfer, MyTable };
export default {
  install(app) {
    for (const comp in components) {
      app.component(comp, components[comp]);
    }
  },
};
