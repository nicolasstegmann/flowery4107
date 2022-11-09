export const Loader = ({loading, text}) => {
   const parameters = loading ? {
      style: {fontWeight : 'bold'}
   } : {};
   return loading && <span {...parameters}>Cargando {text? text : 'información'}...</span>
}
